import { ArrowDown, Sparkles, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

import HeroImg from "../assets/images/hero_img_1.webp";

export const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const particleVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-16  overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        variants={particleVariants}
        animate="animate"
        className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-30"
      />
      <motion.div
        variants={particleVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40"
      />
      <motion.div
        variants={particleVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-32 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-35"
      />

      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div variants={titleVariants} className="space-y-4">
              <motion.div className="flex items-center justify-center lg:justify-start gap-2 mb-4 mt-15">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-6 w-6 text-blue-400" />
                </motion.div>
                <span className="text-blue-400 font-semibold tracking-wide uppercase text-md  text-2xl">
                  Digital Innovation
                </span>
              </motion.div>

              {/* <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight dark:text-[#043b4f]">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block"
                >
                  NEBULA
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  ARCS
                </motion.span>
              </h1> */}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl  text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed dark:text-gray-600"
            >
              Arcing Innovation Across the{" "}
              <span className="text-blue-400 font-semibold">
                Digital Universe
              </span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Explore Our Work
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 justify-center dark:text-gray-700"
              >
                <Globe className="h-5 w-5" />
                Learn More
              </motion.a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="text-2xl md:text-3xl font-bold text-blue-400"
                >
                  20+
                </motion.div>
                <div className="text-sm text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  className="text-2xl md:text-3xl font-bold text-purple-400"
                >
                  30+
                </motion.div>
                <div className="text-sm text-gray-400 mt-1">Clients</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                  className="text-2xl md:text-3xl font-bold text-pink-400"
                >
                  3+
                </motion.div>
                <div className="text-sm text-gray-400 mt-1">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-30 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* IMAGE */}
                <div className="relative bg-gradient-to-br from-gray-700/20 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-600">
                  <div className="aspect-square bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl flex items-center justify-center overflow-hidden">
                    {/* Replace the div with an actual image */}
                    <img
                      src={HeroImg}
                      alt="Descriptive alt text"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-80"
                  />
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-80"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-blue-400/30"
            >
              <Zap className="h-8 w-8 text-blue-400" />
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                x: [5, -5, 5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-purple-400/30"
            >
              <Globe className="h-8 w-8 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm text-gray-400 mb-2 font-medium"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-blue-400" />
        </motion.div>
      </motion.div> */}
    </section>
  );
};
