import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, BadgeCheck, FileText } from 'lucide-react';
import awsBadge from '@/assets/aws-badge.png';
import oracleCert from '@/assets/oracle-cert.jpg';
import servicenowLogo from '@/assets/servicenow-logo.jpeg';
import uipathBadge from '@/assets/uipath-badge.png';
import ibmBadge from '@/assets/ibm-badge.png';
import cambridgeBadge from '@/assets/cambridge-badge.png';
import awsDevopsJraCert from '@/assets/aws-devops-jra-cert.png';
import nptelAiKrrCert from '@/assets/nptel-ai-krr-cert.png';
import snWelcome from '@/assets/servicenow/welcome-to-servicenow.pdf';
import snFlowDesigner from '@/assets/servicenow/flow-designer.pdf';
import snAtf from '@/assets/servicenow/automated-test-framework.pdf';
import snPi from '@/assets/servicenow/predictive-intelligence.pdf';
import snServicePortal from '@/assets/servicenow/service-portal.pdf';
import snAes from '@/assets/servicenow/intro-app-engine-studio.pdf';
import snItsm from '@/assets/servicenow/now-assist-itsm.pdf';
import snServiceBridge from '@/assets/servicenow/service-bridge-delivery.pdf';
import redrobWebapp from '@/assets/redrob/redrob-webapp.png';
import redrobSql from '@/assets/redrob/redrob-sql.png';
import redrobCloud from '@/assets/redrob/redrob-cloud.png';
import snPvWelcome from '@/assets/servicenow-preview/sn-welcome.png';
import snPvFlow from '@/assets/servicenow-preview/sn-flow-designer.png';
import snPvAtf from '@/assets/servicenow-preview/sn-atf.png';
import snPvPi from '@/assets/servicenow-preview/sn-predictive.png';
import snPvPortal from '@/assets/servicenow-preview/sn-service-portal.png';
import snPvAes from '@/assets/servicenow-preview/sn-aes.png';
import snPvItsm from '@/assets/servicenow-preview/sn-itsm.png';
import snPvBridge from '@/assets/servicenow-preview/sn-service-bridge.png';
import snNowAssistV2 from '@/assets/servicenow/now-assist-executive-v2.pdf';
import snAcademicCohort from '@/assets/servicenow/academic-cohort.pdf';
import snPvNowAssistExec from '@/assets/servicenow-preview/sn-now-assist-exec.png';
import snPvAcademicCohort from '@/assets/servicenow-preview/sn-academic-cohort.png';

// Featured certifications with badges
const featuredCerts = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    validity: "2025–2028",
    badge: awsBadge,
    verifyUrl: "https://drive.google.com/file/d/1shWnOHmbh6OeDH3Xq-jjjuCFFRc932HE/view?usp=drive_link",
    validationNumber: "bd466f69b40646d28546a031286beb46"
  },
  {
    name: "OCI Certified Foundations Associate",
    issuer: "Oracle University",
    validity: "2025–2027",
    badge: oracleCert,
    verifyUrl: "https://drive.google.com/file/d/1FlTKxrt-7IBw2usC_l8rAuL8IQwSv--O/view?usp=drive_link",
    validationNumber: "309793847OCI25FNDCFA"
  },
  {
    name: "UiPath RPA Foundation",
    issuer: "UiPath Academy",
    validity: "Naan Mudhalvan Program",
    badge: uipathBadge,
    verifyUrl: "https://drive.google.com/file/d/1eT7KqfQjYIMo5ODh6CmY-3sl8ueHkFIV/view?usp=sharing",
    validationNumber: "NM-RPA-2024"
  },
  {
    name: "Getting Started with AI",
    issuer: "IBM SkillsBuild",
    validity: "Feb 2025",
    badge: ibmBadge,
    verifyUrl: "https://drive.google.com/file/d/179YDLvg0xIV2pNDPYcCFL7i5Fu3JWics/view?usp=sharing",
    validationNumber: "162ac569-e26e-4ce7-8357-c9f081b046bc"
  },
  {
    name: "Cambridge English B1",
    issuer: "Cambridge Assessment",
    validity: "Reading, Writing, Listening",
    badge: cambridgeBadge,
    verifyUrl: "/certificates/cambridge-english.pdf",
    validationNumber: "ENG_255737"
  },
  {
    name: "AWS DevOps Job Readiness Assessment",
    issuer: "Amazon Web Services",
    validity: "2026",
    badge: awsDevopsJraCert,
    verifyUrl: "https://drive.google.com/file/d/1osbSovGQvtVtY3qWwaLti2Tho3a1DAR4/view?usp=drive_link",
    validationNumber: "AWS-DEVOPS-JRA-2025"
  },
  {
    name: "AI: Knowledge Representation and Reasoning",
    issuer: "NPTEL Online Certification",
    validity: "2026",
    badge: nptelAiKrrCert,
    verifyUrl: "https://drive.google.com/file/d/1ugl7X_eQx9PxzK2dhxSQ-nsE-Sc3Vbin/view?usp=drive_link",
    validationNumber: "NPTEL-AI-KRR-2025"
  }
];

