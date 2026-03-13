import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const contactInfo = [{
  icon: Mail,
  label: "Email",
  value: "gowthambalakrishnan003@gmail.com",
  href: "mailto:gowthambalakrishnan003@gmail.com"
}, {
  icon: Phone,
  label: "Phone",
  value: "+91 7339698020",
  href: "tel:+917339698020"
}, {
  icon: MapPin,
  label: "Location",
  value: "Tiruppur, Tamil Nadu, India",
  href: null
}];

const socialLinks = [{
  icon: Linkedin,
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/gowtham-b-36aba6266",
  gradient: "from-blue-500 to-blue-700",
  hoverGlow: "shadow-blue-500/50"
}, {
  icon: Github,
  label: "GitHub",
  href: "https://github.com/Littlekrish003",
  gradient: "from-gray-700 to-gray-900",
  hoverGlow: "shadow-gray-500/50"
}];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error('Please fill in all fields.');
      return;
    }
    
    if (trimmedName.length > 100 || trimmedMessage.length > 1000) {
      toast.error('Input exceeds maximum length.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        },
      });
      
      if (error) throw error;
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container bg-orange-100">
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
            Get In Touch
          </span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle mx-auto">
            Ready to discuss opportunities? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => <motion.div key={item.label} initial={{
              opacity: 0,
              x: -20
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.1
            }}>
                  {item.href ? <a href={item.href} className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-hover transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-lg bg-cloud-100 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </a> : <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card">
                      <div className="w-12 h-12 rounded-lg bg-cloud-100 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>}
                </motion.div>)}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map(social => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`group relative w-14 h-14 rounded-2xl bg-gradient-to-br ${social.gradient} shadow-lg hover:shadow-xl hover:${social.hoverGlow} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-opacity -z-10`} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-card">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} required className="bg-background" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="bg-background" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project or opportunity..." rows={5} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} required className="bg-background resize-none" />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-primary hover:opacity-90 transition-opacity gap-2">
                  {isSubmitting ? <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </> : <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
