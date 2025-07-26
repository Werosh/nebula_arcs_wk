import { Menu, X, ChevronRight, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoImg from "../../public/logo.png";
import {
  House,
  BadgeInfo,
  BriefcaseBusiness,
  FolderOpenDot,
  Contact,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero", icon: <House /> },
  { name: "About", href: "#about", icon: <BadgeInfo /> },
  { name: "Services ", href: "#packages", icon: <BriefcaseBusiness /> },
  { name: "Projects", href: "#projects", icon: <FolderOpenDot /> },
  { name: "Contact", href: "#contact", icon: <Contact /> },
];

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Floating particle component
const FloatingParticle = ({ delay = 0 }) => (
  <div
    className="absolute w-1 h-1 bg-[#043b4f] rounded-full opacity-60 animate-pulse"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }}
  />
);
export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);
      const scrollPosition = scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(navItems[i]?.href || "#hero");
          break;
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }
    }
  };

  return (
    <>
      {/* Ambient background effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-[#043b4f]/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            opacity: isHovering ? 0.8 : 0.3,
          }}
        />
      </div>

      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "py-2 bg-white/5 backdrop-blur-2xl border-b border-[#043b4f]/20 shadow-2xl shadow-[#043b4f]/10"
            : "py-4 bg-transparent"
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.5} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="group relative z-10 flex items-center space-x-3 p-2 rounded-2xl transition-all duration-500 "
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#043b4f] via-blue-500 to-teal-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>

                {/* Logo image container */}
                <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={LogoImg}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="relative bg-gradient-to-r from-[#043b4f] via-blue-600 to-teal-500 bg-clip-text text-transparent text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-none">
                  NEBULA ARCS
                </div>
              </div>
            </button>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/10">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full group overflow-hidden",
                    activeItem === item.href
                      ? "text-white bg-[#043b4f] shadow-lg shadow-[#043b4f]/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {/* Background animations */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-[#043b4f] via-blue-500 to-teal-400 transition-all duration-500",
                      activeItem === item.href
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 group-hover:opacity-20 group-hover:scale-100"
                    )}
                  />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </span>

                  {/* Active indicator dot */}
                  {activeItem === item.href && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden relative z-50 p-4 rounded-2xl transition-all duration-500 border border-white/10",
                isMenuOpen
                  ? "bg-[#043b4f] text-white shadow-lg shadow-[#043b4f]/30"
                  : "bg-white/5 backdrop-blur-xl text-gray-300 hover:text-white hover:bg-white/10"
              )}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    isMenuOpen
                      ? "opacity-0 rotate-180 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                  )}
                />
                <X
                  size={24}
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    isMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-180 scale-50"
                  )}
                />
              </div>

              {/* Button pulse effect */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-[#043b4f] opacity-0 animate-ping",
                  isMenuOpen && "opacity-20"
                )}
              />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#043b4f] via-blue-500 to-teal-400 transition-all duration-300"
          style={{
            width: `${
              (window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)) *
              100
            }%`,
          }}
        />
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-700 ease-out",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Enhanced Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur-2xl transition-all duration-700",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-[#043b4f] rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Menu Panel */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-80 max-w-[85vw] transition-all duration-700 ease-out",
            "bg-gradient-to-b from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl",
            "border-l border-[#043b4f]/30 shadow-2xl shadow-[#043b4f]/20",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Panel glow effect */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-40 h-96 bg-[#043b4f]/10 blur-3xl rounded-full" />

          <div className="relative flex flex-col h-full pt-24 px-6">
            {/* Menu header */}
            <div className="mb-8 text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#043b4f] via-blue-500 to-teal-400 bg-clip-text text-transparent mb-2">
                Navigation
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#043b4f] to-teal-400 mx-auto rounded-full" />
            </div>

            {/* Enhanced Navigation Items */}
            <div className="flex-1 space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "group w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-500 rounded-2xl relative overflow-hidden",
                    activeItem === item.href
                      ? "text-white bg-gradient-to-r from-[#043b4f]/30 via-blue-500/20 to-teal-400/30 border border-[#043b4f]/40 shadow-lg shadow-[#043b4f]/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                  )}
                  style={{
                    animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    transform: isMenuOpen
                      ? "translateX(0)"
                      : "translateX(40px)",
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${
                      index * 100
                    }ms`,
                  }}
                >
                  {/* Item background effect */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-[#043b4f]/20 via-blue-500/10 to-teal-400/20 transition-opacity duration-300",
                      activeItem === item.href
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    )}
                  />

                  <div className="relative z-10 flex items-center space-x-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">{item.name}</span>
                      <span className="text-xs text-gray-400">
                        Navigate to {item.name.toLowerCase()}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    size={20}
                    className={cn(
                      "relative z-10 transition-all duration-300",
                      activeItem === item.href
                        ? "text-[#043b4f] transform rotate-90"
                        : "text-gray-500 group-hover:text-white group-hover:translate-x-2"
                    )}
                  />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              ))}
            </div>

            {/* Enhanced CTA Section - Mobile */}
            <div className="pb-8 pt-6 border-t border-white/10">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full relative px-8 py-5 bg-gradient-to-r from-[#043b4f] via-blue-600 to-teal-500 text-white font-bold rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-[#043b4f]/30 group overflow-hidden border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-600 to-[#043b4f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <Zap className="w-5 h-5" />
                  <span className="text-lg">Get Started</span>
                </span>

                {/* Button glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#043b4f] via-blue-500 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              </button>

              <div className="mt-4 text-center text-sm text-gray-400">
                Ready to start your project?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
