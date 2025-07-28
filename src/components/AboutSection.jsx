import { Video } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import AboutImg from "../assets/images/aboutUs_img_1.webp";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 px-4  dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Arcing Innovation Across the Digital Universe
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative">
              {/* Decorative background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main image container - Replace with your actual image */}
              <div className="relative bg-white dark:bg-slate-800/10 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={AboutImg} // Replace with your image path
                    alt="Descriptive alt text"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              <motion.div
                animate={{
                  y: [8, -8, 8],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Video className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                NEBULA ARCS
              </h3>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                At Nebula Arcs, we're a team of creators, developers, and
                strategists who turn ideas into impactful digital experiences.
                From websites to mobile apps, we blend design and technology to
                build things that work beautifully and make a real difference.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                We offer a wide range of services..including SEO, digital
                marketing, content creation, AI video, and branding.All crafted
                with passion and precision. Whether you're starting fresh or
                scaling up, we're here to help you grow, every step of the way.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-700"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Years Experience
                </div>
              </div>
            </motion.div>

            {/* View Team Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <a href="/team">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
                  View Team
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
