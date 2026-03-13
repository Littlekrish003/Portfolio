import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Server, Cog, Database, Users, Network } from 'lucide-react';
const skillCategories = [{
  title: "Cloud & Infrastructure",
  icon: Cloud,
  color: "from-sky-400 to-blue-600",
  skills: ["AWS Fundamentals", "Oracle Cloud Infrastructure", "Cloud Architecture"]
}, {
  title: "IT Service Management",
  icon: Server,
  color: "from-emerald-400 to-green-600",
  skills: ["ServiceNow ITSM", "Flow Designer", "Service Portal", "App Engine Studio", "Now Assist"]
}, {
  title: "Automation",
  icon: Cog,
  color: "from-amber-400 to-orange-600",
  skills: ["UiPath RPA", "Process Automation", "Bot Development"]
}, {
  title: "Databases & Networking",
  icon: Database,
  color: "from-violet-400 to-purple-600",
  skills: ["SQL", "Networking Fundamentals", "Protocol Handling"]
}, {
  title: "Professional Skills",
  icon: Users,
  color: "from-rose-400 to-pink-600",
  skills: ["Project Management", "Communication", "Team Collaboration"]
}, {
  title: "Development",
  icon: Network,
  color: "from-cyan-400 to-teal-600",
  skills: ["Full Stack Web Development", "Software Engineering"]
}];
const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="skills" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Technical Expertise
          </span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A diverse skill set spanning cloud platforms, automation, and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => <motion.div key={category.title} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.1 * index
        }} className="group rounded-xl p-6 shadow-card card-hover bg-orange-50">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;