import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Globe,
  Search,
  TrendingUp,
  Smartphone,
  Users,
  Camera,
  PenTool,
  Video,
  Calendar,
  Briefcase,
  Palette,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronDown,
  DollarSign,
  Clock,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const services = [
  {
    id: "website",
    name: "Website Development",
    icon: Globe,
    description: "Custom websites & web applications",
  },
  {
    id: "seo",
    name: "SEO Development",
    icon: Search,
    description: "Search engine optimization",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: TrendingUp,
    description: "Comprehensive digital strategies",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    icon: Mail,
    description: "Targeted email campaigns",
  },
  {
    id: "event-planning",
    name: "Event Planning",
    icon: Calendar,
    description: "Corporate & personal events",
  },
  {
    id: "app-development",
    name: "Software & Mobile App Development",
    icon: Smartphone,
    description: "iOS, Android & desktop apps",
  },
  {
    id: "business-consultant",
    name: "Business Consultant",
    icon: Briefcase,
    description: "Strategic business guidance",
  },
  {
    id: "photography",
    name: "Photography & Videography",
    icon: Camera,
    description: "Professional visual content",
  },
  {
    id: "content-writing",
    name: "Content Writing",
    icon: PenTool,
    description: "SEO-optimized written content",
  },
  {
    id: "content-creation",
    name: "Content Creation",
    icon: Video,
    description: "Social media & brand content",
  },
  {
    id: "ai-video",
    name: "AI Video Creations",
    icon: Video,
    description: "AI-powered video production",
  },
  {
    id: "short-video",
    name: "Short Video Creations",
    icon: Video,
    description: "TikTok, Reels & YouTube Shorts",
  },
  {
    id: "content-planning",
    name: "Content Planning & Copywriting",
    icon: Users,
    description: "Strategic content calendars",
  },
  {
    id: "logo-design",
    name: "Logo Design",
    icon: Palette,
    description: "Brand identity & visual design",
  },
];

const budgetOptions = [
  {
    id: "under-1k",
    name: "Under $1,000",
    description: "Small projects & quick fixes",
  },
  {
    id: "1k-5k",
    name: "$1,000 - $5,000",
    description: "Small to medium projects",
  },
  {
    id: "5k-10k",
    name: "$5,000 - $10,000",
    description: "Medium scale projects",
  },
  {
    id: "10k-25k",
    name: "$10,000 - $25,000",
    description: "Large scale projects",
  },
  {
    id: "25k-plus",
    name: "$25,000+",
    description: "Enterprise level projects",
  },
];

