import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import awsBadge from '@/assets/aws-badge.png';
import servicenowLogo from '@/assets/servicenow-logo.jpeg';
import oracleBadge from '@/assets/oracle-badge.jpeg';
import uipathBadge from '@/assets/uipath-badge.png';
import ibmBadge from '@/assets/ibm-badge.png';

const technologies = [
  {
    name: "AWS",
    color: "#FF9900",
    logo: awsBadge
  },
  {
    name: "ServiceNow",
    color: "#62D84E",
    logo: servicenowLogo
  },
  {
    name: "Oracle",
    color: "#F80000",
    logo: oracleBadge
  },
  {
    name: "UiPath",
    color: "#FA4616",
    logo: uipathBadge
  },
  {
    name: "IBM",
    color: "#0F62FE",
    logo: ibmBadge
  }
];

// Additional hands-on stack (from cloud & full-stack projects)
const stackItems = [
  { name: "Kubernetes", short: "K8s", color: "#326CE5" },
  { name: "Docker", short: "DK", color: "#2496ED" },
  { name: "Linux", short: "LX", color: "#F0B429" },
  { name: "Nginx", short: "NG", color: "#009639" },
  { name: "Node.js", short: "JS", color: "#5FA04E" },
  { name: "Express", short: "EX", color: "#64748B" },
  { name: "MySQL", short: "SQL", color: "#4479A1" },
  { name: "Amazon S3", short: "S3", color: "#569A31" },
  { name: "EC2", short: "EC2", color: "#FF9900" },
  { name: "Route 53", short: "R53", color: "#8C4FFF" },
  { name: "Lambda", short: "λ", color: "#FF9900" },
  { name: "Amplify", short: "AMP", color: "#DD344C" },
  { name: "Bedrock", short: "AI", color: "#01A88D" },
  { name: "Git & GitHub", short: "GIT", color: "#F05033" },
  { name: "CI/CD", short: "CD", color: "#6366F1" },
  { name: "React", short: "RE", color: "#61DAFB" }
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section ref={ref} className="py-16 border-y border-border bg-secondary/40 dark:bg-card/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="font-display font-semibold text-lg text-muted-foreground">
            Technology Stack
          </h3>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3"
            >
              <div
                className="w-20 h-20 rounded-2xl bg-background shadow-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2"
                style={{ boxShadow: `0 4px 20px -4px ${tech.color}40` }}
              >
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto"
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.35 + index * 0.04 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/80 px-3 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.short}
              </span>
              <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
