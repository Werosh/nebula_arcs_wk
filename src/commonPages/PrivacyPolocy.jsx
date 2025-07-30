import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Database,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
} from "lucide-react";

const PrivacyPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="h-6 w-6" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and project requirements.",
        },
        {
          subtitle: "Technical Information",
          text: "We automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited.",
        },
        {
          subtitle: "Communication Data",
          text: "When you communicate with us via email, phone, or contact forms, we may retain those communications and the information contained within them.",
        },
      ],
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <Eye className="h-6 w-6" />,
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, including website development, digital marketing, content creation, and other professional services.",
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to respond to your inquiries, send project updates, and provide customer support.",
        },
        {
          subtitle: "Business Operations",
          text: "We use collected information for internal business purposes such as analytics, fraud prevention, and compliance with legal obligations.",
        },
      ],
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <Shield className="h-6 w-6" />,
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our business, such as hosting providers, payment processors, and analytics services.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Lock className="h-6 w-6" />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Data Encryption",
          text: "Sensitive information transmitted between your browser and our servers is encrypted using industry-standard SSL/TLS protocols.",
        },
        {
          subtitle: "Access Controls",
          text: "We restrict access to personal information to employees and contractors who need it to perform their job functions.",
        },
      ],
    },
  ];

  const rights = [
    "Access and receive a copy of your personal information",
    "Correct inaccurate or incomplete personal information",
    "Delete your personal information under certain circumstances",
    "Restrict or object to the processing of your personal information",
    "Receive your personal information in a portable format",
    "Withdraw consent where processing is based on consent",
  ];

  return (
    <div className="bg-background py-12 mt-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full mb-6"
          >
            <Shield className="h-8 w-8 text-blue-600" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
            Your privacy is important to us. This policy explains how Nebula
            Arcs collects, uses, and protects your personal information.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Calendar className="h-4 w-4" />
            <span>Last updated: January 29, 2025</span>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
          >
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Welcome to Nebula Arcs
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              At Nebula Arcs, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy describes how we collect, use, share, and safeguard your
              information when you visit our website or use our services. By
              using our services, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 mb-12"
        >
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              variants={itemVariants}
              className="bg-card rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  variants={iconVariants}
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg"
                >
                  {section.icon}
                </motion.div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Your Rights Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.section
            variants={itemVariants}
            className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                variants={iconVariants}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg"
              >
                <CheckCircle className="h-6 w-6 text-green-600" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-foreground">
                Your Rights
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Depending on your location and applicable laws, you may have the
              following rights regarding your personal information:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">
                    {right}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Additional Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Data Retention
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected, comply with
              legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Cookies and Tracking
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              browsing experience, analyze website traffic, and understand user
              preferences. You can control cookie settings through your browser.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Third-Party Links
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review their privacy policies.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Changes to This Policy
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
