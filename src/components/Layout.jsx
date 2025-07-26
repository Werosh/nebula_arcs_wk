// src/components/Layout.jsx
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "./ThemeToggle";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
