import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

import ShehanIMG from "../assets/team/shehan.webp";
import VihangaIMG from "../assets/team/vihaga.webp";
import WeroshImg from "../assets/team/werosh.webp";
import MadukaImg from "../assets/team/maduka.webp";
import BashithaImg from "../assets/team/bhashitha.webp";
import IsuruImg from "../assets/team/isuru.webp";
import ShashikalaImg from "../assets/team/shashikala.webp";
import TharushiImg from "../assets/team/tharushi.webp";
import ViharaImg from "../assets/team/vihara.webp";

const teamMembers = [
  {
    id: 1,
    name: "Shehan Deshapriya",
    position: "Founder & CEO  ",
    image: ShehanIMG,
    bio: "Visionary leader with 3+ years in the tech industry and 4+ years of business management experience, passionate about building innovative solutions that transform businesses and create meaningful impact.",
    skills: ["Leadership", "Strategy", "Innovation", "Business Development"],
    experience: "4+ years",
    portfolio: "",
    social: {
      linkedin: "",
      twitter: "",
      github: "",
    },
    contact: {
      email: "info@nebulaarcs.com",
      phone: "+94 (70) 360-8328",
    },
  },
  {
    id: 2,
    name: "Vihanga Melindra",
    position: "Fullstack Developer & CTO",
    image: VihangaIMG,
    bio: "Full-stack developer specializing in modern web technologies. Expert in React, Node.js, and cloud architecture with a passion for clean, scalable code.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    experience: "2+ years",
    portfolio: "https://tinyurl.com/mrxmk2zh",
    social: {
      linkedin: "https://linkedin.com/in/vihangamel",
      github: "https://github.com/vihangamel",
    },
    contact: {
      email: "info@nebulaarcs.com",
      phone: "+94 (76) 161-3423",
    },
  },
  {
    id: 3,
    name: "Werosh Kriyanjala",
    position: "Senior Web Developer",
    image: WeroshImg,
    bio: "Senior Web Developer building modern, high-performance apps with React and exploring the future of AI-driven tech.",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Python",
      "TensorFlow",
    ],
    experience: "4+ years",
    portfolio: "https://weroshportfolio.netlify.app/",
    social: {
      linkedin: "https://www.linkedin.com/in/weroshk/",
      github: "https://github.com/Werosh",
      instagram: "https://www.instagram.com/werosh_k/",
    },
    contact: {
      email: "weroshprofy@gmail.com",
      phone: "+94 (74) 220-9812",
    },
  },
  {
    id: 4,
    name: "Maduka Aththanayaka",
    position: "Software Developer",
    image: MadukaImg,
    bio: "I'm a Full Stack Developer with experience in building scalable web applications from frontend to backend. I also work with AI/ML models and DevOps practices to streamline development and deployment.",
    skills: [
      "Fullstack Development",
      "DevOps",
      "AI/ML",
      "Mobile Application Development",
      "Agentic AI",
    ],
    experience: "1+ years",
    portfolio: "https://portfolio-madhuka2002s-projects.vercel.app/",
    social: {
      linkedin: "https://www.linkedin.com/in/madhuka-malshan-759119301/",
      github: "https://github.com/madhuka2002",
      twitter: "",
      website: "",
    },
    contact: {
      email: "madhukaaththanayaka@gmail.com",
      phone: "+94 (75) 897-3870",
    },
  },
  {
    id: 5,
    name: "Bhashitha Ekanayaka",
    position: "Videographer & Photographer",
    image: BashithaImg,
    bio: "Creative professional with 6+ years in photography and videography, currently working in graphic design,  and visual content creation.",
    skills: [
      "Photography",
      "Photo Editing",
      "Video Editing",
      "Graphic Design",
      "Animation Editing",
    ],
    experience: "6+ years",
    portfolio: "https://www.facebook.com/profile.php?id=100071777893407",
    social: {
      linkedin: "https://www.linkedin.com/in/bhashitha-ekanayaka-4b69a8308",
      github: "https://github.com/bhashithaekanayaka",
    },
    contact: {
      email: "bhashithaekanayaka@gmail.com",
      phone: "+94 (70) 496-6675",
    },
  },
  {
    id: 9,
    name: "Tharushi Lochana",
    position: "Project Manager",
    image: TharushiImg,
    bio: "Organized and detail-oriented Project Manager with a background in drama and theater. Skilled in leading cross-functional teams, coordinating resources, and ensuring timely delivery of creative and technical projects.",
    skills: [
      "Project Planning",
      "Team Leadership",
      "Resource Allocation",
      "Timeline Management",
      "Communication & Collaboration",
    ],
    experience: "2+ years",
    portfolio: "",
    social: {
      linkedin: "",
      instagram: "",
    },
    contact: {
      email: "",
      phone: "",
    },
  },
  {
    id: 8,
    name: "Gimhani Thennakoon",
    position: "Quality Assurance Engineer",
    image: ViharaImg,
    bio: "Detail-oriented QA Engineer with a strong foundation in software testing and a passion for delivering bug-free, user-centric digital experiences. Adept at both manual and automated testing with an eye for edge cases.",
    skills: [
      "Manual & Automated Testing",
      "Bug Tracking & Reporting",
      "Test Case Design",
      "UI/UX Validation",
      "Cross-Browser Testing",
    ],
    experience: "2+ years",
    portfolio: "https://www.instagram.com/vihararashh/",
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/vihararashh/",
    },
    contact: {
      email: "vihararashmi2@gmail.com",
      phone: "+94 (76) 949-6250",
    },
  },
  {
    id: 6,
    name: "Isuru Madhushan",
    position: "Graphic Designer",
    image: IsuruImg,
    bio: "Multifaceted media creator,editor, photographer, junior choreographer & social media strategist. Turning ideas into powerful content.",
    skills: [
      "Adobe Photoshop",
      "Lightroom",
      "Color Correction",
      "Retouching",
      "Background Removal",
      "Image Manipulation",
    ],
    experience: "2+ years",
    portfolio: "https://www.facebook.com/share/16aUFVivd4/?mibextid=wwXIfr",
    social: {
      linkedin: "",
      instagram:
        "https://www.instagram.com/shan__x.s?igsh=Nml2ZXZveWhpOHYw&utm_source=qr",
    },
    contact: {
      email: "isurumadhushan881@gmail.com",
      phone: "+94 (70) 332-7341",
    },
  },
  {
    id: 8,
    name: "Shashikala Bandara",
    position: "Script Writer",
    image: ShashikalaImg,
    bio: "Drama and theater undergraduate with a passion for script writing. Bringing stories to life through compelling narratives and characters",
    skills: [
      "Writing & Storytelling",
      "Dialogue Crafting",
      "Character Development",
      "Plot Structuring",
      "Creative Writing",
    ],
    experience: "1+ years",
    portfolio: "https://www.instagram.com/shikzz20?igsh=MzRlODBiNWFlZA==",
    social: {
      linkedin: "",
      instagram: "https://www.instagram.com/shikzz20?igsh=MzRlODBiNWFlZA==",
    },
    contact: {
      email: "bandarashashi532@gmail.com",
      phone: "+94 (71) 131-7449",
    },
  },
  {
    id: 7,
    name: "Umesha Weerasinghe",
    position: "HR Manager",
    image:
      "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    bio: "Strategic HR Manager with strong experience in talent acquisition, employee engagement, and organizational development. Skilled in implementing HR policies, managing performance systems, and fostering a productive workplace culture.",
    skills: [
      "Talent Acquisition",
      "Employee Relations",
      "Performance Management",
      "HR Policy Development",
      "Conflict Resolution",
      "Payroll & HRIS",
    ],
    experience: "1+ years",
    portfolio: "https://www.facebook.com/share/16gSB3nUhC/?mibextid=wwXIfr",
    social: {
      linkedin: "empty@email.com",
      instagram:
        "https://www.instagram.com/________ushi_________?igsh=enJrNHoxaWs1YzM5",
    },
    contact: {
      email: "",
      phone: "+94 (70) 138-8221",
    },
  },
];

