import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import FlareupIMG from "../assets/images/brands/flareup-logo.webp";
import RuhunuImg from "../assets/images/brands/ruhunu trust.png";
import LusionImg from "../assets/images/brands/lusion buglow.png";
import RubyImg from "../assets/images/brands/rubistore_logo_menu.png";
import VisaIMG from "../assets/images/brands/visa.lk Logo.png";

const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Using placeholder images for demo - replace with your actual brand logos
  const brands = [
    {
      id: 1,
      name: "Flare Up Clothing ",
      logo: FlareupIMG,
    },
    {
      id: 2,
      name: "Vacanza In Ceylon",
      logo: "http://www.vacanzainceylon.com/wp-content/uploads/2025/07/Untitledh-2.png",
    },
    {
      id: 3,
      name: "Ruhunu Trust ",
      logo: RuhunuImg,
    },
    {
      id: 4,
      name: "Lusion Banglow ",
      logo: LusionImg,
    },
    {
      id: 5,
      name: "Ruby Store",
      logo: RubyImg,
    },
    {
      id: 6,
      name: "Visa LK",
      logo: VisaIMG,
    },
  ];

  // Triple the brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const brandVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full  overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative z-10 w-full h-full flex flex-col justify-center ">
        {/* Main Brands Scrolling Container */}
        <motion.div variants={itemVariants} className="relative ">
          {/* Enhanced Gradient overlays */}

          {/* Main scrolling row */}
          <div className="overflow-hidden py-12">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, `-${brands.length * (280 + 48)}px`], // Increased width + gap
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`main-${brand.id}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  variants={brandVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <motion.div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-70 h-32 flex items-center justify-center ">
                    {/* Enhanced Glow effect */}
                    <motion.div
                      className="absolute inset-0  rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0.8 }}
                    />

                    {/* Logo with enhanced styling for transparent PNGs */}
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="relative z-10  max-w-44 object-contain transition-all duration-500 "
                      style={{
                        filter:
                          "drop-shadow(0 4px 8px rgba(0,0,0,0.3)) brightness(1.1) contrast(1.1)",
                      }}
                    />

                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1.5 h-1.5 rounded-full opacity-0  ${
                          i === 0 ? "" : i === 1 ? "" : ""
                        }`}
                        animate={{
                          y: [0, -8, 0],
                          x: [0, Math.random() * 6 - 3, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Secondary row moving opposite direction */}
        <motion.div variants={itemVariants} className="relative">
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-10 items-center"
              animate={{
                x: [`-${brands.length * (240 + 40)}px`, 0], // Moving right to left
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {duplicatedBrands.reverse().map((brand, index) => (
                <motion.div
                  key={`secondary-${brand.id}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  variants={brandVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div className="relative bg-white/3 backdrop-blur-lg border border-white/5 rounded-2xl p-6 w-60 h-24 flex items-center justify-center ">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="relative z-10  max-w-36 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        filter:
                          "drop-shadow(0 2px 4px rgba(0,0,0,0.2)) brightness(1.05)",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0
                ? "bg-blue-400/30"
                : i % 3 === 1
                ? "bg-purple-400/30"
                : "bg-pink-400/30"
            }`}
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Brands;
