import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Filter,
  Search,
  Calendar,
  User,
} from "lucide-react";

// website development images
import FlareUpImg from "../assets/project_images/flareup.webp";
import VacanzaImg from "../assets/project_images/vacanza.webp";
import RubiImg from "../assets/project_images/rubi.webp";
import RuhunuImg from "../assets/project_images/ruhunuprimeland.webp";
import VisaImg from "../assets/project_images/vizalk.webp";
import LucianImg from "../assets/project_images/lucian.webp";
import DigasiriImg from "../assets/project_images/digasiri.webp";

const categories = [
  "All Projects",
  "Website Development",
  "Photography and Videography",
  "AI Video Creations",
  "Digital Marketing",
  "SEO Development",
  "Email Marketing",
  "Event Planning",
  "Software And Mobile Application Development",
  "Business Consultant",
  "Content Writing",
  "Content Creation",
  "Short Video Creations",
  "Content Planning and Copywriting",
  "Logo Design",
];

const projects = [
  // Website Development
  {
    id: 1,
    title: "Flareup E-Commerce Platform",
    description:
      "A modern, responsive e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: FlareUpImg,
    category: "Website Development",
    tags: [],
    demoUrl: "https://flareupclothing.com/",
    githubUrl: "",
    date: "2024-08-12",
    client: "Mr.Vimukthi Manmperi",
  },
  {
    id: 2,
    title: "Vacanza in Ceylon – Luxury Travel Website",
    description:
      "A modern, multilingual travel platform designed for Italian tourists exploring Sri Lanka. Features include curated tour packages, immersive visuals, mobile-friendly UI, and SEO-optimized structure for maximum reach and conversions..",
    image: VacanzaImg,
    category: "Website Development",
    tags: [],
    demoUrl: "https://www.vacanzainceylon.com/",
    githubUrl: "",
    date: "2024-10-17",
    client: "Mr.Sampath Liyanage",
  },
  {
    id: 3,
    title: "Rubi Store.lk – E‑Commerce Website",
    description:
      "A sleek and responsive online store for electronics in Sri Lanka, featuring fast delivery, secure payments, and an easy shopping experience focused on tech and entertainment products.",
    image: RubiImg,

    category: "Website Development",
    tags: [],
    demoUrl: "https://rubistore.lk/",
    githubUrl: "",
    date: "2025-06-10",
    client: "Mr.Ruwan Pathirana",
  },
  {
    id: 4,
    title: "Ruhunu Prime Lands – Real Estate Development Website",
    description:
      "A polished and professional real estate platform enabling Sri Lankan land seekers to explore residential and investment plots across 18+ districts. Features include clean UI, property filters, transparent pricing per perch, project showcases, and contact integration with Prime Lands’ trusted brand and national reach.",
    image: RuhunuImg,

    category: "Website Development",
    tags: [],
    demoUrl: "https://ruhunuprimelands.com/",
    githubUrl: "",
    date: "2025-07-20",
    client: "Mr.Thishan Poththewela",
  },
  {
    id: 5,
    title: "Visa‑LK.com – Sri Lanka Visa Application Platform",
    description:
      "A clean, responsive portal guiding global travelers through Sri Lanka’s visa options—tourist, business, or transit. Features include straightforward application flow, multilingual support, secure payment integration, and clear eligibility criteria.",
    image: VisaImg,

    category: "Website Development",
    tags: [],
    demoUrl: "https://visa-lk.com/",
    githubUrl: "",
    date: "2025-07-20",
    client: "Mr.Thishan Poththewela",
  },
  {
    id: 6,
    title: "Lucian Bungalow – Nuwara Eliya Boutique Villa Website",
    description:
      "A serene and visually rich website promoting a charming highland retreat in Nuwara Eliya. The platform showcases garden-view villa accommodations, cozy room types, and local experiences. Features clean mobile-first design, gallery-driven storytelling, smooth booking prompts, and key property details like amenities (free Wi‑Fi, parking, terrace) and location context near Gregory Lake.",
    image: LucianImg,

    category: "Website Development",
    tags: [],
    demoUrl: "https://lucianbungalow.com/",
    githubUrl: "",
    date: "2025-05-14",
    client: "Ruhunu Trust & Credit (Pvt) Ltd",
  },

  // Photography

  {
    id: 9,
    title: "In frame - Chathu Rathnayaka",
    description:
      "A heartfelt photo session capturing the pride, resilience, and achievement of newly graduated nurses. This shoot blends elegance with emotion—featuring crisp white uniforms, graduation gowns, stethoscopes, and natural smiles that reflect years of hard work and compassion. Set in serene outdoor backdrops or clean studio light, every frame tells a story of dedication, care, and a future ready to heal the world.",
    image:
      "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/504177350_705067985229125_4891690034899797545_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECztu7o2fCQwcKrrXMBc_NxMXhP9LB2J3ExeE_0sHYnWfiLV6kvU7vS_RjYqoaLSmQ4KJ8oB_r6x5JfvFyMo2v&_nc_ohc=b7c3JXQylO4Q7kNvwEgITBG&_nc_oc=AdnOlIXPZY9z0vNx2SEhLOfT7Lhidi7Q8EvFO4xpqMIwxZ1FbRvUQnB3aS-DJ2Ir6-wYhRYt10v9RnurQgWDv6EU&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=4SKegBkktg-HpPMzE0zTJw&oh=00_AfTNZGrUJOLyLLrazr0SQ4Hl4y7ZmgvUWBNrdkaGSEdLCw&oe=688AFE56",
    category: "Photography and Videography",
    tags: ["Photography", "Product Shots", "Editing", "Commercial"],
    demoUrl: "https://www.facebook.com/share/p/19kcr2aXgB/",
    githubUrl: "",
    date: "2025-06-05",
    client: "Chathu Rathnayaka",
  },
  {
    id: 10,
    title: "In Frame - Umesha Sidangana  Birth Day",
    description:
      "A joyful and elegant birthday shoot capturing the personality and celebration of Umesha Sidangana’s special day. This session blends candid smiles, posed portraits, and detail shots of décor, cake, and style—framed with natural lighting and soft tones to create timeless memories full of charm and warmth.",
    image:
      "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481947696_1226802818868380_250123787957236774_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG9h5OZadq_vO7adzyVzPMxphMJIGX_MW2mEwkgZf8xbUgwne6ypNyRlI0LtKx0Vh_zHqQxa9WV8FjWWFnbVeLN&_nc_ohc=e-Rakh61thQQ7kNvwGIrxMh&_nc_oc=AdnDbMuvGMF6V4jnZHuFsCIx_hnfxQtCPaaCkT49I1kguaUtV3N8RkdRGv52pSyt_fq0EpvPMAvrXVfrWwxpopaE&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=4Kt5l_1D-uvjfAZDp1rjww&oh=00_AfTRMWTRXIOomhvCQddbdVCFopuTm72Q8_NX3K4R0XvbVw&oe=688B167C",
    category: "Photography and Videography",
    tags: ["Photography", "Product Shots", "Editing", "Commercial"],
    demoUrl: "https://www.facebook.com/share/p/1LcUjMXycg/",
    githubUrl: "",
    date: "2025-01-01",
    client: "Umesha Sidangana",
  },
  {
    id: 11,
    title: "Wes Mangalya Video Shoot",
    description:
      "A vibrant and cinematic video production capturing the elegance and rhythm of the Wes Mangalya, a traditional Sri Lankan dance ceremony performed during weddings. This shoot highlights graceful Kandyan dance movements, cultural attire, ceremonial drumming, and the spiritual energy that honors heritage, blessings, and unity. Shot with dynamic angles, slow-motion, and storytelling flow to reflect both the cultural depth and joyous celebration.",
    image:
      "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/487511216_590498024010094_1893953343173234933_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF_zWOpXhEKBtdcoc_5dym1niTgDsyuHQqeJOAOzK4dCn6ouEHME-_lEf_bHsU9ZSmFInOFMmZo6zCi2quF3gvU&_nc_ohc=FdjeLX2ed8UQ7kNvwFaVuOh&_nc_oc=Adlrow41HNMOdwle_wX40NV2CXxrylkCVH3trprUvSoe6Vh8x8Gdxw-QRry_XS4_lneljddd_OOey5D7_QhZxfrv&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=TZm38OjMI7WU_zIHlazIYA&oh=00_AfSUKltYvXYYgz9Z4GalDXVnwZVOEBAyIxBnrRrq-qOxiA&oe=688ADD38",
    category: "Photography and Videography",
    tags: [
      "Photography",
      "Cinematography",
      "Videography",
      "Editing",
      "Commercial",
    ],
    demoUrl: "https://www.facebook.com/share/v/1ByQBipFfV/",
    githubUrl: "",
    date: "2025-02-25",
    client: "Kumbukgete Central College",
  },
  {
    id: 12,
    title: "Couple Pre-Shoot – Love in Every Frame",
    description:
      "A dreamy outdoor pre-shoot capturing the chemistry, laughter, and tender moments of a couple before their big day. With a blend of candid poses, natural lighting, and scenic backdrops, this session tells a heartfelt visual story of love, connection, and new beginnings—framed with elegance and emotion.",
    image:
      "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/470216409_122096671952696103_6341353054595559678_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGlEGEL8t83ifZ3mD84c3uDWBjebRWosnlYGN5tFaiyeU6IYw6STuFujn4b-wTlWzumWLCLlXlQ4jdZ8pexvdLG&_nc_ohc=DugGuHQMOSsQ7kNvwEU3lF9&_nc_oc=Adk2InuQxG94idE9nT_Gc2hNvKxMNd3qUPCzv6xdjxl7KCB-cnFIQNv5BNUZg1GwajQZs4y-C3tsNVkAGsJdHZP9&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=c8BLKv6OtzaOyA20PDvv8A&oh=00_AfQyYGfFp-4_W-u9euzS3IEbQD9sVgcIhJuw9PG3Uo0_iw&oe=688AEF78",
    category: "Photography and Videography",
    tags: [
      "Photography",
      "Cinematography",
      "Videography",
      "Editing",
      "Commercial",
    ],
    demoUrl: "https://www.facebook.com/share/v/1C1rfXNwdd/",
    githubUrl: "",
    date: "2025-02-25",
    client: "Mr.Ravindu Bandara and Ms. Semini Sashiprapbha ",
  },
  {
    id: 13,
    title: "LandCruiser – Speed Ramp Cinematic Clip",
    description:
      "A high-intensity automotive video capturing the raw power and elegance of the Toyota LandCruiser in motion. Featuring dramatic speed ramping, cinematic angles, and dynamic sound design, this shoot highlights the vehicle's strength, control, and presence—ideal for commercial use, brand promotion, or social media campaigns.",
    image:
      "https://i.pinimg.com/736x/3e/46/db/3e46db1b1df92c5b89042df3df59c0f8.jpg",
    category: "Photography and Videography",
    tags: [
      "Photography",
      "Cinematography",
      "Videography",
      "Editing",
      "Commercial",
    ],
    demoUrl:
      "https://drive.google.com/file/d/1RAdjRyvslAMulRib_-smR48G4ObNDeRO/view?usp=drivesdk",
    githubUrl: "",
    date: "2024-08-25",
    client: "Mr.Malshan Maduranga",
  },
  {
    id: 14,
    title: "Couple Pre-Shoot – Photography",
    description:
      "A romantic photography session celebrating the bond between two souls ahead of their wedding day. Blending natural light, candid expressions, and scenic settings, this shoot beautifully frames the joy, intimacy, and anticipation of their journey together. Every photo is a lasting memory crafted with emotion and style.",
    image:
      "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/470229579_122096673098696103_6183628911443746534_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeECsqlCw2pm3ZvGLM4wsn5EHimKjarwu9EeKYqNqvC70fDAagP77L_l1eWtO6CCWqHmcGbJZxnByaZXiB61Eoc8&_nc_ohc=ol99KIRdC8kQ7kNvwGAyplo&_nc_oc=Admf-UrTZ5NbD49QE-T-soJ5R6-3KJzMMv1Lo1TqEqQ7IztEoY_K7H9WB3Rpt8bkAYRO6JNPzRpyc9ohGf9_7igC&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=npzucgFifYv974TgAIliCQ&oh=00_AfQQx-5w6PtsAzWsuA8vJt39UHB8KTjwq9qQMKMwDUjslg&oe=688B06B6",
    category: "Photography and Videography",
    tags: ["Photography", "Product Shots", "Editing", "Commercial"],
    demoUrl: "https://www.facebook.com/share/p/16krrAUwr7/",
    githubUrl: "",
    date: "2025-06-05",
    client: "Lumeo Creations",
  },

  // AI Video Creation

  //
  {
    id: 15,
    title: "Diagnostic Lab Promo – AI-Generated Medical Video",
    description:
      "A modern, AI-generated promotional video crafted to build trust and awareness for a diagnostic laboratory. Featuring realistic visuals, professional narration, and informative content, the video highlights lab services, test reliability, and health benefits—delivered with a clean, medical-grade aesthetic perfect for digital marketing, clinics, and social media outreach.",
    image: DigasiriImg,
    category: "AI Video Creations",
    tags: ["AI", "Video Generation", "Marketing", "Automation"],
    demoUrl: "https://www.facebook.com/share/v/1EC9Co1n1G/",
    githubUrl: "",
    date: "2025-07-19",
    client: "Digasiri Lab & Healthcare Pvt. Ltd ",
  },

  // Digital Marketing

  {
    id: 4,
    title: "Vacanza in Ceylon – Digital Marketing Campaign",
    description:
      "A strategic digital marketing initiative designed to attract European travelers to Sri Lanka through targeted content, SEO, and social media engagement. The campaign highlights cultural tours, luxury stays, and authentic local experiences—driven by creative storytelling, performance tracking, and high-conversion design across platforms.",
    image:
      "https://www.pngitem.com/pimgs/m/510-5109369_digital-marketing-company-digital-marketing-banner-png-transparent.png",
    category: "Digital Marketing",
    tags: ["Facebook Ads", "Instagram", "Analytics", "Automation"],
    demoUrl: "https://www.facebook.com/profile.php?id=61573583293914",

    date: "2025-01-01",
    client: "Vacanza in Ceylon",
  },
  {
    id: 4,
    title: "Flare Up Clothing – Digital Marketing Campaign",
    description:
      "A bold and trend-driven digital marketing campaign created to boost brand visibility and sales for Flare Up Clothing. Focused on youth fashion and streetwear culture, the strategy combined social media ads, influencer collaborations, and targeted content creation to amplify reach, drive engagement, and elevate the brand’s online identity.",
    image:
      "https://www.pngitem.com/pimgs/m/510-5109369_digital-marketing-company-digital-marketing-banner-png-transparent.png",
    category: "Digital Marketing",
    tags: ["Facebook Ads", "Instagram", "Analytics", "Automation"],
    demoUrl: "https://www.facebook.com/profile.php?id=61569447028349",

    date: "2024-10-05",
    client: "Flare Up Clothing",
  },

  // SEO Development
  // {
  //   id: 3,
  //   title: "SEO Analytics Dashboard",
  //   description:
  //     "Comprehensive SEO tracking and analytics platform with keyword monitoring and ranking analysis.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  //   category: "SEO Development",
  //   tags: ["React", "Python", "Google Analytics", "SEMrush API"],
  //   demoUrl: "https://demo-seo.com",
  //   githubUrl: "https://github.com/example/seo-dashboard",
  //   date: "2024-01-10",
  //   client: "Digital Agency",
  // },

  // Email Marketing
  // {
  //   id: 5,
  //   title: "Email Automation System",
  //   description:
  //     "Advanced email marketing automation with personalization and A/B testing capabilities.",
  //   image:
  //     "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
  //   category: "Email Marketing",
  //   tags: ["Mailchimp", "Automation", "Analytics", "Personalization"],
  //   demoUrl: "https://demo-email.com",
  //   githubUrl: "#",
  //   date: "2024-02-15",
  //   client: "E-commerce Store",
  // },

  // Event Planning
  // {
  //   id: 6,
  //   title: "Event Management Platform",
  //   description:
  //     "Complete event planning and management system with booking, payments, and attendee tracking.",
  //   image:
  //     "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
  //   category: "Event Planning",
  //   tags: ["Event Management", "Booking System", "Payments", "CRM"],
  //   demoUrl: "https://demo-events.com",
  //   githubUrl: "https://github.com/example/events",
  //   date: "2024-01-25",
  //   client: "Event Company",
  // },

  // Software Development
  // {
  //   id: 7,
  //   title: "Mobile Banking App",
  //   description:
  //     "Secure mobile banking application with biometric authentication and real-time transactions.",
  //   image:
  //     "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  //   category: "Software And Mobile Application Development",
  //   tags: ["React Native", "Node.js", "MongoDB", "Security"],
  //   demoUrl: "https://demo-banking.com",
  //   githubUrl: "https://github.com/example/banking-app",
  //   date: "2024-03-10",
  //   client: "Financial Institution",
  // },

  // Business Consultant
  // {
  //   id: 8,
  //   title: "Business Strategy Report",
  //   description:
  //     "Comprehensive business analysis and strategic planning consultation for market expansion.",
  //   image:
  //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  //   category: "Business Consultant",
  //   tags: ["Strategy", "Analysis", "Planning", "Consulting"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   date: "2024-02-28",
  //   client: "Startup Company",
  // },

  // Content Writing
  // {
  //   id: 10,
  //   title: "Blog Content Strategy",
  //   description:
  //     "Comprehensive content writing and SEO optimization for increased organic traffic and engagement.",
  //   image:
  //     "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
  //   category: "Content Writing",
  //   tags: ["SEO Writing", "Blog Posts", "Content Strategy", "Research"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   date: "2024-02-10",
  //   client: "Tech Blog",
  // },

  // Logo Design
  // {
  //   id: 12,
  //   title: "Brand Identity Package",
  //   description:
  //     "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
  //   image:
  //     "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  //   category: "Logo Design",
  //   tags: ["Branding", "Logo Design", "Identity", "Guidelines"],
  //   demoUrl: "https://demo-branding.com",
  //   githubUrl: "#",
  //   date: "2024-01-30",
  //   client: "Startup Brand",
  // },
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
                      {project.githubUrl && project.githubUrl !== "#" && (
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
