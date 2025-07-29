import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Scale,
  Users,
  CreditCard,
  AlertTriangle,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

const TermsOfService = () => {
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
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <CheckCircle className="h-6 w-6" />,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using Nebula Arcs' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        },
        {
          subtitle: "Legal Capacity",
          text: "You represent that you are at least 18 years old or have reached the age of majority in your jurisdiction, and have the legal capacity to enter into this agreement.",
        },
        {
          subtitle: "Business Representation",
          text: "If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to these terms.",
        },
      ],
    },
    {
      id: "services",
      title: "Services Description",
      icon: <Users className="h-6 w-6" />,
      content: [
        {
          subtitle: "Service Offerings",
          text: "Nebula Arcs provides a comprehensive range of digital services including but not limited to website development, mobile application development, digital marketing, SEO services, content creation, AI video production, photography, videography, logo design, and business consulting.",
        },
        {
          subtitle: "Service Availability",
          text: "We strive to maintain continuous service availability, but we do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.",
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice, though we will make reasonable efforts to notify clients of significant changes.",
        },
      ],
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      icon: <Users className="h-6 w-6" />,
      content: [
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.",
        },
        {
          subtitle: "Content Accuracy",
          text: "You are responsible for ensuring that all information, content, and materials you provide to us are accurate, current, and do not violate any laws or third-party rights.",
        },
        {
          subtitle: "Compliance",
          text: "You agree to comply with all applicable laws and regulations when using our services and will not use our services for any illegal or unauthorized purpose.",
        },
      ],
    },
    {
      id: "payment-terms",
      title: "Payment Terms",
      icon: <CreditCard className="h-6 w-6" />,
      content: [
        {
          subtitle: "Payment Schedule",
          text: "Payment terms vary by service type and project scope. Typical arrangements include upfront deposits, milestone-based payments, or monthly subscriptions as agreed upon in individual service contracts.",
        },
        {
          subtitle: "Late Payments",
          text: "Late payments may result in service suspension and may incur additional fees. We reserve the right to charge interest on overdue amounts at a rate of 1.5% per month or the maximum allowed by law.",
        },
        {
          subtitle: "Refund Policy",
          text: "Refunds are handled on a case-by-case basis and are subject to the specific terms outlined in individual service agreements. Digital products and completed services are generally non-refundable.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: <Scale className="h-6 w-6" />,
      content: [
        {
          subtitle: "Client Content",
          text: "You retain ownership of all content, materials, and intellectual property you provide to us. You grant us a limited license to use such materials solely for the purpose of providing our services.",
        },
        {
          subtitle: "Deliverables",
          text: "Upon full payment, you will receive ownership rights to the final deliverables created specifically for your project, subject to any third-party licensing restrictions.",
        },
        {
          subtitle: "Our Intellectual Property",
          text: "All proprietary methods, processes, technologies, and general knowledge used in providing our services remain the intellectual property of Nebula Arcs.",
        },
      ],
    },
    {
      id: "limitations",
      title: "Limitations and Disclaimers",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: [
        {
          subtitle: "Service Limitations",
          text: "While we strive for excellence, we cannot guarantee specific results from our digital marketing, SEO, or other performance-based services due to factors beyond our control.",
        },
        {
          subtitle: "Third-Party Services",
          text: "Our services may integrate with third-party platforms and services. We are not responsible for the availability, functionality, or policies of these external services.",
        },
        {
          subtitle: "Liability Limitation",
          text: "Our total liability for any claims arising from our services shall not exceed the total amount paid by you for the specific service giving rise to the claim.",
        },
      ],
    },
  ];

  const prohibitedUses = [
    "Violate any applicable local, state, national, or international law",
    "Transmit or procure the sending of any advertising or promotional material without our prior written consent",
    "Impersonate or attempt to impersonate the company, employees, or other users",
    "Use our services in any way that could damage, disable, or impair the service",
    "Engage in any other conduct that restricts or inhibits anyone's use of the service",
    "Use our services for any fraudulent or deceptive purposes",
  ];

  const terminationReasons = [
    "Breach of these Terms of Service",
    "Failure to make required payments",
    "Violation of applicable laws or regulations",
    "Misuse of our services or systems",
    "Fraudulent or deceptive conduct",
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mb-6"
          >
            <FileText className="h-8 w-8 text-purple-600" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
            These terms govern your use of Nebula Arcs' services. Please read
            them carefully before engaging with our services.
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
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
          >
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Welcome to Our Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of
              Nebula Arcs' website, services, and products. These Terms create a
              legally binding agreement between you and Nebula Arcs. Please read
              these Terms carefully and contact us if you have any questions
              before using our services.
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
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"
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

        {/* Prohibited Uses Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.section
            variants={itemVariants}
            className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                variants={iconVariants}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg"
              >
                <XCircle className="h-6 w-6 text-red-600" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-foreground">
                Prohibited Uses
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              You may not use our services for any of the following prohibited
              activities:
            </p>

            <div className="grid grid-cols-1 gap-4">
              {prohibitedUses.map((use, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">
                    {use}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Termination Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.section
            variants={itemVariants}
            className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                variants={iconVariants}
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-lg"
              >
                <Clock className="h-6 w-6 text-orange-600" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-foreground">
                Termination
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Termination Rights
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  We may terminate or suspend your access to our services
                  immediately, without prior notice, for any of the following
                  reasons:
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {terminationReasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {reason}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Effect of Termination
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Upon termination, your right to use our services will cease
                  immediately. Any provisions of these Terms that by their
                  nature should survive termination shall survive termination.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Additional Terms */}
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
              Governing Law
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of Sri Lanka, without regard to its conflict of law
              provisions. Any disputes will be resolved in the courts of Sri
              Lanka.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Force Majeure
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We shall not be liable for any failure or delay in performance due
              to circumstances beyond our reasonable control, including natural
              disasters, war, terrorism, or government actions.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Severability
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision will be limited or eliminated to the
              minimum extent necessary so that these Terms will otherwise remain
              in full force and effect.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Amendment
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify users of significant changes via email or prominent notice
              on our website. Continued use constitutes acceptance of modified
              terms.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
