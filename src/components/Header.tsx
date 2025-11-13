import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from './CloseIcon';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200/20">
      <div className="flex items-center justify-between h-32 px-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b689dec5-6132-4ac5-b25f-6d0d59c9f400/public" 
            alt="The Art of Beauty Logo" 
            className="h-28 py-2" 
            data-logo=""
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/about" 
            className="text-[var(--dark-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300 font-[var(--font-family-body)] text-sm tracking-wide"
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className="text-[var(--dark-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300 font-[var(--font-family-body)] text-sm tracking-wide"
          >
            Services
          </Link>
          <Link 
            to="/gallery" 
            className="text-[var(--dark-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300 font-[var(--font-family-body)] text-sm tracking-wide"
          >
            Gallery
          </Link>
          <Link 
            to="/testimonials" 
            className="text-[var(--dark-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300 font-[var(--font-family-body)] text-sm tracking-wide"
          >
            Testimonials
          </Link>
          <Link 
            to="/consultation"
            className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-full font-[var(--font-family-body)] text-sm font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Your Dream Event
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          data-landingsite-mobile-menu-toggle="" 
          className="lg:hidden text-[var(--dark-text-color)] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <svg className="w-6 h-6 text-[var(--dark-text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="absolute top-full left-0 right-0 bg-white border-b border-gray-200/20 lg:hidden">
            <nav className="flex flex-col p-6 space-y-4">
              <Link 
                to="/about" 
                className="text-[var(--dark-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300 font-[var(--font-family-body)] text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-[var(--dark-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300 font-[var(--font-family-body)] text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className="text-[var(--dark-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300 font-[var(--font-family-body)] text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/testimonials" 
                className="text-[var(--dark-text-color)] hover:text-[var(--accent-color)] transition-colors duration-300 font-[var(--font-family-body)] text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/consultation" 
                className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-full font-[var(--font-family-body)] text-sm font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Your Dream Event
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}