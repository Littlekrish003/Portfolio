import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface ArchNode {
  id: string;
  x: number; // 0-100 percent
  y: number; // 0-100 percent
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  color: string; // tailwind gradient e.g. "from-orange-500 to-orange-600"
}

export interface ArchEdge {
  from: string;
  to: string;
  label?: string;
  curve?: number; // -1..1 bend amount
  delay?: number;
  color?: string; // stroke color override
}

interface Props {
  nodes: ArchNode[];
  edges: ArchEdge[];
  groups?: { x: number; y: number; w: number; h: number; label: string; color?: string; dashed?: boolean }[];
  width?: number;
  height?: number;
  title?: string;
}

/**
 * AWS-style architecture diagram with animated data-packets flowing along
 * connection lines (SVG <animateMotion>). Coordinates are percentages (0-100).
 */
const AwsArchDiagram = ({ nodes, edges, groups = [], width = 1000, height = 560, title }: Props) => {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const NODE_W = 96;
  const NODE_H = 96;

  const px = (n: ArchNode) => (n.x / 100) * width;
  const py = (n: ArchNode) => (n.y / 100) * height;

  const buildPath = (a: ArchNode, b: ArchNode, curve = 0) => {
    const x1 = px(a);
    const y1 = py(a);
    const x2 = px(b);
    const y2 = py(b);
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    // perpendicular offset for curve
    const ox = (-dy / len) * curve * 80;
    const oy = (dx / len) * curve * 80;
    const cx = mx + ox;
    const cy = my + oy;
    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  };

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 p-4 md:p-6 shadow-md">
      {title && (
        <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground text-center">{title}</div>
      )}
      <div className="relative mx-auto" style={{ width: '100%', maxWidth: width, aspectRatio: `${width} / ${height}` }}>
        <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
            </marker>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Group containers (e.g. AWS VPC, Auto Scaling Group) */}
          {groups.map((g, i) => (
            <g key={i}>
              <rect
                x={(g.x / 100) * width}
                y={(g.y / 100) * height}
                width={(g.w / 100) * width}
                height={(g.h / 100) * height}
                rx={14}
                fill="hsl(var(--primary) / 0.04)"
                stroke={g.color || 'hsl(var(--primary) / 0.4)'}
                strokeWidth={1.5}
                strokeDasharray={g.dashed === false ? undefined : '6 6'}
              />
              <text
                x={(g.x / 100) * width + 12}
                y={(g.y / 100) * height + 18}
                fontSize="11"
                fontWeight="600"
                fill="hsl(var(--primary))"
                className="uppercase tracking-wider"
              >
                {g.label}
              </text>
            </g>
          ))}

          {/* Edges */}
          {edges.map((e, i) => {
            const a = nodeMap[e.from];
            const b = nodeMap[e.to];
            if (!a || !b) return null;
            const d = buildPath(a, b, e.curve || 0);
            const stroke = e.color || 'hsl(var(--primary) / 0.55)';
            const id = `edge-${i}`;
            return (
              <g key={i}>
                <path id={id} d={d} fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" markerEnd="url(#arrow)" />
                {/* dashed flow overlay */}
                <path d={d} fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" strokeDasharray="6 10" opacity={0.6}>
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1.2s" repeatCount="indefinite" />
                </path>
                {/* moving packet */}
                <circle r={5} fill="hsl(var(--primary))">
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${(e.delay || 0)}s`} rotate="auto">
                    <mpath href={`#${id}`} />
                  </animateMotion>
                </circle>
                <circle r={3} fill="white">
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${(e.delay || 0)}s`} rotate="auto">
                    <mpath href={`#${id}`} />
                  </animateMotion>
                </circle>
                {e.label && (
                  <text fontSize="10" fill="hsl(var(--muted-foreground))" fontWeight="500">
                    <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
                      <tspan dy="-6">{e.label}</tspan>
                    </textPath>
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Node tiles (HTML overlay for crisp icons + labels) */}
        {nodes.map((n, i) => {
          const left = (n.x / 100) * 100;
          const top = (n.y / 100) * 100;
          const Icon = n.icon;
          return (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="absolute flex flex-col items-center"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: NODE_W,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <div
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${n.color} flex items-center justify-center shadow-lg ring-2 ring-background`}
              >
                <Icon className="w-7 h-7 text-white" />
                <span className="absolute inset-0 rounded-2xl animate-ping bg-white/10" style={{ animationDuration: '2.5s' }} />
              </div>
              <div className="mt-2 text-center">
                <div className="text-[11px] md:text-xs font-bold text-foreground leading-tight">{n.label}</div>
                {n.sublabel && (
                  <div className="text-[9px] md:text-[10px] text-muted-foreground leading-tight">{n.sublabel}</div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AwsArchDiagram;