import { Link } from 'react-router-dom';
import { useRevealOnIntersect } from '../hooks';

export default function Services() {
  const { elementRef: servicesGridRef, isVisible: isServicesGridVisible } = useRevealOnIntersect();
  const { elementRef: processRef, isVisible: isProcessVisible } = useRevealOnIntersect();

  const services = [
    {
      title: "Wedding Planning",
      description: "Complete wedding planning services from intimate ceremonies to grand celebrations",
      features: ["Full-service planning", "Day-of coordination", "Vendor management", "Timeline creation"],
      image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e2d910de-c8a6-4d0b-234f-01dcc452d200/public",
      price: "₹50,000"
    },
    {
      title: "Corporate Events",
      description: "Professional corporate event planning that reflects your brand and impresses clients",
      features: ["Brand integration", "Venue selection", "Catering coordination", "AV management"],
      image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a293ae01-f628-4e90-e594-cc226f2f4f00/public",
      price: "₹30,000"
    },
    {
      title: "Floral Design",
      description: "Exquisite floral arrangements that transform spaces and create lasting impressions",
      features: ["Bridal bouquets", "Centerpieces", "Ceremony décor", "Reception arrangements"],
      image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1b225c73-13d3-435f-9d02-4f687a8f2c00/public",
      price: "₹15,000"
    },
    {
      title: "Venue Styling",
      description: "Complete venue transformation with lighting, décor, and atmospheric design",
      features: ["Lighting design", "Furniture rental", "Décor installation", "Space planning"],
      image: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/31374c7a-0f45-452f-bac1-3a96fcc8df00/public",
      price: "₹25,000"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed consultation to understand your vision, preferences, and budget."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team creates a comprehensive design concept with mood boards and detailed proposals."
    },
    {
      step: "03",
      title: "Planning & Coordination",
      description: "We handle all vendor coordination, timeline management, and logistical planning."
    },
    {
      step: "04",
      title: "Event Execution",
      description: "On your special day, we ensure flawless execution of every planned detail."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-8 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
            Comprehensive event planning and design services tailored to your unique vision
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        ref={servicesGridRef}
        className={`py-24 px-6 bg-ivory transition-all duration-1000 ${
          isServicesGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-700">
                  <strong>Building Our Empire:</strong> We're currently focused on perfecting our premium floral handbags and bouquets. Other services will be available soon as we expand our offerings. Thank you for your patience as we grow!
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="font-serif text-3xl font-medium text-charcoal mb-4">{service.title}</h3>
                  <p className="text-charcoal/70 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-charcoal/80">
                        <svg className="w-4 h-4 text-muted-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-green font-medium text-lg">{service.price}</span>
                    <div className="text-center">
                      <span className="bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-[var(--font-family-body)] text-sm font-semibold">
                        Coming Soon
                      </span>
                      <p className="text-xs text-gray-500 mt-1">Currently building our expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        className={`py-24 px-6 bg-cream transition-all duration-1000 ${
          isProcessVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Our Process
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              A seamless journey from initial concept to flawless execution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted-green text-cream rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-xl font-medium">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-4">{step.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-cream mb-6 leading-tight">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-cream/80 mb-10 leading-relaxed">
            Let's discuss your vision and create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/consultation"
              className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-10 py-4 rounded-lg text-lg font-medium hover:bg-muted-green/90 transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-cream text-cream px-10 py-4 rounded-lg text-lg font-medium hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}