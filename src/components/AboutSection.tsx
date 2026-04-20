import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, TrendingUp, Award } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpeg';
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const highlights = [{
    icon: Target,
    title: "Career Goal",
    description: "Become a Cloud Engineer specializing in scalable, secure solutions"
  }, {
    icon: Lightbulb,
    title: "Approach",
    description: "Continuous learning with hands-on platform experience"
  }, {
    icon: TrendingUp,
    title: "Focus Areas",
    description: "AWS, Oracle Cloud, ServiceNow, and RPA automation"
  }, {
    icon: Award,
    title: "Credentials",
    description: "Multiple industry certifications from AWS, Oracle, and ServiceNow"
  }];
  return <section id="about" className="relative py-20 md:py-28 bg-card overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <img src={aboutBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>
      <div className="section-container relative z-10">
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
            About Me
          </span>
          <h2 className="section-title">Get to Know Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <strong className="text-foreground">Gowtham Balakrishnan</strong>, a Computer Science graduate 
              (B.Sc CS, 2025) from Chikkanna Government Arts College, Tiruppur, and currently pursuing my 
              <strong className="text-foreground"> Master of Computer Applications (MCA)</strong> at Kongu Engineering College (2025–2027).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <strong className="text-foreground">Cloud and ServiceNow enthusiast</strong> with 
              strong hands-on exposure to AWS, Oracle Cloud Infrastructure, ServiceNow platform development, 
              and UiPath RPA. My journey in technology is driven by a deep curiosity and commitment to 
              mastering cloud technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have earned multiple <strong className="text-foreground">ServiceNow Micro-Certifications</strong>, 
              cloud credentials, and automation certifications, demonstrating my commitment to continuous 
              learning and real-world platform skills.
            </p>

            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                Let's connect and build something amazing
                <span className="text-xl">→</span>
              </a>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.1
          }} className="p-6 rounded-xl shadow-card card-hover bg-red-50">
                <div className="w-12 h-12 rounded-lg bg-cloud-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;