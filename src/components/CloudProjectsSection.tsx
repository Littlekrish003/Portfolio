import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Zap, Shield, Activity, Globe, Server, Database, Upload, Image, Code, ArrowRight, Layers, Eye, MonitorCog, HardDrive, Network, Scaling, BarChart3, ExternalLink, Boxes, RefreshCw, Heart, GitBranch, Lock, Brain, Container, Terminal, Github, Gauge, Workflow, FolderUp, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const skillBadges = [
  { name: "AWS", icon: Cloud },
  { name: "EC2", icon: Server },
  { name: "S3", icon: HardDrive },
  { name: "Lambda", icon: Zap },
  { name: "API Gateway", icon: Network },
  { name: "DynamoDB", icon: Database },
  { name: "RDS", icon: Database },
  { name: "Auto Scaling", icon: Scaling },
  { name: "Application Load Balancer", icon: Layers },
  { name: "Route53", icon: Globe },
  { name: "CloudWatch", icon: BarChart3 },
  { name: "ACM", icon: Shield },
  { name: "IAM", icon: Lock },
  { name: "Amplify", icon: Cloud },
  { name: "Bedrock", icon: Brain },
  { name: "CI/CD", icon: Workflow },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Boxes },
  { name: "Minikube", icon: Boxes },
  { name: "Nginx", icon: Server },
  { name: "Linux", icon: Terminal },
  { name: "GitHub", icon: Github },
  { name: "Metrics Server", icon: Gauge },
  { name: "Node.js", icon: Code },
  { name: "Express.js", icon: Code },
  { name: "MySQL", icon: Database },
  { name: "PM2", icon: Gauge },
  { name: "Bootstrap", icon: Layers },
  { name: "Let's Encrypt SSL", icon: Lock },
];

const cloudProjects = [
  {
    title: "AI-Powered Athlete Performance Plate",
    subtitle: "AI Project • HTML • CSS",
    date: "December 2025",
    icon: Brain,
    iconGradient: "from-[hsl(150,65%,38%)] to-[hsl(160,70%,26%)]",
    description: "My first AI project — a Smart Nutrition Analyst that translates everyday Indian meals into athlete-specific macros and actionable suggestions. Users build a meal, set their athlete profile, and instantly get calorie/macro targets, smart food recommendations, a 7-day workout plan, an automatic food photo analyzer, and day-wise tracking.",
    liveUrl: "https://athlete.myserver.sbs/",
    architectureUrl: "/athlete-plate-architecture",
    technologies: ["HTML", "CSS", "JavaScript", "AI Vision API"],
    features: [
      { icon: Zap, text: "Meal Builder with common Indian foods" },
      { icon: BarChart3, text: "Live calorie, protein, carb & fat breakdown" },
      { icon: Activity, text: "Athlete profile targets by discipline, weight & goal" },
      { icon: Brain, text: "Smart suggestions for protein, carb & fat boosts" },
      { icon: Heart, text: "7-day workout plan with progress tracking" },
      { icon: Image, text: "Automatic food photo analyzer" },
      { icon: Database, text: "Daily tracking — save, load & merge days" },
      { icon: Layers, text: "Responsive, clean UI with exportable summary" },
    ],
    architecture: ["User", "Meal Builder", "Macro Engine", "AI Photo Analyzer", "Daily Tracking"],
  },
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
    liveUrl: "https://cloudfunfacts.myserver.sbs",
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
  {
    title: "Kubernetes-Based Application Deployment Platform",
    subtitle: "Containerization + Kubernetes",
    date: "July 2026",
    icon: Boxes,
    iconGradient: "from-[hsl(219,77%,52%)] to-[hsl(219,77%,42%)]",
    description: "Designed and deployed a containerized web application on an AWS EC2 instance using Docker, Minikube and Kubernetes. Implemented Kubernetes Deployments and Services with multiple pod replicas, health probes, self-healing, rolling updates, rollback capabilities and Horizontal Pod Autoscaling to demonstrate cloud-native application deployment and orchestration.",
    liveUrl: "https://github.com/Littlekrish003/kubernetes-deployment-platform",
    architectureUrl: "/kubernetes-architecture",
    technologies: ["AWS EC2", "Docker", "Kubernetes", "Minikube", "Nginx", "Linux", "GitHub", "Metrics Server"],
    features: [
      { icon: Boxes, text: "Containerized web application using Docker" },
      { icon: Layers, text: "Kubernetes deployment with multiple pod replicas" },
      { icon: Network, text: "Application exposure using a NodePort Service" },
      { icon: Heart, text: "Liveness and readiness health probes" },
      { icon: Shield, text: "Automatic pod recovery and self-healing" },
      { icon: RefreshCw, text: "Zero-downtime rolling application updates" },
      { icon: GitBranch, text: "Deployment rollback to a previous version" },
      { icon: Scaling, text: "Horizontal Pod Autoscaling" },
    ],
    architecture: ["User", "AWS EC2", "Minikube", "NodePort Service", "Application Pods", "Nginx Web App"],
  },
  {
    title: "Cloud File Sharing Platform",
    subtitle: "Full Stack • AWS Cloud • DevOps",
    date: "August 2026",
    icon: FolderUp,
    iconGradient: "from-[hsl(199,89%,48%)] to-[hsl(217,91%,45%)]",
    description: "Designed and deployed a secure cloud-based file management platform on AWS. Built with Node.js, Express, MySQL, Amazon S3, Nginx, PM2, Route 53, and HTTPS. Users can upload, download, and manage files through a custom domain secured with SSL.",
    liveUrl: "https://fileshare.myserver.sbs",
    architectureUrl: "/filesharing-architecture",
    technologies: ["Node.js", "Express.js", "MySQL", "Amazon S3", "AWS EC2", "Nginx", "PM2", "Route 53", "Let's Encrypt SSL", "Bootstrap"],
    features: [
      { icon: Upload, text: "Secure file upload to Amazon S3" },
      { icon: Trash2, text: "Download and delete files" },
      { icon: Database, text: "MySQL metadata management" },
      { icon: Globe, text: "Custom domain with Route 53" },
      { icon: Lock, text: "HTTPS using Let's Encrypt" },
      { icon: Shield, text: "Nginx reverse proxy" },
      { icon: Gauge, text: "PM2 process manager" },
      { icon: Layers, text: "Responsive Bootstrap UI" },
      { icon: Server, text: "AWS EC2 deployment" },
      { icon: Activity, text: "Production-ready architecture" },
    ],
    architecture: ["Users", "Route 53", "Let's Encrypt SSL", "Nginx", "Node.js (PM2)", "MySQL + Amazon S3"],
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
