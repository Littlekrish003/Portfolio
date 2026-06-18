import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Globe, Zap, Server, Database, HardDrive, Shield, Upload, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AwsArchDiagram, { ArchNode, ArchEdge } from '@/components/AwsArchDiagram';

const architectureSteps = [
  {
    step: 1,
    icon: Globe,
    title: "User",
    description: "User accesses the static website hosted on Amazon S3",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 2,
    icon: HardDrive,
    title: "S3 Static Website",
    description: "S3 serves the React frontend as a static website to the user's browser",
    color: "from-green-500 to-green-600",
  },
  {
    step: 3,
    icon: Upload,
    title: "Image Upload",
    description: "User uploads an image through the web interface, triggering an API call to API Gateway",
    color: "from-purple-500 to-purple-600",
  },
  {
    step: 4,
    icon: Server,
    title: "API Gateway",
    description: "API Gateway receives the upload request and invokes the Lambda function",
    color: "from-orange-500 to-orange-600",
  },
  {
    step: 5,
    icon: Zap,
    title: "Lambda",
    description: "Lambda function processes the image, stores it in S3, and saves metadata to DynamoDB",
    color: "from-amber-500 to-amber-600",
  },
  {
    step: 6,
    icon: HardDrive,
    title: "S3 (Image Storage)",
    description: "Uploaded images are stored securely in a dedicated S3 bucket",
    color: "from-green-600 to-green-700",
  },
  {
    step: 7,
    icon: Database,
    title: "DynamoDB",
    description: "Stores image metadata including filename, upload timestamp, and S3 object key",
    color: "from-blue-600 to-blue-700",
  },
];

const diagramNodes: ArchNode[] = [
  { id: 'user', x: 6, y: 50, label: 'User', icon: Globe, color: 'from-sky-500 to-sky-600' },
  { id: 's3site', x: 24, y: 24, label: 'S3', sublabel: 'Static Site', icon: HardDrive, color: 'from-emerald-500 to-emerald-600' },
  { id: 'apigw', x: 42, y: 60, label: 'API Gateway', icon: Server, color: 'from-orange-500 to-orange-600' },
  { id: 'lambda', x: 60, y: 60, label: 'Lambda', icon: Zap, color: 'from-amber-500 to-amber-600' },
  { id: 's3img', x: 82, y: 28, label: 'S3', sublabel: 'Image Storage', icon: HardDrive, color: 'from-emerald-600 to-emerald-700' },
  { id: 'ddb', x: 82, y: 78, label: 'DynamoDB', sublabel: 'Metadata', icon: Database, color: 'from-blue-600 to-blue-700' },
  { id: 'iam', x: 60, y: 12, label: 'IAM', icon: Shield, color: 'from-rose-500 to-rose-600' },
];

const diagramEdges: ArchEdge[] = [
  { from: 'user', to: 's3site', label: 'GET site', delay: 0 },
  { from: 'user', to: 'apigw', label: 'POST /upload', curve: -0.2, delay: 0.5 },
  { from: 'apigw', to: 'lambda', delay: 0.9 },
  { from: 'lambda', to: 's3img', curve: 0.3, label: 'putObject', delay: 1.3 },
  { from: 'lambda', to: 'ddb', curve: -0.3, label: 'putItem', delay: 1.5 },
];

const diagramGroups = [
  { x: 2, y: 2, w: 96, h: 96, label: 'AWS Cloud', dashed: false },
];

const ServerlessArchitecture = () => {
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
            <a href="http://serverless-image-upload-gowtham.s3-website-us-east-1.amazonaws.com" target="_blank" rel="noopener noreferrer">
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
            Serverless Image Upload Application
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A fully serverless application enabling image uploads through a web interface using AWS Lambda, API Gateway, S3, and DynamoDB
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
              { name: "AWS Lambda", icon: Zap },
              { name: "API Gateway", icon: Server },
              { name: "S3", icon: HardDrive },
              { name: "DynamoDB", icon: Database },
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

export default ServerlessArchitecture;
