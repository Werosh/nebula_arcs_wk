import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern, responsive e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    title: "AI-Powered Dashboard",
    description:
      "An intelligent analytics dashboard with machine learning insights, data visualization, and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    demoUrl: "https://demo-dashboard.com",
    githubUrl: "https://github.com/example/ai-dashboard",
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "A feature-rich social platform with real-time messaging, content sharing, and advanced privacy controls.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
    tags: ["React Native", "Firebase", "Socket.io", "AWS"],
    demoUrl: "https://demo-social.com",
    githubUrl: "https://github.com/example/social-app",
  },
];

export const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/projects");
  };

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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            <span className="text-primary"> Projects </span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of our recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                />
              </div>

              <div className="p-6">
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground text-sm mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <button
            onClick={handleViewMore}
            className="cosmic-button w-fit flex items-center mx-auto gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            View More Projects <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
