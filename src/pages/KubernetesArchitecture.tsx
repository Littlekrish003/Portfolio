import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Boxes, Server, Network, Heart, Shield, RefreshCw, GitBranch, Scaling, Globe, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AwsArchDiagram, { ArchNode, ArchEdge } from '@/components/AwsArchDiagram';

const architectureSteps = [
  { step: 1, icon: Globe, title: 'User', description: 'User accesses the containerized web application from a browser', color: 'from-blue-500 to-blue-600' },
  { step: 2, icon: Server, title: 'AWS EC2', description: 'A Linux EC2 instance hosts the Docker and Minikube runtime', color: 'from-orange-400 to-orange-500' },
  { step: 3, icon: Boxes, title: 'Minikube', description: 'Minikube runs a single-node Kubernetes cluster inside EC2', color: 'from-indigo-500 to-indigo-600' },
  { step: 4, icon: Network, title: 'NodePort Service', description: 'A NodePort Service exposes the application to external traffic', color: 'from-purple-500 to-purple-600' },
  { step: 5, icon: Layers, title: 'Application Pods', description: 'Multiple pod replicas serve the app with health probes and self-healing', color: 'from-emerald-500 to-emerald-600' },
  { step: 6, icon: Boxes, title: 'Nginx Web Application', description: 'Nginx containers serve the web application content to the user', color: 'from-teal-500 to-teal-600' },
];

const diagramNodes: ArchNode[] = [
  { id: 'user', x: 6, y: 50, label: 'User', icon: Globe, color: 'from-sky-500 to-sky-600' },
  { id: 'ec2', x: 24, y: 50, label: 'AWS EC2', sublabel: 'Linux', icon: Server, color: 'from-orange-400 to-orange-500' },
  { id: 'minikube', x: 44, y: 50, label: 'Minikube', sublabel: 'K8s Cluster', icon: Boxes, color: 'from-indigo-500 to-indigo-600' },
  { id: 'svc', x: 62, y: 50, label: 'NodePort', sublabel: 'Service', icon: Network, color: 'from-purple-500 to-purple-600' },
  { id: 'pods', x: 82, y: 28, label: 'Pods', sublabel: 'Replicas', icon: Layers, color: 'from-emerald-500 to-emerald-600' },
  { id: 'nginx', x: 82, y: 72, label: 'Nginx', sublabel: 'Web App', icon: Boxes, color: 'from-teal-500 to-teal-600' },
];

const diagramEdges: ArchEdge[] = [
  { from: 'user', to: 'ec2', label: 'HTTP', delay: 0 },
  { from: 'ec2', to: 'minikube', delay: 0.4 },
  { from: 'minikube', to: 'svc', delay: 0.8 },
  { from: 'svc', to: 'pods', curve: 0.3, label: 'route', delay: 1.2 },
  { from: 'svc', to: 'nginx', curve: -0.3, label: 'route', delay: 1.4 },
];

const diagramGroups = [
  { x: 2, y: 2, w: 96, h: 96, label: 'AWS EC2 · Minikube Cluster', dashed: false },
];

const KubernetesArchitecture = () => {
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
            <a href="https://github.com/Littlekrish003/kubernetes-deployment-platform" target="_blank" rel="noopener noreferrer">
              View Project
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
            Kubernetes-Based Application Deployment Platform
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Containerized web application deployed on AWS EC2 with Docker, Minikube and Kubernetes orchestration
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
            Key Capabilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Docker Containers', icon: Boxes },
              { name: 'Pod Replicas', icon: Layers },
              { name: 'NodePort Service', icon: Network },
              { name: 'Health Probes', icon: Heart },
              { name: 'Self-Healing', icon: Shield },
              { name: 'Rolling Updates', icon: RefreshCw },
              { name: 'Rollback', icon: GitBranch },
              { name: 'Autoscaling (HPA)', icon: Scaling },
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

export default KubernetesArchitecture;