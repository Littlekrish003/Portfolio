import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import servicenowLogo from '@/assets/servicenow-logo.jpeg';
import uipathCertificate from '@/assets/uipath-certificate.png';

const projects = [
  {
    title: "ServiceNow ITSM Automation",
    description: "Designed and configured comprehensive Incident, Problem, and Change workflows with custom reporting dashboards. Implemented automation rules to streamline ticket resolution and improve SLA compliance.",
    tags: ["ServiceNow", "ITSM", "Workflow Automation", "Dashboards"],
    color: "from-green-500 to-emerald-600",
    headerImage: servicenowLogo,
    headerBg: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  {
    title: "UiPath RPA Automation",
    description: "Built intelligent bots to automate repetitive business processes, significantly reducing manual workload and improving operational accuracy. Designed end-to-end automation workflows.",
    tags: ["UiPath", "RPA", "Process Automation", "Bot Development"],
    color: "from-orange-500 to-amber-600",
    headerImage: uipathCertificate,
    headerBg: "bg-white"
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container bg-cloud-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto">
            Hands-on projects showcasing practical implementation of cloud and automation skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover"
            >
              {/* Header with full image */}
              <div className={`relative ${project.headerBg} p-4`}>
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={project.headerImage}
                    alt={`${project.title}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <ArrowUpRight className="w-5 h-5 text-gray-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