const timelineOptions = [
  { id: "asap", name: "ASAP", description: "Urgent delivery needed" },
  { id: "1-month", name: "Within 1 Month", description: "Quick turnaround" },
  { id: "2-3-months", name: "2-3 Months", description: "Standard timeline" },
  { id: "3-6-months", name: "3-6 Months", description: "Flexible timeline" },
  { id: "6-plus-months", name: "6+ Months", description: "Long-term project" },
];

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);
  const [isTimelineDropdownOpen, setIsTimelineDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const formRef = useRef();
  const sectionRef = useRef();
  const dropdownRef = useRef();
  const budgetDropdownRef = useRef();
  const timelineDropdownRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Initialize EmailJS (replace with your actual credentials)
  const EMAILJS_SERVICE_ID = "your_service_id";
  const EMAILJS_TEMPLATE_ID = "your_template_id";
  const EMAILJS_PUBLIC_KEY = "your_public_key";

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleBudgetSelect = (budgetId) => {
    setSelectedBudget(budgetId);
    setFormData({ ...formData, budget: budgetId });
    setIsBudgetDropdownOpen(false);
  };

  const handleTimelineSelect = (timelineId) => {
    setSelectedTimeline(timelineId);
    setFormData({ ...formData, timeline: timelineId });
    setIsTimelineDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const selectedServiceNames = selectedServices
        .map((id) => services.find((service) => service.id === id)?.name)
        .join(", ");

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        services: selectedServiceNames,
        budget: formData.budget,
        timeline: formData.timeline,
        to_name: "Nebula Arcs Team",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        budget: "",
        timeline: "",
      });
      setSelectedServices([]);
      setSelectedBudget("");
      setSelectedTimeline("");
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        budgetDropdownRef.current &&
        !budgetDropdownRef.current.contains(event.target)
      ) {
        setIsBudgetDropdownOpen(false);
      }
      if (
        timelineDropdownRef.current &&
        !timelineDropdownRef.current.contains(event.target)
      ) {
        setIsTimelineDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -left-20 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        ></motion.div>

        {/* Contact Information - Top Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-8"
          >
            Get In Touch
          </motion.h3>

          {/* Contact Details in horizontal layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "info@nebulaarcs.com",
                href: "mailto:info@nebulaarcs.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+94 (0)70 360 8328",
                href: "tel:+94703608328",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Malabe, Sri Lanka",
                href: null,
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.label}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-[#043b4f] text-white group-hover:shadow-lg transition-shadow mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {contact.label}
                  </h4>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {contact.value}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300">
                      {contact.value}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h4 className="font-semibold mb-4 text-gray-800 dark:text-white">
              Connect With Us
            </h4>
            <div className="flex justify-center space-x-4">
              {[
                { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-500" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-md text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form - Bottom Section with Transparent Background */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
            Start Your Project
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields in horizontal layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="+94 70 123 4567"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {/* Services Dropdown and Budget/Timeline in horizontal layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Services Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Required Services *
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm text-left text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all flex items-center justify-between"
                  >
                    <span
                      className={
                        selectedServices.length > 0
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-500"
                      }
                    >
                      {selectedServices.length > 0
                        ? `${selectedServices.length} service${
                            selectedServices.length > 1 ? "s" : ""
                          } selected`
                        : "Select services you need"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-lg shadow-lg max-h-64 overflow-y-auto"
                    >
                      {services.map((service) => {
                        const Icon = service.icon;
                        const isSelected = selectedServices.includes(
                          service.id
                        );

                        return (
                          <div
                            key={service.id}
                            onClick={() => handleServiceToggle(service.id)}
                            className={`flex items-center gap-3 p-3 cursor-pointer transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-600/50 ${
                              isSelected
                                ? "bg-blue-50/50 dark:bg-blue-900/20"
                                : ""
                            }`}
                          >
                            <div
                              className={`p-2 rounded-lg ${
                                isSelected
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-100/50 dark:bg-gray-600/50 text-gray-600 dark:text-gray-400"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-medium text-sm ${
                                    isSelected
                                      ? "text-blue-700 dark:text-blue-300"
                                      : "text-gray-900 dark:text-white"
                                  }`}
                                >
                                  {service.name}
                                </span>
                                {isSelected && (
                                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                )}
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </div>

                {selectedServices.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 p-3 bg-blue-50/50 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-200/50 dark:border-blue-800/50"
                  >
                    <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                      Selected Services ({selectedServices.length}):
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedServices.map((serviceId) => {
                        const service = services.find(
                          (s) => s.id === serviceId
                        );
                        return (
                          <span
                            key={serviceId}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100/50 dark:bg-blue-800/50 backdrop-blur-sm text-blue-700 dark:text-blue-300 text-xs rounded-full"
                          >
                            {service?.name}
                            <button
                              type="button"
                              onClick={() => handleServiceToggle(serviceId)}
                              className="hover:bg-blue-200/50 dark:hover:bg-blue-700/50 rounded-full p-0.5"
                            >
                              ×
                            </button>
                          </span>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Budget Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Project Budget
                </label>
                <div className="relative" ref={budgetDropdownRef}>
                  <button
                    type="button"
                    onClick={() =>
                      setIsBudgetDropdownOpen(!isBudgetDropdownOpen)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm text-left text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all flex items-center justify-between"
                  >
                    <span
                      className={
                        selectedBudget
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-500"
                      }
                    >
                      {selectedBudget
                        ? budgetOptions.find((b) => b.id === selectedBudget)
                            ?.name
                        : "Select Budget Range"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isBudgetDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isBudgetDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-lg shadow-lg max-h-64 overflow-y-auto"
                    >
                      {budgetOptions.map((budget) => {
                        const isSelected = selectedBudget === budget.id;

                        return (
                          <div
                            key={budget.id}
                            onClick={() => handleBudgetSelect(budget.id)}
                            className={`flex items-center gap-3 p-3 cursor-pointer transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-600/50 ${
                              isSelected
                                ? "bg-blue-50/50 dark:bg-blue-900/20"
                                : ""
                            }`}
                          >
                            <div
                              className={`p-2 rounded-lg ${
                                isSelected
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-100/50 dark:bg-gray-600/50 text-gray-600 dark:text-gray-400"
                              }`}
                            >
                              <DollarSign className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-medium text-sm ${
                                    isSelected
                                      ? "text-blue-700 dark:text-blue-300"
                                      : "text-gray-900 dark:text-white"
                                  }`}
                                >
                                  {budget.name}
                                </span>
                                {isSelected && (
                                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                )}
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {budget.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Timeline Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Project Timeline
                </label>
                <div className="relative" ref={timelineDropdownRef}>
                  <button
                    type="button"
                    onClick={() =>
                      setIsTimelineDropdownOpen(!isTimelineDropdownOpen)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm text-left text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all flex items-center justify-between"
                  >
                    <span
                      className={
                        selectedTimeline
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-500"
                      }
                    >
                      {selectedTimeline
                        ? timelineOptions.find((t) => t.id === selectedTimeline)
                            ?.name
                        : "Select Timeline"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isTimelineDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isTimelineDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-lg shadow-lg max-h-64 overflow-y-auto"
                    >
                      {timelineOptions.map((timeline) => {
                        const isSelected = selectedTimeline === timeline.id;

                        return (
                          <div
                            key={timeline.id}
                            onClick={() => handleTimelineSelect(timeline.id)}
                            className={`flex items-center gap-3 p-3 cursor-pointer transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-600/50 ${
                              isSelected
                                ? "bg-blue-50/50 dark:bg-blue-900/20"
                                : ""
                            }`}
                          >
                            <div
                              className={`p-2 rounded-lg ${
                                isSelected
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-100/50 dark:bg-gray-600/50 text-gray-600 dark:text-gray-400"
                              }`}
                            >
                              <Clock className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-medium text-sm ${
                                    isSelected
                                      ? "text-blue-700 dark:text-blue-300"
                                      : "text-gray-900 dark:text-white"
                                  }`}
                                >
                                  {timeline.name}
                                </span>
                                {isSelected && (
                                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                )}
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {timeline.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Message field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200/50 dark:border-gray-600/50 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-500"
                placeholder="Tell us about your project requirements, goals, and any specific details..."
              />
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50/50 dark:bg-green-900/20 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 rounded-lg text-green-700 dark:text-green-300"
              >
                <CheckCircle className="w-5 h-5 inline mr-2" />
                Message sent successfully! We'll get back to you within 24
                hours.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50/50 dark:bg-red-900/20 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 rounded-lg text-red-700 dark:text-red-300"
              >
                Failed to send message. Please try again or contact us directly.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting || selectedServices.length === 0}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-[#043b4f] hover:from-blue-700 hover:to-[purple-700] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {selectedServices.length === 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Please select at least one service to proceed
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
