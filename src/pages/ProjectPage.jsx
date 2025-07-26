import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Filter,
  Search,
  Calendar,
  User,
  Tag,
} from "lucide-react";

const categories = [
  "All Projects",
  "Website Development",
  "SEO Development",
  "Digital Marketing",
  "Email Marketing",
  "Event Planning",
  "Software And Mobile Application Development",
  "Business Consultant",
  "Photography and Videography",
  "Content Writing",
  "Content Creation",
  "AI Video Creations",
  "Short Video Creations",
  "Content Planning and Copywriting",
  "Logo Design",
];

const projects = [
  // Website Development
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern responsive e-commerce solution with advanced filtering, payment integration, and inventory management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "Website Development",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    date: "2024-03-15",
    client: "Tech Solutions Inc.",
  },
  {
    id: 2,
    title: "Corporate Website",
    description:
      "Professional corporate website with CMS integration and responsive design for better user experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Website Development",
    tags: ["WordPress", "PHP", "MySQL", "CSS3"],
    demoUrl: "https://demo-corporate.com",
    githubUrl: "https://github.com/example/corporate",
    date: "2024-02-20",
    client: "Business Corp",
  },

  // SEO Development
  {
    id: 3,
    title: "SEO Analytics Dashboard",
    description:
      "Comprehensive SEO tracking and analytics platform with keyword monitoring and ranking analysis.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "SEO Development",
    tags: ["React", "Python", "Google Analytics", "SEMrush API"],
    demoUrl: "https://demo-seo.com",
    githubUrl: "https://github.com/example/seo-dashboard",
    date: "2024-01-10",
    client: "Digital Agency",
  },

  // Digital Marketing
  {
    id: 4,
    title: "Social Media Campaign",
    description:
      "Multi-platform digital marketing campaign with automated posting and engagement tracking.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    category: "Digital Marketing",
    tags: ["Facebook Ads", "Instagram", "Analytics", "Automation"],
    demoUrl: "https://demo-campaign.com",
    githubUrl: "#",
    date: "2024-03-01",
    client: "Fashion Brand",
  },

  // Email Marketing
  {
    id: 5,
    title: "Email Automation System",
    description:
      "Advanced email marketing automation with personalization and A/B testing capabilities.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    category: "Email Marketing",
    tags: ["Mailchimp", "Automation", "Analytics", "Personalization"],
    demoUrl: "https://demo-email.com",
    githubUrl: "#",
    date: "2024-02-15",
    client: "E-commerce Store",
  },

  // Event Planning
  {
    id: 6,
    title: "Event Management Platform",
    description:
      "Complete event planning and management system with booking, payments, and attendee tracking.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    category: "Event Planning",
    tags: ["Event Management", "Booking System", "Payments", "CRM"],
    demoUrl: "https://demo-events.com",
    githubUrl: "https://github.com/example/events",
    date: "2024-01-25",
    client: "Event Company",
  },

  // Software Development
  {
    id: 7,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transactions.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    category: "Software And Mobile Application Development",
    tags: ["React Native", "Node.js", "MongoDB", "Security"],
    demoUrl: "https://demo-banking.com",
    githubUrl: "https://github.com/example/banking-app",
    date: "2024-03-10",
    client: "Financial Institution",
  },

  // Business Consultant
  {
    id: 8,
    title: "Business Strategy Report",
    description:
      "Comprehensive business analysis and strategic planning consultation for market expansion.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    category: "Business Consultant",
    tags: ["Strategy", "Analysis", "Planning", "Consulting"],
    demoUrl: "#",
    githubUrl: "#",
    date: "2024-02-28",
    client: "Startup Company",
  },

  // Photography
  {
    id: 9,
    title: "Product Photography Portfolio",
    description:
      "Professional product photography and videography for e-commerce and marketing campaigns.",
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop",
    category: "Photography and Videography",
    tags: ["Photography", "Product Shots", "Editing", "Commercial"],
    demoUrl: "https://demo-photography.com",
    githubUrl: "#",
    date: "2024-03-05",
    client: "Retail Brand",
  },

  // Content Writing
  {
    id: 10,
    title: "Blog Content Strategy",
    description:
      "Comprehensive content writing and SEO optimization for increased organic traffic and engagement.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    category: "Content Writing",
    tags: ["SEO Writing", "Blog Posts", "Content Strategy", "Research"],
    demoUrl: "#",
    githubUrl: "#",
    date: "2024-02-10",
    client: "Tech Blog",
  },

  // AI Video Creation
  {
    id: 11,
    title: "AI-Generated Marketing Videos",
    description:
      "Automated video creation using AI tools for marketing campaigns and social media content.",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    category: "AI Video Creations",
    tags: ["AI", "Video Generation", "Marketing", "Automation"],
    demoUrl: "https://demo-ai-video.com",
    githubUrl: "#",
    date: "2024-03-12",
    client: "Marketing Agency",
  },

  // Logo Design
  {
    id: 12,
    title: "Brand Identity Package",
    description:
      "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    category: "Logo Design",
    tags: ["Branding", "Logo Design", "Identity", "Guidelines"],
    demoUrl: "https://demo-branding.com",
    githubUrl: "#",
    date: "2024-01-30",
    client: "Startup Brand",
  },
];

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All Projects" ||
      project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className=" bg-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects across multiple
            industries and technologies. Each project represents our commitment
            to excellence and innovation.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-3 border rounded-lg bg-card hover:bg-accent transition-colors"
            >
              <Filter size={20} />
              Categories
            </button>
          </div>

          {/* Category Filter */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                variants={filterVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-4 bg-card rounded-lg border">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 text-sm rounded-lg transition-all ${
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "bg-secondary hover:bg-accent text-foreground"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
            {selectedCategory !== "All Projects" && ` in ${selectedCategory}`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                layout
                className="bg-card rounded-xl overflow-hidden shadow-lg border hover:shadow-xl transition-shadow"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden relative group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <motion.div
                    className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.category}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(project.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {project.client}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl !== "#" && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                      {project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                    </div>

                    <motion.button
                      className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No projects found matching your criteria.
            </p>
            <motion.button
              onClick={() => {
                setSelectedCategory("All Projects");
                setSearchTerm("");
              }}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
