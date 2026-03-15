import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Cloud, Globe, Server, Shield, Database, Scaling, BarChart3, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const architectureSteps = [
  {
    step: 1,
    icon: Globe,
    title: "User",
    description: "User accesses the website via a custom domain managed by Route53",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 2,
    icon: Globe,
    title: "Route53",
    description: "DNS service routes the user request to the Application Load Balancer with HTTPS via ACM",
    color: "from-purple-500 to-purple-600",
  },
  {
    step: 3,
    icon: Server,
    title: "Application Load Balancer",
    description: "Distributes incoming traffic across multiple EC2 instances in different availability zones",
    color: "from-orange-500 to-orange-600",
  },
  {
    step: 4,
    icon: Scaling,
    title: "Auto Scaling Group (EC2)",
    description: "Automatically scales EC2 instances up or down based on traffic demand to ensure high availability",
    color: "from-amber-500 to-amber-600",
  },
  {
    step: 5,
    icon: Database,
    title: "Amazon RDS",
    description: "Managed relational database service for persistent data storage with Multi-AZ deployment",
    color: "from-blue-600 to-blue-700",
  },
  {
    step: 6,
    icon: BarChart3,
    title: "CloudWatch",
    description: "Monitors application performance, logs, and triggers alarms for auto scaling policies",
    color: "from-green-500 to-green-600",
  },
];

const FunFactsArchitecture = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="section-container py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/#cloud-projects')} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <Button asChild variant="default" className="bg-gradient-to-r from-primary to-primary/80 gap-2">
            <a href="https://3tier.myserver.sbs/" target="_blank" rel="noopener noreferrer">
              View Live Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Architecture Diagram
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Production-Ready 3-Tier Web Application
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A highly available and scalable 3-tier architecture on AWS with load balancing, auto scaling, and secure HTTPS communication
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 hidden md:block" />
            <div className="space-y-6">
              {architectureSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-lg`}>
                      <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white mb-1" />
                      <span className="text-[10px] md:text-xs font-bold text-white/80">Step {step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < architectureSteps.length - 1 && (
                    <div className="absolute left-8 md:left-12 -bottom-3 transform -translate-x-1/2 z-20 hidden md:block">
                      <ArrowRight className="w-4 h-4 text-primary/50 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Services Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "EC2", icon: Server },
              { name: "Auto Scaling", icon: Scaling },
              { name: "ALB", icon: Server },
              { name: "RDS", icon: Database },
              { name: "Route53", icon: Globe },
              { name: "ACM (SSL)", icon: Lock },
              { name: "CloudWatch", icon: BarChart3 },
              { name: "IAM", icon: Shield },
            ].map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl shadow-sm"
              >
                <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{service.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FunFactsArchitecture;
