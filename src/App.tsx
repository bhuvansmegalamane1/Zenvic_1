import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Consultation = lazy(() => import('./pages/Consultation'));
const Contact = lazy(() => import('./pages/Contact'));
const LogoDemo = lazy(() => import('./pages/LogoDemo'));

// Fallback component for lazy loading
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-muted-green"></div>
  </div>
);

// 404 Not Found component
const NotFound = () => (
  <div className="pt-32 pb-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-8 leading-tight">
        Page Not Found
      </h1>
      <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-12">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a 
        href="/" 
        className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-full font-[var(--font-family-body)] text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory overflow-x-hidden">
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logos" element={<LogoDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}