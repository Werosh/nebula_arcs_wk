import { motion } from "framer-motion";

import ImgO1 from "../assets/images/pckg_01.webp";
import ImgO2 from "../assets/images/pckg_02.webp";
import ImgO3 from "../assets/images/pckg_03.webp";
import ImgO4 from "../assets/images/pckg_04.webp";

const packages = [
  {
    name: "Website Development",
    description:
      "Custom websites built with modern technologies for optimal performance and user experience",
    icon: "💻",
  },
  {
    name: "SEO Development",
    description:
      "Optimize your online presence and boost search engine rankings effectively",
    icon: "🔍",
  },
  {
    name: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your business online",
    icon: "📈",
  },
  {
    name: "Email Marketing",
    description:
      "Targeted email campaigns that engage your audience and drive conversions",
    icon: "📧",
  },
  {
    name: "Event Planning",
    description: "Professional event management from concept to execution",
    icon: "🎉",
  },
  {
    name: "Software & Mobile App Development",
    description:
      "Custom software solutions and mobile applications for your business needs",
    icon: "📱",
  },
  {
    name: "Business Consultant",
    description:
      "Strategic business consulting to optimize operations and drive growth",
    icon: "💼",
  },
  {
    name: "Photography & Videography",
    description:
      "Professional visual content creation for events, products, and marketing",
    icon: "📸",
  },
  {
    name: "Content Writing",
    description:
      "High-quality written content that resonates with your target audience",
    icon: "✍️",
  },
  {
    name: "Content Creation",
    description: "Engaging multimedia content across all digital platforms",
    icon: "🎨",
  },
  {
    name: "AI Video Creation",
    description: "Cutting-edge AI-powered video content generation and editing",
    icon: "🤖",
  },
  {
    name: "Short Video Creation",
    description:
      "Dynamic short-form videos optimized for social media platforms",
    icon: "🎬",
  },
  {
    name: "Content Planning & Copywriting",
    description:
      "Strategic content planning and persuasive copywriting services",
    icon: "📝",
  },
  {
    name: "Logo Design",
    description: "Professional logo design and brand identity development",
    icon: "🎯",
  },
];

// Array of image URLs for the hero section
const heroImages = [ImgO1, ImgO2, ImgO3, ImgO4];

export const PackagesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div id="packages" className="min-h-screen ">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight text-[#043b4f]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our Professional
                <span className="text-blue-600 block">Services</span>
              </motion.h1>

              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We provide comprehensive solutions to help your business thrive
                in the digital landscape. From development to marketing, our
                expert team delivers quality results.
              </motion.p>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-900/15 to-[#043b4f] rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {heroImages.map((imageUrl, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-xl   text-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.15,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={imageUrl}
                        alt={`Service ${index + 1}`}
                        className=" mx-auto rounded-lg object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#043b4f]">
              What We <span className="text-blue-600">Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our range of professional services designed to meet your
              business needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-300/10 border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="text-3xl flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {pkg.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-gray-100 group-hover:text-blue-600 transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
