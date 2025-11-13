import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Suspense, lazy, useState } from 'react';
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
        href="/Zenvic_1/" 
        className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-full font-[var(--font-family-body)] text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export default function App() {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  return (
    <Router basename="/Zenvic_1">
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
        
        {/* WhatsApp Icon with Popup */}
        <div 
          className="fixed bottom-6 right-24 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 cursor-pointer"
          onMouseEnter={() => setShowWhatsAppPopup(true)}
          onMouseLeave={() => setShowWhatsAppPopup(false)}
          onClick={() => window.open('https://wa.me/919480467250', '_blank')}
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
          </svg>
        </div>
        
        {/* WhatsApp Popup */}
        {showWhatsAppPopup && (
          <div 
            className="fixed bottom-24 right-24 bg-white p-4 rounded-lg shadow-lg z-50 border border-gray-200"
            onMouseEnter={() => setShowWhatsAppPopup(true)}
            onMouseLeave={() => setShowWhatsAppPopup(false)}
          >
            <p className="text-charcoal font-medium">Chat with us on WhatsApp</p>
            <p className="text-charcoal/70 text-sm">+91 9480467250</p>
          </div>
        )}
        
        {/* Combined Call Button with Popup */}
        <div 
          className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--accent-color)] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--accent2-color)] transition-all duration-300 transform hover:scale-110 z-50 cursor-pointer"
          onMouseEnter={() => setShowCallPopup(true)}
          onMouseLeave={() => setShowCallPopup(false)}
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>
        
        {/* Call Popup */}
        {showCallPopup && (
          <div 
            className="fixed bottom-24 right-6 bg-white p-4 rounded-lg shadow-lg z-50 border border-gray-200"
            onMouseEnter={() => setShowCallPopup(true)}
            onMouseLeave={() => setShowCallPopup(false)}
          >
            <p className="text-charcoal font-medium">Call us now</p>
            <p className="text-charcoal/70 text-sm">+91 9480467250</p>
            <p className="text-charcoal/70 text-sm">+91 8147026577</p>
          </div>
        )}
      </div>
    </Router>
  );
}