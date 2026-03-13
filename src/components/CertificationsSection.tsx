import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar, BadgeCheck, FileText } from 'lucide-react';
import awsBadge from '@/assets/aws-badge.png';
import oracleCert from '@/assets/oracle-cert.jpg';
import servicenowLogo from '@/assets/servicenow-logo.jpeg';
import uipathBadge from '@/assets/uipath-badge.png';
import ibmBadge from '@/assets/ibm-badge.png';
import cambridgeBadge from '@/assets/cambridge-badge.png';

// Featured certifications with badges
const featuredCerts = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    validity: "2025–2028",
    badge: awsBadge,
    verifyUrl: "https://aws.amazon.com/verification",
    validationNumber: "bd466f69b40646d28546a031286beb46"
  },
  {
    name: "OCI Certified Foundations Associate",
    issuer: "Oracle University",
    validity: "2025–2027",
    badge: oracleCert,
    verifyUrl: "https://catalog-education.oracle.com",
    validationNumber: "309793847OCI25FNDCFA"
  },
  {
    name: "UiPath RPA Foundation",
    issuer: "UiPath Academy",
    validity: "Naan Mudhalvan Program",
    badge: uipathBadge,
    verifyUrl: "#",
    validationNumber: "NM-RPA-2024"
  },
  {
    name: "Getting Started with AI",
    issuer: "IBM SkillsBuild",
    validity: "Feb 2025",
    badge: ibmBadge,
    verifyUrl: "https://www.credly.com/badges/162ac569-e26e-4ce7-8357-c9f081b046bc",
    validationNumber: "162ac569-e26e-4ce7-8357-c9f081b046bc"
  },
  {
    name: "Cambridge English B1",
    issuer: "Cambridge Assessment",
    validity: "Reading, Writing, Listening",
    badge: cambridgeBadge,
    verifyUrl: "/certificates/cambridge-english.pdf",
    validationNumber: "ENG_255737"
  }
];

// ServiceNow Micro-Certifications
const servicenowMicroCerts = [
  { name: "Welcome to ServiceNow", issued: "Dec 21, 2024" },
  { name: "Flow Designer", issued: "Jan 20, 2025" },
  { name: "Automated Test Framework", issued: "Jan 19, 2025" },
  { name: "Predictive Intelligence", issued: "Jan 25, 2025" },
  { name: "Now Assist Executive", issued: "Jan 25, 2025" },
  { name: "Service Portal", issued: "Mar 5, 2025" }
];

const certifications = [{
  category: "Amazon Web Services",
  color: "bg-gradient-to-br from-orange-400 to-amber-600",
  certs: [{
    name: "AWS Certified Cloud Practitioner",
    validity: "2025–2028",
    highlight: true
  }, {
    name: "AWS Academy Graduate – Cloud Foundations",
    validity: "2025"
  }]
}, {
  category: "Oracle",
  color: "bg-gradient-to-br from-red-500 to-red-700",
  certs: [{
    name: "OCI Certified Foundations Associate",
    validity: "2025–2027",
    highlight: true
  }, {
    name: "Oracle Cloud Infrastructure Architecture",
    validity: "2024"
  }]
}, {
  category: "ServiceNow",
  color: "bg-gradient-to-br from-green-500 to-emerald-700",
  certs: [{
    name: "Welcome to ServiceNow",
    validity: "2024"
  }, {
    name: "Flow Designer",
    validity: "2024"
  }, {
    name: "Service Portal",
    validity: "2024"
  }, {
    name: "Introduction to App Engine Studio",
    validity: "2024"
  }, {
    name: "Now Assist Executive",
    validity: "2024"
  }, {
    name: "Now Assist for ITSM Implementation",
    validity: "2024"
  }, {
    name: "Service Bridge Delivery Accreditation",
    validity: "2024"
  }]
}, {
  category: "IBM",
  color: "bg-gradient-to-br from-blue-500 to-blue-700",
  certs: [{
    name: "Getting Started with Artificial Intelligence",
    validity: "2024"
  }]
}, {
  category: "UiPath",
  color: "bg-gradient-to-br from-orange-500 to-orange-700",
  certs: [{
    name: "Robotic Process Automation Foundation",
    validity: "Naan Mudhalvan Program"
  }]
}, {
  category: "Cambridge English",
  color: "bg-gradient-to-br from-purple-500 to-purple-700",
  certs: [{
    name: "English Proficiency Level B1",
    validity: "Reading, Writing, Listening"
  }]
}];
const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="certifications" className="py-20 md:py-28 bg-card" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Verified Credentials
          </span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mx-auto">
            Industry-recognized certifications demonstrating expertise and commitment
          </p>
        </motion.div>

        {/* Featured Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-center text-lg font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
            <BadgeCheck className="w-5 h-5 text-primary" />
            Featured Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredCerts.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative bg-gradient-to-br from-card to-secondary/30 border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative flex items-center gap-5">
                  {/* Badge Image or PDF Icon */}
                  <div className="flex-shrink-0">
                    {cert.badge ? (
                      <img
                        src={cert.badge}
                        alt={`${cert.name} badge`}
                        className="w-24 h-24 object-contain drop-shadow-lg group-hover:scale-105 transition-transform rounded-lg"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                        <FileText className="w-10 h-10 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        Verified
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.validity}
                      </span>
                      <span className="flex items-center gap-1 text-primary">
                        <ExternalLink className="w-3 h-3" />
                        {cert.verifyUrl.endsWith('.pdf') ? 'View PDF' : 'Verify'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Validation number */}
                <div className="mt-4 pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground font-mono truncate">
                    ID: {cert.validationNumber}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ServiceNow Micro-Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-12"
        >
          <h3 className="text-center text-lg font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
            <img src={servicenowLogo} alt="ServiceNow" className="w-6 h-6 object-contain" />
            ServiceNow Micro-Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {servicenowMicroCerts.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-xl p-4 text-center hover:border-green-500/50 transition-all cursor-default"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xs font-semibold text-foreground leading-tight mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {cert.name}
                </h4>
                <p className="text-[10px] text-muted-foreground">{cert.issued}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + 0.1 * groupIndex }}
              className="bg-gradient-to-br from-card to-secondary/20 border border-border/50 rounded-xl p-6 shadow-card hover:shadow-lg transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl ${group.color} flex items-center justify-center shadow-lg`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground">
                  {group.category}
                </h3>
              </div>

              {/* Certifications List */}
              <ul className="space-y-3">
                {group.certs.map((cert, certIndex) => (
                  <li
                    key={certIndex}
                    className={`p-3 rounded-lg transition-all ${
                      cert.highlight
                        ? 'bg-primary/10 border border-primary/20 hover:bg-primary/15'
                        : 'bg-secondary/50 hover:bg-secondary border border-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-sm font-medium ${cert.highlight ? 'text-primary' : 'text-foreground'}`}>
                        {cert.name}
                      </span>
                      {cert.highlight && <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {cert.validity}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Badge count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-full shadow-lg">
            <Award className="w-5 h-5" />
            <span className="font-semibold">15+ Verified Certifications</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;