import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Globe, Brain, Camera, Calculator, Dumbbell,
  Database, Sparkles, LayoutDashboard, FileDown, Code2, Palette, Braces, ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LIVE_URL = 'https://athlete.myserver.sbs/';

/* ---------------- diagram model ---------------- */
const W = 1080;
const H = 660;

type Node = {
  id: string; x: number; y: number; label: string; sub?: string;
  icon: LucideIcon; tone: string; ring: string;
};

const lanes = [
  { y: 30, h: 130, label: 'Presentation Layer', hint: 'HTML5 · CSS3' },
  { y: 186, h: 134, label: 'Interaction Layer', hint: 'Vanilla JavaScript' },
  { y: 346, h: 134, label: 'Intelligence Layer', hint: 'Rules + AI Vision' },
  { y: 506, h: 124, label: 'Persistence Layer', hint: 'Local Storage' },
];

const nodes: Node[] = [
  { id: 'user', x: 130, y: 104, label: 'Athlete', sub: 'Browser client', icon: Globe, tone: 'from-sky-500 to-sky-600', ring: 'hsl(199 89% 48%)' },
  { id: 'ui', x: 400, y: 104, label: 'Responsive UI', sub: 'Meal Builder · Profile', icon: LayoutDashboard, tone: 'from-emerald-500 to-emerald-600', ring: 'hsl(160 84% 39%)' },
  { id: 'export', x: 900, y: 104, label: 'Export Summary', sub: 'Shareable report', icon: FileDown, tone: 'from-slate-500 to-slate-600', ring: 'hsl(215 16% 47%)' },

  { id: 'state', x: 265, y: 260, label: 'State Engine', sub: 'Meal & profile model', icon: Braces, tone: 'from-teal-500 to-teal-600', ring: 'hsl(174 72% 40%)' },
  { id: 'macro', x: 560, y: 260, label: 'Macro Calculator', sub: 'kcal · P / C / F', icon: Calculator, tone: 'from-green-500 to-green-600', ring: 'hsl(142 71% 40%)' },
  { id: 'targets', x: 850, y: 260, label: 'Target Resolver', sub: 'Discipline · weight · goal', icon: ShieldCheck, tone: 'from-lime-600 to-green-700', ring: 'hsl(120 50% 35%)' },

  { id: 'food', x: 200, y: 420, label: 'Food Dataset', sub: 'Indian meal nutrition', icon: Database, tone: 'from-amber-500 to-amber-600', ring: 'hsl(38 92% 50%)' },
  { id: 'suggest', x: 490, y: 420, label: 'Suggestion Engine', sub: 'Protein / carb / fat boosts', icon: Sparkles, tone: 'from-emerald-600 to-teal-700', ring: 'hsl(165 60% 32%)' },
  { id: 'workout', x: 760, y: 420, label: 'Workout Planner', sub: '7-day split + progress', icon: Dumbbell, tone: 'from-indigo-500 to-indigo-600', ring: 'hsl(239 60% 55%)' },
  { id: 'vision', x: 975, y: 420, label: 'AI Vision API', sub: 'Food photo analyzer', icon: Brain, tone: 'from-fuchsia-500 to-purple-600', ring: 'hsl(280 65% 55%)' },

  { id: 'photo', x: 265, y: 580, label: 'Photo Upload', sub: 'Dish image input', icon: Camera, tone: 'from-rose-500 to-rose-600', ring: 'hsl(347 77% 55%)' },
  { id: 'store', x: 700, y: 580, label: 'Daily Tracking Store', sub: 'Save · Load · Merge days', icon: Database, tone: 'from-cyan-600 to-blue-700', ring: 'hsl(200 80% 40%)' },
];

type Edge = { from: string; to: string; label?: string; curve?: number; delay?: number; dim?: boolean };

const edges: Edge[] = [
  { from: 'user', to: 'ui', label: 'input', delay: 0 },
  { from: 'ui', to: 'state', label: 'events', curve: 0.12, delay: 0.2 },
  { from: 'state', to: 'macro', label: 'items', delay: 0.4 },
  { from: 'macro', to: 'targets', label: 'totals', delay: 0.6 },
  { from: 'food', to: 'state', label: 'lookup', curve: 0.15, delay: 0.8 },
  { from: 'macro', to: 'suggest', label: 'deltas', curve: 0.1, delay: 1.0 },
  { from: 'targets', to: 'workout', label: 'goal', curve: -0.1, delay: 1.2 },
  { from: 'photo', to: 'vision', label: 'image', curve: -0.1, delay: 1.4, dim: true },
  { from: 'vision', to: 'macro', label: 'est. macros', curve: 0.26, delay: 1.6 },
  { from: 'suggest', to: 'ui', label: 'render', curve: -0.34, delay: 1.8, dim: true },
  { from: 'state', to: 'store', label: 'persist', curve: -0.15, delay: 2.0 },
  { from: 'targets', to: 'export', label: 'summary', curve: 0.12, delay: 2.2 },
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

const path = (a: Node, b: Node, curve = 0) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const mx = (a.x + b.x) / 2 + (-dy / len) * curve * 160;
  const my = (a.y + b.y) / 2 + (dx / len) * curve * 160;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
};

