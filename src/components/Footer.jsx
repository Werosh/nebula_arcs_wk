import {
  ArrowUp,
  Heart,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { useState, useEffect } from "react";

import LogoImg from "../../public/logo.png";
import { a, div } from "motion/react-client";

// Utility function for conditional classes
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const socialLinks = [
  { icon: Github, href: "https://github.com/nebulaarcs", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/nebulaarcs",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/nebulaarcs", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/nebulaarcs",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://web.facebook.com/people/Nebula-Arcs/61578835523898/",
    label: "Facebook",
  },
];

const quickLinks = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
  { name: "Cookie Policy", href: "#cookies" },
  { name: "Support", href: "https://support.nebulaarcs.com" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Website Development", href: "/services" },
  { name: "SEO Development", href: "/services" },
  { name: "Digital Marketing", href: "/services" },
  { name: "Email Marketing", href: "/services" },
  { name: "Event Planning", href: "/services" },
  { name: "More...", href: "/services" },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (footerElement) observer.unobserve(footerElement);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("http")) {
      // External links - open in new tab
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      // Internal routes - navigate normally
      window.location.href = href;
    }
  };

  const handleSocialClick = (href) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Scroll to top button - Fixed position */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50 p-4 rounded-2xl transition-all duration-500 group",
          "bg-gradient-to-r from-[#043b4f]  to-transparent",
          "hover:shadow-xl hover:shadow-[#043b4f]/30 hover:scale-110",
          "border border-white/20 backdrop-blur-xl",
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="text-white group-hover:animate-bounce" />

        {/* Button glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#043b4f]  to-transparent rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300 -z-10" />
      </button>

      <footer className="relative bg-gradient-to-b from-transparent via-gray-800 to-black border-t  overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#043b4f]/5 via-transparent to-teal-500/5" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#043b4f]/10 rounded-full blur-3xl" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#043b4f] rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company info */}
              <div
                className={cn(
                  "space-y-6 transition-all duration-700",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <div className="group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative w-12 h-12  rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={LogoImg}
                        alt="Logo"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-bold bg-gradient-to-r from-[#043b4f] via-blue-500 to-teal-400 bg-clip-text text-transparent">
                        NEBULA ARCS
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        CREATIVE STUDIO
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Arcing Innovation Across the Digital Universe
                </p>

                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} className="text-[#043b4f]" />
                    <span>123 Innovation Street, Tech City</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-[#043b4f]" />
                    <span>hello@nebulaarcs.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-[#043b4f]" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div
                className={cn(
                  "space-y-6 transition-all duration-700 delay-150",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <h3 className="text-lg font-semibold text-white mb-6 relative">
                  Services
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#043b4f] to-teal-400 rounded-full" />
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(service.href)}
                      className="block text-gray-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 group"
                    >
                      <span className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-[#043b4f] rounded-full group-hover:bg-teal-400 transition-colors duration-300" />
                        <span>{service.name}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div
                className={cn(
                  "space-y-6 transition-all duration-700 delay-300",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <h3 className="text-lg font-semibold text-white mb-6 relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#043b4f] to-teal-400 rounded-full" />
                </h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(link.href)}
                      className="block text-gray-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 group"
                    >
                      <span className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-[#043b4f] rounded-full group-hover:bg-teal-400 transition-colors duration-300" />
                        <span>{link.name}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Social  */}
              <div
                className={cn(
                  "space-y-6 transition-all duration-700 delay-450",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <h3 className="text-lg font-semibold text-white mb-6 relative">
                  Connect With Us
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#043b4f] to-teal-400 rounded-full" />
                </h3>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleSocialClick(social.href)}
                        className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-[#043b4f]/20 hover:border-[#043b4f]/30 transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div
            className={cn(
              "py-8 border-t border-white/10 transition-all duration-700 delay-600",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>
                  &copy; {new Date().getFullYear()} Nebula Arcs (PVT) Ltd. All
                  rights reserved.
                </span>
              </div>
              <div>
                <span className="text-gray-500">Made with</span>
                <Heart className="inline-block w-4 h-4 text-red-500 mx-1" />
                <span className="text-gray-500">by Nebula Arcs</span>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>All systems operational</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#043b4f] via-blue-500 to-teal-400" />
      </footer>
    </>
  );
}
