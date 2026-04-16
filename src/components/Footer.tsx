import awsCloudIcon from '@/assets/aws-cloud-icon.png';
import awsIcon from '@/assets/aws-icon.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border py-12 bg-rose-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
              <img src={awsCloudIcon} alt="AWS Cloud" className="w-10 h-10 object-cover" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Gowtham<span className="text-primary">.</span>
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">Education</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors">Certifications</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <img src={awsIcon} alt="AWS" className="w-5 h-5 inline-block" /> by Gowtham
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;