const midPoint = (a: Node, b: Node, curve = 0) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const cx = (a.x + b.x) / 2 + (-dy / len) * curve * 160;
  const cy = (a.y + b.y) / 2 + (dx / len) * curve * 160;
  return { x: (a.x + 2 * cx + b.x) / 4, y: (a.y + 2 * cy + b.y) / 4 };
};

const legend = [
  { label: 'Client rendering', color: 'hsl(199 89% 48%)' },
  { label: 'Computation', color: 'hsl(142 71% 40%)' },
  { label: 'AI inference', color: 'hsl(280 65% 55%)' },
  { label: 'Persistence', color: 'hsl(200 80% 40%)' },
];

/* ---------------- flow narrative ---------------- */
const steps = [
  { step: 1, icon: Globe, title: 'Athlete opens the app', description: 'A fully static HTML/CSS client loads instantly in the browser — no server round-trip required.', color: 'from-sky-500 to-sky-600' },
  { step: 2, icon: LayoutDashboard, title: 'Meal Builder & profile input', description: 'The athlete adds common Indian foods with servings and sets discipline, body weight, goal and activity level.', color: 'from-emerald-500 to-emerald-600' },
  { step: 3, icon: Database, title: 'Nutrition dataset lookup', description: 'Each item is matched against a curated Indian food nutrition dataset to resolve per-serving calories and macros.', color: 'from-amber-500 to-amber-600' },
  { step: 4, icon: Calculator, title: 'Macro calculation engine', description: 'Live aggregation of calories, protein, carbohydrate and fat, rendered as animated progress bars.', color: 'from-green-500 to-green-600' },
  { step: 5, icon: ShieldCheck, title: 'Athlete target resolver', description: 'Sport-specific formulas convert weight, goal and activity level into calorie and macro targets.', color: 'from-lime-600 to-green-700' },
  { step: 6, icon: Sparkles, title: 'Actionable suggestion engine', description: 'Gaps between intake and targets become one-tap fixes — add paneer, rice, ghee or nuts to close each deficit.', color: 'from-emerald-600 to-teal-700' },
  { step: 7, icon: Brain, title: 'AI food photo analysis', description: 'An uploaded dish photo is sent to a vision model that identifies the dish and returns estimated macros back into the plate.', color: 'from-fuchsia-500 to-purple-600' },
  { step: 8, icon: Dumbbell, title: '7-day workout planner', description: 'A push/pull/legs weekly split with per-day checklists and completion percentages tied to the athlete goal.', color: 'from-indigo-500 to-indigo-600' },
  { step: 9, icon: FileDown, title: 'Daily tracking & export', description: 'Days are saved, loaded and merged in browser storage, and the full plate can be exported as a summary.', color: 'from-cyan-600 to-blue-700' },
];

const stack = [
  { name: 'HTML5', icon: Code2 },
  { name: 'CSS3', icon: Palette },
  { name: 'JavaScript', icon: Braces },
  { name: 'AI Vision API', icon: Brain },
  { name: 'Nutrition Dataset', icon: Database },
  { name: 'Local Storage', icon: Database },
  { name: 'Responsive Layout', icon: LayoutDashboard },
  { name: 'Export Engine', icon: FileDown },
];

