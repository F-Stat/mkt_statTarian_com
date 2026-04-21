import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { SiteNav } from "./components/marketing/nav/SiteNav";
import { SiteFooter } from "./components/marketing/footer/SiteFooter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { Features } from "./pages/features/Features";
import { Pricing } from "./pages/pricing/Pricing";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Privacy } from "./pages/legal/Privacy";
import { Terms } from "./pages/legal/Terms";
import { DataProcessing } from "./pages/legal/DataProcessing";
import { Promise } from "./pages/promise/Promise";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col dark">
        <ScrollToTop />
        <SiteNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal pages */}
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/data-processing" element={<DataProcessing />} />
          <Route path="/legal/DataProcessing" element={<Navigate to="/legal/data-processing" replace />} />

          {/* Promise page */}
          <Route path="/promise" element={<Promise />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
