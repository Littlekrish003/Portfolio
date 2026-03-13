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

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section ref={ref} className="py-16 border-y border-border bg-lime-50">
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
      </div>
    </section>
  );
};

export default TechStackSection;
