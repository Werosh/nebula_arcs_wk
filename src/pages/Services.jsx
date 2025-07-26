import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Search,
  Megaphone,
  Mail,
  Calendar,
  Smartphone,
  Users,
  Camera,
  PenTool,
  Lightbulb,
  Video,
  Play,
  FileText,
  Palette,
  X,
  ExternalLink,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Website Development",
      icon: Code,
      description: "Custom websites built with modern technologies",
      details:
        "We create stunning, responsive websites using the latest technologies like React, Next.js, and modern CSS frameworks. Our websites are optimized for performance, SEO, and user experience across all devices.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Custom CMS",
        "E-commerce Integration",
      ],
    },
    {
      id: 2,
      title: "SEO Development",
      icon: Search,
      description: "Boost your search engine rankings",
      details:
        "Our comprehensive SEO strategies help your business rank higher on search engines. We focus on technical SEO, content optimization, link building, and local SEO to drive organic traffic.",
      features: [
        "Keyword Research",
        "On-page Optimization",
        "Technical SEO",
        "Link Building",
        "Analytics & Reporting",
      ],
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: Megaphone,
      description: "Complete digital marketing solutions",
      details:
        "Comprehensive digital marketing strategies that include social media marketing, PPC advertising, content marketing, and brand awareness campaigns to grow your online presence.",
      features: [
        "Social Media Marketing",
        "PPC Campaigns",
        "Brand Strategy",
        "Analytics",
        "ROI Optimization",
      ],
    },
    {
      id: 4,
      title: "Email Marketing",
      icon: Mail,
      description: "Engage customers with targeted emails",
      details:
        "Design and execute email marketing campaigns that convert. From newsletter design to automated drip campaigns, we help you build lasting relationships with your audience.",
      features: [
        "Campaign Design",
        "Automation",
        "A/B Testing",
        "Segmentation",
        "Performance Tracking",
      ],
    },
    {
      id: 5,
      title: "Event Planning",
      icon: Calendar,
      description: "Professional event management services",
      details:
        "From corporate events to product launches, we handle every detail of your event planning. Our team ensures seamless execution and memorable experiences for your attendees.",
      features: [
        "Venue Selection",
        "Vendor Management",
        "Timeline Planning",
        "Budget Management",
        "On-site Coordination",
      ],
    },
    {
      id: 6,
      title: "Software & Mobile App Development",
      icon: Smartphone,
      description: "Custom software and mobile applications",
      details:
        "Build powerful software solutions and mobile applications tailored to your business needs. We develop for iOS, Android, and web platforms using cutting-edge technologies.",
      features: [
        "Cross-platform Development",
        "UI/UX Design",
        "Backend Development",
        "API Integration",
        "Maintenance & Support",
      ],
    },
    {
      id: 7,
      title: "Business Consultant",
      icon: Users,
      description: "Strategic business consulting services",
      details:
        "Get expert advice to grow and optimize your business. Our consultants help with strategy development, process improvement, market analysis, and operational efficiency.",
      features: [
        "Strategic Planning",
        "Market Analysis",
        "Process Optimization",
        "Financial Planning",
        "Growth Strategies",
      ],
    },
    {
      id: 8,
      title: "Photography & Videography",
      icon: Camera,
      description: "Professional visual content creation",
      details:
        "High-quality photography and videography services for your business needs. From product photography to corporate videos, we create compelling visual content.",
      features: [
        "Product Photography",
        "Corporate Videos",
        "Event Coverage",
        "Drone Photography",
        "Post-production",
      ],
    },
    {
      id: 9,
      title: "Content Writing",
      icon: PenTool,
      description: "Engaging written content for your brand",
      details:
        "Professional content writing services that engage your audience and drive results. We create blog posts, articles, web copy, and marketing materials that resonate with your target market.",
      features: [
        "Blog Writing",
        "Web Copy",
        "SEO Content",
        "Technical Writing",
        "Editorial Services",
      ],
    },
    {
      id: 10,
      title: "Content Creation",
      icon: Lightbulb,
      description: "Creative content for all platforms",
      details:
        "Comprehensive content creation services including graphics, infographics, social media content, and multimedia presentations that align with your brand identity.",
      features: [
        "Graphic Design",
        "Infographics",
        "Social Media Content",
        "Presentations",
        "Brand Materials",
      ],
    },
    {
      id: 11,
      title: "AI Video Creation",
      icon: Video,
      description: "Cutting-edge AI-powered video content",
      details:
        "Leverage artificial intelligence to create stunning video content efficiently. From AI-generated animations to automated video editing, we bring the future of video production to your brand.",
      features: [
        "AI Animation",
        "Automated Editing",
        "Voice Synthesis",
        "Motion Graphics",
        "Personalized Videos",
      ],
    },
    {
      id: 12,
      title: "Short Video Creation",
      icon: Play,
      description: "Engaging short-form video content",
      details:
        "Create viral-worthy short videos for social media platforms like TikTok, Instagram Reels, and YouTube Shorts. Our team specializes in creating engaging, shareable content.",
      features: [
        "TikTok Videos",
        "Instagram Reels",
        "YouTube Shorts",
        "Viral Content",
        "Platform Optimization",
      ],
    },
    {
      id: 13,
      title: "Content Planning & Copywriting",
      icon: FileText,
      description: "Strategic content planning and copywriting",
      details:
        "Develop comprehensive content strategies and create compelling copy that converts. We plan, create, and optimize content across all your marketing channels.",
      features: [
        "Content Strategy",
        "Editorial Calendar",
        "Sales Copy",
        "Ad Copy",
        "Content Optimization",
      ],
    },
    {
      id: 14,
      title: "Logo Design",
      icon: Palette,
      description: "Professional logo and brand identity design",
      details:
        "Create memorable logos and brand identities that represent your business values. Our designs are versatile, scalable, and designed to make a lasting impression.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Style Guides",
        "Business Cards",
        "Brand Guidelines",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#043b4f]">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            Comprehensive digital solutions to elevate your business to new
            heights
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedService(service)}
                className="relative p-6 rounded-2xl cursor-pointer backdrop-blur-sm border transition-all duration-300 bg-white/70 border-gray-200 hover:bg-white/90 hover:border-gray-300 hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-[#043b4f]">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#043b4f] transition-colors text-[#043b4f]">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600">{service.description}</p>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-gray-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setSelectedService(null)}
            />
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white border border-gray-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 bg-[#043b4f]">
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#043b4f]">
                        {selectedService.title}
                      </h2>
                      <p className="text-gray-600">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-[#043b4f]">
                      Service Details
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      {selectedService.details}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#043b4f]">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center p-3 rounded-lg bg-gray-50"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#043b4f] mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-8 py-3 px-6 bg-[#043b4f] text-white rounded-lg font-semibold hover:bg-[#032935] transition-colors"
                  >
                    Get Started with {selectedService.title}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
