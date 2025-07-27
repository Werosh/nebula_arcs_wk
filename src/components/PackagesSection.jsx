import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import ImgO1 from "../assets/images/pckg_01.webp";
import ImgO2 from "../assets/images/pckg_02.webp";
import ImgO3 from "../assets/images/pckg_03.webp";
import ImgO4 from "../assets/images/pckg_04.webp";

// Array of image URLs for the hero section
const heroImages = [ImgO1, ImgO2, ImgO3, ImgO4];

export const PackagesSection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div id="packages">
      {/* Hero Section */}
      <motion.section
        ref={ref}
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl mt-15 font-bold leading-tight text-[#043b4f]"
                variants={itemVariants}
              >
                Our Professional
                <span className="text-blue-600 block">Services</span>
              </motion.h1>

              <motion.p
                className="text-gray-500 text-lg leading-relaxed"
                variants={itemVariants}
              >
                We provide comprehensive solutions to help your business thrive
                in the digital landscape. From development to marketing, our
                expert team delivers quality results.
              </motion.p>

              {/* View Services Button - REDESIGNED */}
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl border border-blue-500/20 backdrop-blur-sm flex items-center gap-4 cursor-pointer group transition-all duration-300"
                  onClick={() => {
                    navigate("/services");
                  }}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                    y: -2,
                  }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      translateX: ["100%", "-100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <span className="relative z-10 text-lg">View Services</span>

                  <motion.div
                    className="relative z-10 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="relative bg-gradient-to-br from-blue-900/15 to-[#043b4f] rounded-3xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {heroImages.map((imageUrl, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-xl text-center overflow-hidden"
                      custom={index}
                      variants={imageVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{
                        scale: 1.05,
                        rotateY: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.img
                        src={imageUrl}
                        alt={`Service ${index + 1}`}
                        className="mx-auto rounded-lg object-cover w-full h-full"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Floating Animation Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-300/40 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
