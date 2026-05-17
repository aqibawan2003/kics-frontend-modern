import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopBtn, { ScrollReset } from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ErrorBoundary from './components/ErrorBoundary';

const Home          = lazy(() => import('./pages/Home'));
const About         = lazy(() => import('./pages/About'));
const DirectorMessage = lazy(() => import('./pages/DirectorMessage'));
const Staff         = lazy(() => import('./pages/Staff'));
const ResearchAreas = lazy(() => import('./pages/ResearchAreas'));
const Publications  = lazy(() => import('./pages/Publications'));
const Conferences   = lazy(() => import('./pages/Conferences'));
const Workshops     = lazy(() => import('./pages/Workshops'));
const ICOSST        = lazy(() => import('./pages/ICOSST'));
const Jobs          = lazy(() => import('./pages/Jobs'));
const Contact       = lazy(() => import('./pages/Contact'));
const Services      = lazy(() => import('./pages/Services'));
const News          = lazy(() => import('./pages/News'));
const ERozgaar      = lazy(() => import('./pages/ERozgaar'));

function PageSpinner() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <p className="text-7xl font-bold text-slate-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-800 mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-6">The page you are looking for does not exist.</p>
        <a href="/" className="btn-primary inline-flex">Go Home</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <LoadingScreen />
        <ScrollProgress />
        <ScrollReset />
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <main className="flex-1 pt-[68px] lg:pt-[100px]">
            <Suspense fallback={<PageSpinner />}>
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
                <Route path="/e-rozgaar"         element={<ERozgaar />} />
                <Route path="*"                  element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ScrollToTopBtn />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
    </HelmetProvider>
  );
}
