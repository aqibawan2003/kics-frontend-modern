import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopBtn, { ScrollReset } from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';

import Home          from './pages/Home';
import About         from './pages/About';
import DirectorMessage from './pages/DirectorMessage';
import Staff         from './pages/Staff';
import ResearchAreas from './pages/ResearchAreas';
import Conferences   from './pages/Conferences';
import Workshops     from './pages/Workshops';
import ICOSST        from './pages/ICOSST';
import Jobs          from './pages/Jobs';
import Contact       from './pages/Contact';
import Services      from './pages/Services';
import News          from './pages/News';
import Publications  from './pages/Publications';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <p className="text-7xl font-heading font-bold text-navy/10 mb-4">404</p>
        <h1 className="text-2xl font-heading font-bold text-navy mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-navy inline-flex">Go Home</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <ScrollProgress />
      <ScrollReset />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Offset for fixed navbar */}
        <main className="flex-1 pt-[88px]">
          <Routes>
            <Route path="/"                  element={<Home />} />
            <Route path="/about"             element={<About />} />
            <Route path="/director-message"  element={<DirectorMessage />} />
            <Route path="/staff"             element={<Staff />} />
            <Route path="/research-areas"    element={<ResearchAreas />} />
            <Route path="/publications"      element={<Publications />} />
            <Route path="/conferences"       element={<Conferences />} />
            <Route path="/workshops"         element={<Workshops />} />
            <Route path="/icosst"            element={<ICOSST />} />
            <Route path="/jobs"              element={<Jobs />} />
            <Route path="/contact"           element={<Contact />} />
            <Route path="/services"          element={<Services />} />
            <Route path="/news"              element={<News />} />
            <Route path="*"                  element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopBtn />
      </div>
    </BrowserRouter>
  );
}
