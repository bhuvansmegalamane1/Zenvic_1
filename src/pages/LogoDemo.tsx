import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, CircularLogo } from '../components';

export default function LogoDemo() {
  return (
    <div className="min-h-screen bg-ivory py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-block mb-8 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-full font-[var(--font-family-body)] text-sm font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-serif font-light text-charcoal mb-2">Logo Components</h1>
        <p className="text-muted-green mb-12">Showcasing the new SVG logo components</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-warm-beige">
            <h2 className="text-2xl font-serif font-light text-charcoal mb-6">Primary Logo</h2>
            <div className="flex flex-col items-center space-y-6">
              <Logo className="w-64" />
              <div className="text-center">
                <p className="text-charcoal mb-2">Default Colors</p>
                <p className="text-sm text-muted-green">#1F2937 (primary) & #6366F1 (secondary)</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col items-center space-y-6">
              <Logo 
                primaryColor="#8B9A8C" 
                secondaryColor="#E8E2D5" 
                className="w-64" 
              />
              <div className="text-center">
                <p className="text-charcoal mb-2">Custom Colors</p>
                <p className="text-sm text-muted-green">#8B9A8C (primary) & #E8E2D5 (secondary)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-charcoal p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif font-light text-cream mb-6">Circular Logo</h2>
            <div className="flex flex-col items-center space-y-6">
              <CircularLogo className="w-48 h-48" />
              <div className="text-center">
                <p className="text-cream mb-2">Default Circular Logo</p>
                <p className="text-sm text-cream/80">Simple circular design with blue accent</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col items-center space-y-6">
              <CircularLogo className="w-32 h-32" />
              <div className="text-center">
                <p className="text-cream mb-2">Scaled Version</p>
                <p className="text-sm text-cream/80">Responsive sizing with className prop</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-warm-beige">
          <h2 className="text-2xl font-serif font-light text-charcoal mb-6">Usage Examples</h2>
          <div className="space-y-4">
            <div className="p-4 bg-cream rounded">
              <pre className="text-sm text-charcoal overflow-x-auto">
                {`// Default logo
<Logo />

// Custom colors
<Logo primaryColor="#8B9A8C" secondaryColor="#E8E2D5" />

// Custom size
<Logo className="w-32 h-8" />

// Circular logo
<CircularLogo className="w-16 h-16" />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}