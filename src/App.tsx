import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LegalServices from './pages/LegalServices';
import LegalServiceDetail from './pages/LegalServiceDetail';
import BusinessAdvisory from './pages/BusinessAdvisory';
import BusinessAdvisoryDetail from './pages/BusinessAdvisoryDetail';
import People from './pages/People';
import Briefs from './pages/Briefs';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Partners from './pages/Partners';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal-services" element={<LegalServices />} />
            <Route path="/legal-services/:id" element={<LegalServiceDetail />} />
            <Route path="/business-advisory" element={<BusinessAdvisory />} />
            <Route path="/business-advisory/:id" element={<BusinessAdvisoryDetail />} />
            <Route path="/people" element={<People />} />
            <Route path="/briefs" element={<Briefs />} />
            <Route path="/briefs/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