// ServiceNow Micro-Certifications
const servicenowMicroCerts = [
  { name: "Welcome to ServiceNow", issued: "Dec 21, 2024", url: snWelcome, preview: snPvWelcome },
  { name: "Flow Designer", issued: "Jan 20, 2025", url: snFlowDesigner, preview: snPvFlow },
  { name: "Automated Test Framework", issued: "Jan 19, 2025", url: snAtf, preview: snPvAtf },
  { name: "Predictive Intelligence", issued: "Jan 25, 2025", url: snPi, preview: snPvPi },
  { name: "Now Assist Executive", issued: "Jan 25, 2025", url: snNowAssistV2, preview: snPvNowAssistExec },
  { name: "Service Portal", issued: "Mar 5, 2025", url: snServicePortal, preview: snPvPortal },
  { name: "Introduction to App Engine Studio", issued: "Jan 26, 2025", url: snAes, preview: snPvAes },
  { name: "Now Assist for ITSM Implementation", issued: "Mar 5, 2025", url: snItsm, preview: snPvItsm },
  { name: "Service Bridge Delivery Accreditation", issued: "Mar 5, 2025", url: snServiceBridge, preview: snPvBridge },
  { name: "Academic On-Demand Cohort", issued: "May 2, 2025", url: snAcademicCohort, preview: snPvAcademicCohort }
];

