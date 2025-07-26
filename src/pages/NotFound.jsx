import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Zap, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const glitchVariants = {
    initial: { x: 0 },
    animate: {
      x: [-2, 2, -2, 2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Title with glitch effect */}
        <motion.div
          className="relative mb-8"
          variants={glitchVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-mono"
            variants={itemVariants}
          >
            404
          </motion.h1>

          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0 text-8xl md:text-9xl font-bold text-red-500 font-mono opacity-20"
            animate={{
              x: [0, -2, 2, 0],
              opacity: [0, 0.3, 0, 0.2, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Error icon with float animation */}
        <motion.div
          className="flex justify-center mb-6"
          variants={floatVariants}
          animate="animate"
        >
          <div className="relative">
            <AlertTriangle className="w-16 h-16 text-yellow-400" />
            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Zap className="w-4 h-4 text-cyan-400 absolute -top-2 -right-2" />
            </motion.div>
          </div>
        </motion.div>

        {/* Error message */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            The page you're looking for has been moved, deleted, or never
            existed in this dimension.
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            className="group px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-transparent"
            whileHover={{ scale: 1.05, borderColor: "#22d3ee" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
          >
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Tech details */}
        <motion.div
          className="mt-12 text-xs text-gray-500 font-mono"
          variants={itemVariants}
        >
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            ERROR_CODE: 404 | STATUS: NOT_FOUND | TIMESTAMP:{" "}
            {new Date().getTime()}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scanning line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{
          y: [0, window.innerHeight || 800, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default NotFound;