const AthletePlateArchitecture = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="section-container py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            className="gap-2"
            onClick={() => {
              navigate('/');
              setTimeout(() => document.getElementById('cloud-projects')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <Button asChild variant="default" className="bg-gradient-to-r from-primary to-primary/80 gap-2">
            <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
              View Live Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            System Architecture
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Athlete Performance Plate
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A layered, client-side intelligence architecture — presentation, interaction, intelligence and persistence
            tiers working together to turn everyday Indian meals into athlete-specific macros, suggestions and plans.
          </p>
        </motion.div>

        {/* ---------- layered diagram ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-6xl mx-auto mb-6"
        >
          <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-border bg-muted/40">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Layered Data Flow · Live
              </span>
              <div className="flex flex-wrap items-center gap-4">
                {legend.map((l) => (
                  <span key={l.label} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto p-4 md:p-6">
              <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[720px]" style={{ aspectRatio: `${W} / ${H}` }}>
                <defs>
                  <pattern id="apGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="hsl(var(--border))" strokeWidth="0.6" opacity="0.55" />
                  </pattern>
                  <marker id="apArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
                  </marker>
                  <filter id="apGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect x="0" y="0" width={W} height={H} fill="url(#apGrid)" />

                {/* lanes */}
                {lanes.map((l) => (
                  <g key={l.label}>
                    <rect
                      x="18" y={l.y} width={W - 36} height={l.h} rx="16"
                      fill="hsl(var(--primary) / 0.035)"
                      stroke="hsl(var(--primary) / 0.22)"
                      strokeWidth="1"
                      strokeDasharray="7 7"
                    />
                    <text x="34" y={l.y + 20} fontSize="11" fontWeight="700" letterSpacing="1.6" fill="hsl(var(--primary))">
                      {l.label.toUpperCase()}
                    </text>
                    <text x={W - 34} y={l.y + 20} fontSize="10" textAnchor="end" fill="hsl(var(--muted-foreground))" letterSpacing="0.8">
                      {l.hint}
                    </text>
                  </g>
                ))}

                {/* edges */}
                {edges.map((e, i) => {
                  const a = nodeMap[e.from];
                  const b = nodeMap[e.to];
                  if (!a || !b) return null;
                  const d = path(a, b, e.curve || 0);
                  const id = `ap-edge-${i}`;
                  const stroke = e.dim ? 'hsl(var(--muted-foreground) / 0.5)' : 'hsl(var(--primary) / 0.5)';
                  return (
                    <g key={id}>
                      <path id={id} d={d} fill="none" stroke={stroke} strokeWidth="1.6" markerEnd="url(#apArrow)" />
                      <path d={d} fill="none" stroke={stroke} strokeWidth="1.6" strokeDasharray="5 11" opacity="0.75">
                        <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1.4s" repeatCount="indefinite" />
                      </path>
                      <circle r="4.5" fill="hsl(var(--primary))" filter="url(#apGlow)">
                        <animateMotion dur="4s" begin={`${e.delay || 0}s`} repeatCount="indefinite" rotate="auto">
                          <mpath href={`#${id}`} />
                        </animateMotion>
                      </circle>
                      {e.label && (() => {
                        const m = midPoint(a, b, e.curve || 0);
                        const w = e.label.length * 5.2 + 12;
                        return (
                          <g>
                            <rect x={m.x - w / 2} y={m.y - 8} width={w} height={16} rx={8} fill="hsl(var(--card))" opacity="0.92" />
                            <text x={m.x} y={m.y + 3.5} fontSize="9.5" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontWeight="600" letterSpacing="0.3">
                              {e.label}
                            </text>
                          </g>
                        );
                      })()}
                    </g>
                  );
                })}

                {/* nodes */}
                {nodes.map((n, i) => (
                  <motion.g
                    key={n.id}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  >
                    <rect
                      x={n.x - 27} y={n.y - 44} width="54" height="54" rx="15"
                      fill="hsl(var(--card))" stroke={n.ring} strokeWidth="1.8"
                    />
                    <rect
                      x={n.x - 27} y={n.y - 44} width="54" height="54" rx="15"
                      fill={n.ring} opacity="0.12"
                    />
                    <circle cx={n.x} cy={n.y - 17} r="30" fill="none" stroke={n.ring} strokeWidth="1" opacity="0.35">
                      <animate attributeName="r" values="26;33;26" dur="3.4s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="3.4s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                    </circle>
                    <g transform={`translate(${n.x - 11}, ${n.y - 28})`} color={n.ring}>
                      <n.icon width={22} height={22} stroke={n.ring} strokeWidth={1.9} />
                    </g>
                    <text x={n.x} y={n.y + 26} fontSize="11.5" fontWeight="700" textAnchor="middle" fill="hsl(var(--foreground))">
                      {n.label}
                    </text>
                    {n.sub && (
                      <text x={n.x} y={n.y + 39} fontSize="9.5" textAnchor="middle" fill="hsl(var(--muted-foreground))">
                        {n.sub}
                      </text>
                    )}
                  </motion.g>
                ))}
              </svg>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mb-16">
          Fig. 1 — End-to-end request and inference flow across the four architectural tiers
        </p>

        {/* ---------- step narrative ---------- */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 hidden md:block flow-line">
              <span className="flow-pulse" style={{ ['--flow-duration' as any]: '5s' }} />
              <span className="flow-pulse" style={{ ['--flow-duration' as any]: '5s', animationDelay: '2.5s' }} />
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`flow-icon w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-lg`}
                      style={{ ['--flow-delay' as any]: `${index * 0.35}s` }}
                    >
                      <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white mb-1" />
                      <span className="text-[10px] md:text-xs font-bold text-white/80">Step {step.step}</span>
                    </div>
                  </div>

                  <div className="flex-1 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute left-8 md:left-12 -bottom-3 transform -translate-x-1/2 z-20 hidden md:block">
                      <ArrowRight className="w-4 h-4 text-primary/50 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- stack ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stack.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl shadow-sm"
              >
                <s.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AthletePlateArchitecture;