export default function TeamPage() {
  const ref = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "github":
        return <Github className="w-5 h-5" />;
      case "website":
        return <Globe className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen ">
      <motion.section
        ref={ref}
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 mt-10"
              variants={itemVariants}
            >
              Meet Our
              <span className="text-blue-400 block">Amazing Team</span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We're a diverse group of passionate professionals dedicated to
              creating exceptional digital experiences and driving innovation
              forward.
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="relative bg-gradient-to-br from-blue-900/20 to-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 cursor-pointer group"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMember(member)}
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-3xl opacity-0"
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                />

                {/* Profile Image */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      loading="lazy"
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Floating dot animation */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Member Info */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Click indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-blue-400 text-sm">→</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/30 custom-scrollbar"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-blue-500/20">
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-all duration-300"
                  onClick={() => setSelectedMember(null)}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <motion.div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400/50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <img
                      loading="lazy"
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-blue-400 text-xl font-semibold mb-2">
                      {selectedMember.position}
                    </p>
                    <p className="text-gray-300 font-medium">
                      Experience: {selectedMember.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Bio */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">About</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Portfolio */}
                {selectedMember.portfolio && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Portfolio
                    </h3>
                    <a
                      href={selectedMember.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <Globe className="w-4 h-4" />
                      View Portfolio
                    </a>
                  </div>
                )}

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Connect</h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(selectedMember.social)
                      .filter(([_, url]) => url) // Only keep entries with a valid URL
                      .map(([platform, url]) => (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 hover:text-white rounded-xl border border-blue-500/30 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {getSocialIcon(platform)}
                          <span className="capitalize">{platform}</span>
                        </motion.a>
                      ))}
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Contact</h3>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${selectedMember.contact.email}`}
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      {selectedMember.contact.email}
                    </a>
                    <a
                      href={`tel:${selectedMember.contact.phone}`}
                      className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      {selectedMember.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
