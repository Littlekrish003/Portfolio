import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import kecLogo from '@/assets/kec-logo.jpg';
import kecCollege from '@/assets/kec-college.jpg';
import chikkannaLogo from '@/assets/chikkanna-college-logo.png';
import tnSchoolLogo from '@/assets/tn-school-education-logo.png';

const education = [{
  degree: "Master of Computer Applications (MCA)",
  institution: "Kongu Engineering College",
  location: "Perundurai, Tamil Nadu",
  period: "2025 – 2027",
  status: "Ongoing",
  description: "Currently pursuing advanced studies in computer applications with focus on cloud computing, software engineering, and modern development practices.",
  logo: kecCollege,
  secondaryLogo: kecLogo,
  tagline: "\"Assuring the Best\" - Transform Yourself"
}, {
  degree: "Bachelor of Science in Computer Science",
  institution: "Chikkanna Government Arts College",
  location: "Tiruppur, Tamil Nadu",
  period: "2022 – 2025",
  status: "Completed",
  description: "Graduated with strong foundation in computer science fundamentals, programming, databases, and software development methodologies.",
  logo: chikkannaLogo,
  secondaryLogo: null,
  tagline: null
}, {
  degree: "12th Grade (Higher Secondary)",
  institution: "V K Government Higher Secondary School",
  location: "Tiruppur, Tamil Nadu",
  period: "2020 – 2022",
  status: "Completed",
  description: "Completed higher secondary education building a strong academic foundation.",
  logo: tnSchoolLogo,
  secondaryLogo: null,
  tagline: null
}, {
  degree: "10th Grade (Secondary)",
  institution: "Government High School",
  location: "Tiruppur, Tamil Nadu",
  period: "2019 – 2020",
  status: "Completed",
  description: "Completed secondary education with a solid grounding in core subjects.",
  logo: tnSchoolLogo,
  secondaryLogo: null,
  tagline: null
}];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="education" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Academic Background
          </span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mx-auto">
            My academic journey that shaped my technical foundation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cloud-300 to-cloud-100" />

          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative pl-16 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-xl shadow-card card-hover bg-gradient-to-br from-card to-secondary/30 border border-border/50">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    item.status === 'Ongoing' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-cloud-100 text-cloud-600 dark:bg-cloud-900/30 dark:text-cloud-400'
                  }`}>
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  {/* Institution Logo */}
                  <div className="w-16 h-16 rounded-xl bg-white border border-border/50 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                    {item.logo ? (
                      <img 
                        src={item.logo} 
                        alt={`${item.institution} logo`}
                        className="w-14 h-14 object-contain"
                      />
                    ) : (
                      <GraduationCap className="w-8 h-8 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {item.degree}
                    </h3>
                    <p className="font-semibold text-primary">{item.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Additional branding */}
                {item.secondaryLogo && item.tagline && (
                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
                    <img 
                      src={item.secondaryLogo} 
                      alt={`${item.institution} Logo`}
                      className="h-8 object-contain"
                    />
                    <span className="text-xs text-muted-foreground italic">
                      {item.tagline}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
