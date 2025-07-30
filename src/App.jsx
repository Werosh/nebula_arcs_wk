import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import { Toaster } from "@/components/ui/toaster";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { ScrollToTop } from "./components/ScrollToTop";
import ProjectPage from "./pages/ProjectPage";
import TeamPage from "./pages/Team";
import PrivacyPolicy from "./commonPages/PrivacyPolocy";
import TermsOfService from "./commonPages/TermsOfService";
import QualityPolicy from "./commonPages/quality-policy";
// Scroll to element by hash (e.g., #about)
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Delay to ensure the DOM is updated
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToHashElement />
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/team" element={<TeamPage />} />

            {/* Footer Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/term-of-services" element={<TermsOfService />} />
            <Route path="/quality-policy" element={<QualityPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
