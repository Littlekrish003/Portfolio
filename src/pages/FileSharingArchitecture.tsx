import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Globe, Shield, Server, Network, Database, HardDrive, Lock, Upload, Cpu, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AwsArchDiagram, { ArchNode, ArchEdge } from '@/components/AwsArchDiagram';

const architectureSteps = [
  { step: 1, icon: Globe, title: 'Users', description: 'Users access the platform at https://fileshare.myserver.sbs from any browser', color: 'from-sky-500 to-sky-600' },
  { step: 2, icon: Network, title: 'Amazon Route 53', description: 'Custom domain DNS resolution routes traffic to the EC2 instance', color: 'from-purple-500 to-purple-600' },
  { step: 3, icon: Lock, title: "Let's Encrypt SSL", description: 'HTTPS termination with a free, auto-renewing TLS certificate', color: 'from-emerald-500 to-emerald-600' },
  { step: 4, icon: Shield, title: 'Nginx (443)', description: 'Nginx listens on port 443 and acts as a secure reverse proxy', color: 'from-teal-500 to-teal-600' },
  { step: 5, icon: Cpu, title: 'Node.js + Express (PM2)', description: 'Application server managed by PM2 for zero-downtime process management on AWS EC2', color: 'from-orange-400 to-orange-500' },
  { step: 6, icon: Database, title: 'MySQL Metadata', description: 'File metadata such as name, size, type and upload time is stored in MySQL', color: 'from-indigo-500 to-indigo-600' },
  { step: 7, icon: HardDrive, title: 'Amazon S3 File Storage', description: 'Files are uploaded, downloaded and deleted directly from an S3 bucket', color: 'from-rose-500 to-rose-600' },
];

const diagramNodes: ArchNode[] = [
  { id: 'user', x: 7, y: 50, label: 'Users', sublabel: 'Browser', icon: Globe, color: 'from-sky-500 to-sky-600' },
  { id: 'r53', x: 25, y: 50, label: 'Route 53', sublabel: 'fileshare.myserver.sbs', icon: Network, color: 'from-purple-500 to-purple-600' },
  { id: 'ssl', x: 43, y: 50, label: "Let's Encrypt", sublabel: 'HTTPS / SSL', icon: Lock, color: 'from-emerald-500 to-emerald-600' },
  { id: 'nginx', x: 60, y: 50, label: 'Nginx', sublabel: 'Reverse Proxy · 443', icon: Shield, color: 'from-teal-500 to-teal-600' },
  { id: 'node', x: 77, y: 50, label: 'Node.js', sublabel: 'Express · PM2', icon: Server, color: 'from-orange-400 to-orange-500' },
  { id: 'mysql', x: 93, y: 25, label: 'MySQL', sublabel: 'Metadata', icon: Database, color: 'from-indigo-500 to-indigo-600' },
  { id: 's3', x: 93, y: 76, label: 'Amazon S3', sublabel: 'File Storage', icon: HardDrive, color: 'from-rose-500 to-rose-600' },
];

const diagramEdges: ArchEdge[] = [
  { from: 'user', to: 'r53', label: 'HTTPS', delay: 0 },
  { from: 'r53', to: 'ssl', label: 'DNS', delay: 0.3 },
  { from: 'ssl', to: 'nginx', delay: 0.6 },
  { from: 'nginx', to: 'node', label: 'proxy', delay: 0.9 },
  { from: 'node', to: 'mysql', curve: 0.25, label: 'query', delay: 1.2 },
  { from: 'node', to: 's3', curve: -0.25, label: 'objects', delay: 1.4 },
];

const diagramGroups = [
  { x: 52, y: 6, w: 34, h: 88, label: 'AWS EC2 Instance', dashed: false },
];

const FileSharingArchitecture = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="section-container py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('cloud-projects')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <Button asChild variant="default" className="bg-gradient-to-r from-primary to-primary/80 gap-2">
            <a href="https://fileshare.myserver.sbs" target="_blank" rel="noopener noreferrer">
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
            Cloud File Sharing Platform
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Secure full-stack file management on AWS — Node.js &amp; Express behind Nginx on EC2, with S3 object storage,
            MySQL metadata, Route 53 DNS and Let's Encrypt HTTPS
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <AwsArchDiagram
            nodes={diagramNodes}
            edges={diagramEdges}
            groups={diagramGroups}
            title="Live Data Flow"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 hidden md:block flow-line">
              <span className="flow-pulse" style={{ ['--flow-duration' as any]: '5s' }} />
              <span className="flow-pulse" style={{ ['--flow-duration' as any]: '5s', animationDelay: '2.5s' }} />
            </div>

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
                    <div
                      className={`flow-icon w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-lg`}
                      style={{ ['--flow-delay' as any]: `${index * 0.35}s` }}
                    >
                      <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white mb-1" />
                      <span className="text-[10px] md:text-xs font-bold text-white/80">Step {step.step}</span>
                    </div>
                  </div>

                  <div className="flex-1 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
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
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Node.js & Express', icon: Cpu },
              { name: 'MySQL', icon: Database },
              { name: 'Amazon S3', icon: HardDrive },
              { name: 'AWS EC2', icon: Server },
              { name: 'Nginx', icon: Shield },
              { name: 'PM2', icon: Gauge },
              { name: 'Route 53', icon: Network },
              { name: "Let's Encrypt SSL", icon: Lock },
              { name: 'Bootstrap UI', icon: Globe },
              { name: 'Secure Uploads', icon: Upload },
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

export default FileSharingArchitecture;