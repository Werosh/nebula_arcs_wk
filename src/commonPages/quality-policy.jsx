import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Target,
  Zap,
  Users,
  Cog,
  TrendingUp,
  Calendar,
} from "lucide-react";

const QualityPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const principles = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excellence First",
      description:
        "We deliver exceptional results that exceed expectations through meticulous attention to detail and continuous improvement.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation Drive",
      description:
        "We embrace cutting-edge technologies and creative solutions to provide forward-thinking digital experiences.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Focus",
      description:
        "Every project is tailored to meet unique client needs with personalized service and dedicated support.",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Process Integrity",
      description:
        "We follow rigorous quality assurance processes and best practices to ensure consistent, reliable outcomes.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Continuous Growth",
      description:
        "We constantly evolve our skills, tools, and methodologies to stay ahead of industry standards.",
    },
  ];

  const commitments = [
    "Deliver projects on time and within scope",
    "Maintain transparent communication throughout",
    "Provide ongoing support and maintenance",
    "Use industry-leading tools and technologies",
    "Ensure security and performance optimization",
    "Regular quality reviews and improvements",
  ];

  return (
    <div className=" py-12 px-4 min-h-screen mt-20">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full mb-6"
          >
            <Award className="h-8 w-8 text-amber-400" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Quality{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            Our commitment to delivering exceptional digital solutions with
            uncompromising quality standards.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Calendar className="h-4 w-4" />
            <span>Effective: January 29, 2025</span>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Our Quality Mission
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              At Nebula Arcs, quality isn't just a goal—it's our foundation. We
              are committed to delivering digital solutions that combine
              technical excellence, creative innovation, and strategic thinking
              to drive meaningful results for our clients.
            </p>
          </motion.div>
        </motion.div>

        {/* Quality Principles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8 text-white"
          >
            Our Quality Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-amber-400/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    variants={iconVariants}
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-colors"
                  >
                    {principle.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Commitments */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-8 border border-slate-600"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white text-center">
              Our Quality Commitments
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-300">{commitment}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Quality Standards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 text-center"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-slate-300 text-sm">
              Client Satisfaction Focus
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 text-center"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-slate-300 text-sm">Quality Monitoring</div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 text-center"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
              ISO
            </div>
            <div className="text-slate-300 text-sm">Standard Compliance</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default QualityPolicy;