const certifications = [{
  category: "Redrob.AI",
  color: "bg-gradient-to-br from-red-500 to-rose-700",
  certs: [{
    name: "Web and App Development",
    issuer: "Redrob.AI",
    validity: "2026",
    verifyUrl: "https://skills.redrob.ai/verify/82c6b0ef-9ca5-4354-8ef8-cf6223cbbb09",
    previewUrl: redrobWebapp,
    validationNumber: "82c6b0ef-9ca5-4354-8ef8-cf6223cbbb09"
  }, {
    name: "SQL and Databases",
    issuer: "Redrob.AI",
    validity: "2026",
    verifyUrl: "https://skills.redrob.ai/verify/5e00395d-d884-435c-8aad-0dd1fcad66e3",
    previewUrl: redrobSql,
    validationNumber: "5e00395d-d884-435c-8aad-0dd1fcad66e3"
  }, {
    name: "Cloud and Cybersecurity Basics",
    issuer: "Redrob.AI",
    validity: "2026",
    verifyUrl: "https://skills.redrob.ai/verify/b91762f4-5481-48b0-ba05-71b9f622e4aa",
    previewUrl: redrobCloud,
    validationNumber: "b91762f4-5481-48b0-ba05-71b9f622e4aa"
  }]
}, {
  category: "NETGEAR Academy",
  color: "bg-gradient-to-br from-slate-500 to-slate-700",
  certs: [{
    name: "Advanced Wireless Networking Expert",
    issuer: "NETGEAR Academy",
    validity: "2026",
    verifyUrl: "https://drive.google.com/file/d/1c_6CX5tG9CGYXOgNdbHsFHovR4rFfgw5/view?usp=drive_link",
    previewUrl: "https://drive.google.com/thumbnail?id=1c_6CX5tG9CGYXOgNdbHsFHovR4rFfgw5&sz=w800",
    validationNumber: "NETGEAR-AWNE-2026"
  }, {
    name: "Advanced Wired Networking Expert",
    issuer: "NETGEAR Academy",
    validity: "2026",
    verifyUrl: "https://drive.google.com/file/d/1QLa-ilg9VzoMmc3mGhUFTbfgUrLzESk7/view?usp=drive_link",
    previewUrl: "https://drive.google.com/thumbnail?id=1QLa-ilg9VzoMmc3mGhUFTbfgUrLzESk7&sz=w800",
    validationNumber: "NETGEAR-AWDE-2026"
  }, {
    name: "Advanced Insight Cloud Expert",
    issuer: "NETGEAR Academy",
    validity: "2026",
    verifyUrl: "https://drive.google.com/file/d/1ee_emuBeE0GDMlqxmq8SOqiIwqwwWBIS/view?usp=drive_link",
    previewUrl: "https://drive.google.com/thumbnail?id=1ee_emuBeE0GDMlqxmq8SOqiIwqwwWBIS&sz=w800",
    validationNumber: "NETGEAR-AICE-2026"
  }, {
    name: "NETGEAR Certified Engineer (NCE)",
    issuer: "NETGEAR Academy",
    validity: "2026",
    verifyUrl: "https://drive.google.com/file/d/1hxG97g_ETdQ4LzEOFybhjPZBy9hdIST9/view?usp=drive_link",
    previewUrl: "https://drive.google.com/thumbnail?id=1hxG97g_ETdQ4LzEOFybhjPZBy9hdIST9&sz=w800",
    validationNumber: "NETGEAR-NCE-2026"
  }, {
    name: "NETGEAR AV Certification Level 1",
    issuer: "NETGEAR Academy",
    validity: "2026",
    verifyUrl: "https://drive.google.com/file/d/15lBXdh-yON6ScqbWwBRv5uwQLyof59m2/view?usp=drive_link",
    previewUrl: "https://drive.google.com/thumbnail?id=15lBXdh-yON6ScqbWwBRv5uwQLyof59m2&sz=w800",
    validationNumber: "NETGEAR-AV1-2026"
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
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
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
                className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-gradient-to-br from-card to-secondary/30 border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
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
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {servicenowMicroCerts.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-gradient-to-br from-card to-secondary/30 border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-5">
                  <div className="flex-shrink-0">
                    <img
                      src={cert.preview}
                      alt={`${cert.name} ServiceNow micro-certification`}
                      loading="lazy"
                      className="w-24 h-24 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform bg-muted"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        Verified
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">ServiceNow</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.issued}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground font-mono truncate">
                    Micro-Certification
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Other Certifications - card style matching Featured */}
        {certifications.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 + 0.1 * groupIndex }}
            className="mb-12"
          >
            <h3 className="text-center text-lg font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              {group.category} Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {group.certs.map((cert, certIndex) => (
                <motion.a
                  key={cert.name}
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + certIndex * 0.08 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md bg-gradient-to-br from-card to-secondary/30 border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-5">
                    <div className="flex-shrink-0">
                      {(cert as any).previewUrl ? (
                        <img
                          src={(cert as any).previewUrl}
                          alt={`${cert.name} certificate`}
                          loading="lazy"
                          className="w-24 h-24 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform bg-muted"
                        />
                      ) : (
                        <div className={`w-24 h-24 rounded-xl ${group.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                          <Award className="w-12 h-12 text-white drop-shadow" />
                        </div>
                      )}
                    </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground font-mono truncate">
                      ID: {cert.validationNumber}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Badge count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-full shadow-lg">
            <Award className="w-5 h-5" />
            <span className="font-semibold">25+ Verified Certifications</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;