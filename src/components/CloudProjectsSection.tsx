import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Zap, Shield, Activity, Globe, Server, Database, Upload, Image, Code, ArrowRight, Layers, Eye, MonitorCog, HardDrive, Network, Scaling, BarChart3, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const skillBadges = [
  { name: "AWS", icon: Cloud },
  { name: "EC2", icon: Server },
  { name: "S3", icon: HardDrive },
  { name: "Lambda", icon: Zap },
  { name: "API Gateway", icon: Network },
  { name: "DynamoDB", icon: Database },
  { name: "Auto Scaling", icon: Scaling },
  { name: "Application Load Balancer", icon: Layers },
  { name: "Route53", icon: Globe },
  { name: "CloudWatch", icon: BarChart3 },
];

const cloudProjects = [
  {
    title: "Production-Ready 3-Tier Web Application on AWS",
    subtitle: "3-Tier Architecture",
    date: "February 2026",
    icon: Cloud,
    iconGradient: "from-[hsl(201,96%,32%)] to-[hsl(201,100%,24%)]",
    description: "Designed and deployed a highly available and scalable 3-tier web architecture on AWS. Implemented load balancing, auto scaling, secure HTTPS communication, and DNS routing to simulate a real-world production environment.",
    liveUrl: "https://3tier.myserver.sbs/",
    architectureUrl: "/threetier-architecture",
    technologies: ["EC2", "Auto Scaling", "Application Load Balancer", "RDS", "Route53", "ACM", "CloudWatch", "CI/CD"],
    features: [
      { icon: Shield, text: "Highly available architecture" },
      { icon: Activity, text: "Auto Scaling for traffic handling" },
      { icon: Shield, text: "Secure HTTPS using ACM" },
      { icon: Globe, text: "DNS routing using Route53" },
      { icon: Activity, text: "Monitoring using CloudWatch" },
    ],
    architecture: ["User", "Route53", "ALB", "Auto Scaling EC2", "Amazon RDS"],
  },
  {
    title: "Serverless Image Upload Application",
    subtitle: "Serverless Architecture",
    date: "March 2026",
    icon: Zap,
    iconGradient: "from-[hsl(38,92%,50%)] to-[hsl(38,92%,40%)]",
    description: "Built a serverless application enabling users to upload images through a web interface. The application uses AWS Lambda and API Gateway for backend processing, stores images in Amazon S3, and manages metadata using DynamoDB.",
    liveUrl: "http://serverless-image-upload-gowtham.s3-website-us-east-1.amazonaws.com",
    architectureUrl: "/serverless-architecture",
    technologies: ["S3", "Lambda", "API Gateway", "DynamoDB"],
    features: [
      { icon: Server, text: "Serverless architecture" },
      { icon: Upload, text: "Image upload through web interface" },
      { icon: Image, text: "Image storage in S3" },
      { icon: Database, text: "Metadata storage in DynamoDB" },
      { icon: Code, text: "API integration using API Gateway" },
    ],
    architecture: ["User", "S3 Static Website", "API Gateway", "Lambda", "S3 + DynamoDB"],
  },
  {
    title: "AWS Cloud Fun Facts Generator",
    subtitle: "Serverless + GenAI Architecture",
    date: "March 2026",
    icon: Zap,
    iconGradient: "from-[hsl(150,60%,40%)] to-[hsl(150,70%,30%)]",
    description: "Deployed an AWS Lambda function to serve random cloud fun facts with Amazon Bedrock (Claude AI) integration for witty AI-enhanced responses. A solid foundation for modern serverless applications combining databases, APIs, and Generative AI.",
    liveUrl: "https://funfacts.myserver.sbs",
    architectureUrl: "/funfacts-architecture",
    technologies: ["Lambda", "API Gateway", "DynamoDB", "Bedrock", "Amplify", "IAM", "Route53"],
    features: [
      { icon: Zap, text: "Serverless backend with Lambda" },
      { icon: Server, text: "REST API via API Gateway" },
      { icon: Database, text: "Facts stored in DynamoDB" },
      { icon: Eye, text: "GenAI enhancement via Bedrock (Claude AI)" },
      { icon: Globe, text: "React frontend hosted on Amplify" },
      { icon: Shield, text: "Secure IAM roles & permissions" },
    ],
    architecture: ["User", "Amplify", "API Gateway", "Lambda", "DynamoDB", "Bedrock"],
  },
];

const CloudProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cloud-projects" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container">
        {/* Cloud Architecture Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Core Competencies
          </span>
          <h2 className="section-title">Cloud Architecture Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-20"
        >
          {skillBadges.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <skill.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Cloud Architecture
          </span>
          <h2 className="section-title">Cloud Projects</h2>
          <p className="section-subtitle mx-auto">
            Hands-on AWS cloud projects demonstrating real-world architecture and deployment skills
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cloudProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient accent top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.iconGradient}`} />

              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start gap-4 mb-2">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${project.iconGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground leading-tight mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="px-6 pb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <feature.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture flow */}
              <div className="mx-6 mb-4 p-4 rounded-xl bg-secondary/50 border border-border">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Architecture Flow</h4>
                <div className="flex items-center flex-wrap gap-1.5">
                  {project.architecture.map((step, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 bg-card rounded-lg text-xs font-medium text-foreground shadow-sm border border-border/50">
                        {step}
                      </span>
                      {i < project.architecture.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 flex gap-3">
                {project.architectureUrl ? (
                  <Button
                    variant="outline"
                    className="flex-1 gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                    asChild
                  >
                    <Link to={project.architectureUrl}>
                      <Eye className="w-4 h-4" />
                      View Architecture
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="flex-1 gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                    asChild={!!project.liveUrl}
                  >
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4" />
                        View Architecture
                      </a>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        View Architecture
                      </>
                    )}
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    variant="default"
                    className="flex-1 gap-2 bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudProjectsSection;
