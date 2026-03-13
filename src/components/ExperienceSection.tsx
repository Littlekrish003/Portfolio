import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contributions = [
    "Completed comprehensive full-stack web development training",
    "Built automation projects using UiPath RPA",
    "Designed bots to automate repetitive tasks, improving accuracy and efficiency",
    "Demonstrated strong dedication, technical capability, and learning attitude"
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-card" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Professional Journey
          </span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">
            Real-world experience and hands-on training
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-2xl shadow-card overflow-hidden card-hover">
            {/* Header */}
            <div className="bg-gradient-primary p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-primary-foreground">
                      Full Stack Web Development Intern
                    </h3>
                    <p className="text-primary-foreground/80">
                      Codtech IT Solutions Private Limited
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Nov 2025 – Jan 2026 · 6 Weeks
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h4 className="font-display font-semibold text-foreground mb-6">
                Key Contributions
              </h4>
              <ul className="space-y-4">
                {contributions.map((contribution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{contribution}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Skills used */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {['Full Stack Development', 'UiPath RPA', 'Process Automation', 'Bot Development'].map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Internship Certificate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 pt-6 border-t border-border"
              >
                <a
                  href="/certificates/internship-certificate.pdf"
                  download="Gowtham-Internship-Certificate.pdf"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 hover:border-primary/40 rounded-xl px-5 py-3 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Internship Certificate
                    </p>
                    <p className="text-xs text-muted-foreground">Click to download official certificate</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
