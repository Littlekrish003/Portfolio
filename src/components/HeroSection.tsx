import { motion } from 'framer-motion';
import { Eye, Award, Mail, Cloud, Server, Cog, Sparkles, Zap, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
const FloatingIcon = ({
  icon: Icon,
  className,
  delay = 0,
  duration = 4,
  color = "text-primary"
}: {
  icon: React.ElementType;
  className: string;
  delay?: number;
  duration?: number;
  color?: string;
}) => <motion.div initial={{
  opacity: 0,
  scale: 0
}} animate={{
  opacity: 1,
  scale: 1
}} transition={{
  delay: delay + 0.5,
  duration: 0.5,
  type: "spring"
}} className={`absolute hidden lg:block ${className}`}>
    <motion.div animate={{
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0]
  }} transition={{
    duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay
  }} className="glass rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
      <Icon className={`w-6 h-6 ${color} group-hover:scale-110 transition-transform`} />
    </motion.div>
  </motion.div>;
const HeroSection = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cloud-50 via-background to-gold-400/5">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-cloud-300/40 to-cloud-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-[5%] w-[600px] h-[600px] bg-gradient-to-br from-cloud-200/30 to-gold-400/10 rounded-full blur-3xl animate-blob" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cloud-100/20 to-transparent rounded-full blur-3xl animate-pulse-soft" />
        
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,118,182,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,118,182,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cloud-400/40 rounded-full animate-float" style={{
        animationDelay: '0s'
      }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gold-400/30 rounded-full animate-float" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cloud-300/50 rounded-full animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float" style={{
        animationDelay: '3s'
      }} />
      </div>

      {/* Floating icons */}
      <FloatingIcon icon={Cloud} className="top-28 right-24" delay={0} color="text-cloud-500" />
      <FloatingIcon icon={Server} className="bottom-32 right-48" delay={0.3} duration={5} color="text-gold-500" />
      <FloatingIcon icon={Cog} className="top-40 left-24" delay={0.6} duration={4.5} color="text-cloud-400" />
      <FloatingIcon icon={Database} className="bottom-48 left-32" delay={0.9} duration={5.5} color="text-cloud-600" />
      <FloatingIcon icon={Zap} className="top-1/2 right-20" delay={1.2} duration={4} color="text-gold-500" />

      <div className="section-container relative z-10 pt-24 pb-16">
        <motion.div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20" variants={containerVariants} initial="hidden" animate="visible">
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative group">
            {/* Rotating ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-cloud-300/50 animate-spin-slow" />
            
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-cloud-400/30 via-transparent to-gold-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Main image container */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-card ring-offset-4 ring-offset-transparent">
                <motion.img alt="Gowtham Balakrishnan" className="w-full h-full object-cover" whileHover={{
                scale: 1.05
              }} transition={{
                duration: 0.4
              }} src="https://i.postimg.cc/0rgGRwMf/Gow-photo.jpg" />
              </div>
              
              {/* Gradient border overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cloud-400/20 via-transparent to-gold-400/20 pointer-events-none" />
            </div>
            
            {/* Status badge */}
            <motion.div initial={{
            opacity: 0,
            x: 20,
            y: 20
          }} animate={{
            opacity: 1,
            x: 0,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.5
          }} className="absolute -right-4 bottom-8 glass px-5 py-3 rounded-full shadow-lg flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm font-semibold text-foreground">Open to Work</span>
            </motion.div>

            {/* Decorative badge */}
            <motion.div initial={{
            opacity: 0,
            x: -20,
            y: -20
          }} animate={{
            opacity: 1,
            x: 0,
            y: 0
          }} transition={{
            delay: 1,
            duration: 0.5
          }} className="absolute -left-6 top-8 glass px-4 py-2 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-xs font-semibold text-foreground">12+ Certified</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 glass text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <Cloud className="w-4 h-4" />
                Cloud & ServiceNow Professional
                <span className="w-2 h-2 bg-cloud-400 rounded-full animate-pulse" />
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight">
              Hi, I'm
            </motion.h1>
            <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gradient-animated">
              Gowtham Balakrishnan
            </motion.h1>

            {/* Title */}
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-3 font-medium">
              AWS Cloud Practitioner | Serverless & Cloud Architecture Projects | Aspiring Cloud Engineer
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AWS & Oracle certified professional passionate about building 
              <span className="text-primary font-medium"> scalable</span>, 
              <span className="text-primary font-medium"> secure</span>, and 
              <span className="text-primary font-medium"> automated</span> cloud solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-cloud-500 to-cloud-600 hover:from-cloud-600 hover:to-cloud-700 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 gap-2 w-full sm:w-auto px-8"
                asChild
              >
                <a href="http://resume.myserver.sbs/" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  View Resume
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="glass border-cloud-200 hover:border-cloud-300 hover:bg-cloud-50/50 gap-2 w-full sm:w-auto px-8 transition-all duration-300" asChild>
                <a href="#certifications" className="bg-cloud-200">
                  <Award className="w-5 h-5" />
                  View Certifications
                </a>
              </Button>
              
              <Button size="lg" variant="ghost" className="hover:bg-cloud-50 gap-2 w-full sm:w-auto transition-all duration-300" asChild>
                <a href="#contact" className="bg-secondary">
                  <Mail className="w-5 h-5" />
                  Let's Talk
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
              {[{
              value: "12+",
              label: "Certifications",
              color: "from-cloud-500 to-cloud-600"
            }, {
              value: "5+",
              label: "Platforms",
              color: "from-gold-500 to-gold-600"
            }, {
              value: "MCA",
              label: "Pursuing",
              color: "from-cloud-400 to-cloud-500"
            }].map((stat, index) => <motion.div key={stat.label} className="glass rounded-2xl p-5 text-center lg:text-left shadow-sm hover:shadow-md transition-shadow group cursor-default" whileHover={{
              y: -4
            }} transition={{
              duration: 0.2
            }}>
                  <div className={`font-display text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>)}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll Down</span>
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5 group-hover:border-primary transition-colors">
            <motion.div animate={{
            y: [0, 12, 0],
            opacity: [1, 0.5, 1]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="w-1.5 h-1.5 rounded-full bg-current" />
          </motion.div>
        </a>
      </motion.div>
    </section>;
};
export default HeroSection;