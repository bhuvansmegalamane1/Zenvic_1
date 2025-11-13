import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { toast } from 'sonner';

export default function Home() {
  const submitConsultation = useMutation(api.consultations.submitConsultation);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    city: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitConsultation(formData);
      toast.success("Thank you! We'll be in touch soon to discuss your special day.");
      setFormData({ name: "", email: "", eventDate: "", city: "", message: "" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };

  const services = [
    {
      title: "Wedding Décor",
      description: "Breathtaking floral arrangements that transform your special day into a fairy tale celebration."
    },
    {
      title: "Event Styling",
      description: "Complete event transformation with elegant floral designs for corporate and social gatherings."
    },
    {
      title: "Sustainable Design",
      description: "Eco-conscious floral arrangements using locally sourced, seasonal flowers and sustainable practices."
    },
    {
      title: "Venue Partnerships",
      description: "Collaborative relationships with premium venues to create seamless, stunning event experiences."
    },
    {
      title: "Flower Walls",
      description: "Instagram-worthy floral backdrops that create memorable photo opportunities for your guests."
    },
    {
      title: "Luxury Installations",
      description: "Grand-scale floral installations that serve as breathtaking centerpieces for your celebration."
    }
  ];

  const portfolioItems = [
    {
      title: "Romantic Garden Wedding",
      description: "Ethereal white and blush arrangements",
      url: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e2d910de-c8a6-4d0b-234f-01dcc452d200/public",
      alt: "Elegant wedding arch with romantic floral arrangements"
    },
    {
      title: "Vintage Elegance",
      description: "Rustic charm meets sophisticated design",
      url: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1b225c73-13d3-435f-9d02-4f687a8f2c00/public",
      alt: "Rustic wedding table setting with vintage charm"
    },
    {
      title: "Modern Luxury",
      description: "Contemporary designs with premium blooms",
      url: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a2c1ccb4-94df-4de7-5868-868180e50300/public",
      alt: "Elegant neutral wedding tablescape"
    },
    {
      title: "Candlelit Romance",
      description: "Intimate ambiance with warm lighting",
      url: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/266e8d98-8812-4384-986d-016580980f00/public",
      alt: "Intimate candlelit dinner table"
    },
    {
      title: "Garden Paradise",
      description: "Natural outdoor celebration styling",
      url: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7a2477b1-fd04-4eca-c2fc-4511290cfb00/publicContain",
      alt: "Beautiful outdoor garden reception"
    },
    {
      title: "Boho Chic",
      description: "Free-spirited designs with natural textures",
      url: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e3c064ea-5d38-41a2-9d56-d3f6796a3c00/public",
      alt: "Modern boho summer event styling"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e2d910de-c8a6-4d0b-234f-01dcc452d200/public" 
            alt="Elegant wedding arch with romantic floral arrangements creating a dreamy ceremony backdrop"
            className="w-full h-full object-cover brightness-90 contrast-90 saturate-120 hue-rotate-340"
          />
          {/* Transparent overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Twinkling Stars Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white/80 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/5 left-1/4 w-1 h-1 bg-white/70 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-white/90 rounded-full animate-ping" style={{ animationDuration: '3.5s' }}></div>
          <div className="absolute bottom-2/5 left-2/3 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-white/70 rounded-full animate-ping" style={{ animationDuration: '4.5s' }}></div>
          <div className="absolute bottom-1/5 left-1/5 w-1 h-1 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl font-light text-cream mb-8 drop-shadow-lg leading-tight">
            The Art of Beautiful
            <span className="block font-normal">Moments</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Premium floral décor and event styling that transforms your celebrations into unforgettable experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              to="/consultation"
              className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-12 py-4 rounded-full text-lg font-[var(--font-family-body)] font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Your Dream Décor
            </Link>
            <Link 
              to="/gallery"
              className="border-2 border-cream text-cream px-12 py-4 rounded-full text-lg font-[var(--font-family-body)] font-semibold hover:bg-cream hover:text-charcoal transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 text-cream/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-muted-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-muted-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom Design
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-muted-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sustainable Options
            </div>
          </div>
        </div>
      </section>

      {/* About The Art of Beauty Section */}
      <section 
        id="about-the-art-of-beauty" 
        data-animate
        className={`py-24 px-6 bg-cream transition-all duration-1000 ${
          isVisible['about-the-art-of-beauty'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-8 leading-tight">
                About The Art of Beauty
              </h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed mb-10">
                <p>
                  At The Art of Beauty, we believe that flowers are more than decoration—they're the language of emotion, 
                  the poetry of celebration, and the art that transforms ordinary moments into extraordinary memories.
                </p>
                <p>
                  We specialize in creating bespoke arrangements that reflect your unique story and vision, 
                  while maintaining our commitment to sustainable and eco-conscious practices.
                </p>
              </div>

              {/* Feature Icons */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-muted-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-charcoal mb-2">Sustainable Design</h3>
                  <p className="text-sm text-charcoal/60">Eco-conscious practices</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-muted-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-charcoal mb-2">Custom Creations</h3>
                  <p className="text-sm text-charcoal/60">Tailored to your vision</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-muted-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-charcoal mb-2">Passion & Expertise</h3>
                  <p className="text-sm text-charcoal/60">Dedicated craftsmanship</p>
                </div>
              </div>

              <Link 
                to="/about"
                className="inline-flex items-center text-muted-green hover:text-charcoal transition-colors font-medium group"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/7e9c3399-3cb4-4c77-8e51-15ff7c1ac1eb.jpg" 
                alt="Kraft paper flowers rose bouquet bag handbag"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bouquet Bag/Purse Collection */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Bouquet Bag & Purse Collection
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Elegant accessories that complement your special moments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/68da462249f25-bridal-bouquet-bag-294058265-16x9.webp" 
                alt="Bridal bouquet bag design"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-cream">
                  <h3 className="font-serif text-2xl font-medium mb-2">Bridal Bouquet Bag</h3>
                  <p className="text-cream/90 font-light">Elegant carrier for your special bouquet</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/bridal-purse-bouquet-idea.webp" 
                alt="Bridal purse bouquet idea"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-cream">
                  <h3 className="font-serif text-2xl font-medium mb-2">Bridal Purse</h3>
                  <p className="text-cream/90 font-light">Stylish accessory for your special day</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/close-up-flovers-wedding-arch-wedding-ceremony-decorated-cloth-flowers-green-grass-close-up-110855072.webp" 
                alt="Wedding ceremony decorated with cloth flowers"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-cream">
                  <h3 className="font-serif text-2xl font-medium mb-2">Ceremony Decor</h3>
                  <p className="text-cream/90 font-light">Beautiful floral arrangements</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/fe63e57ec637cfbe211804934f7203b0.jpg" 
                alt="Premium floral decor design"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-cream">
                  <h3 className="font-serif text-2xl font-medium mb-2">Premium Decor</h3>
                  <p className="text-cream/90 font-light">Luxury floral arrangements</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/il_fullxfull.6852910194_rmkw.webp" 
                alt="Floral wedding decoration"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-cream">
                  <h3 className="font-serif text-2xl font-medium mb-2">Wedding Decoration</h3>
                  <p className="text-cream/90 font-light">Complete wedding floral setup</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/il_fullxfull.7260398841_6atu.webp" 
                alt="Elegant bouquet arrangement"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-cream">
                  <h3 className="font-serif text-2xl font-medium mb-2">Elegant Bouquets</h3>
                  <p className="text-cream/90 font-light">Handcrafted floral masterpieces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section 
        id="services-showcase" 
        data-animate
        className={`py-24 px-6 bg-ivory transition-all duration-1000 ${
          isVisible['services-showcase'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Our Services
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Comprehensive floral design services to bring your vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <h3 className="font-serif text-2xl font-medium text-charcoal mb-4 group-hover:text-muted-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/consultation"
              className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-10 py-4 rounded-full text-lg font-[var(--font-family-body)] font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Planning Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section 
        id="portfolio-gallery" 
        data-animate
        className={`py-24 px-6 bg-cream transition-all duration-1000 ${
          isVisible['portfolio-gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Portfolio Gallery
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              A curated collection of our most cherished floral creations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={item.url} 
                  alt={item.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-cream">
                    <h3 className="font-serif text-2xl font-medium mb-2">{item.title}</h3>
                    <p className="text-cream/90 font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/gallery"
              className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-10 py-4 rounded-full text-lg font-[var(--font-family-body)] font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Contact/Consultation Section */}
      <section 
        id="contact-consultation" 
        data-animate
        className={`py-24 px-6 bg-ivory transition-all duration-1000 ${
          isVisible['contact-consultation'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-8 leading-tight">
                Let's Create Something Beautiful Together
              </h2>
              <p className="text-lg text-charcoal/70 mb-10 leading-relaxed">
                Share your vision with us and let's bring your dream celebration to life with stunning floral designs.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6 mb-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-charcoal font-medium mb-2">Name *</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-warm-beige bg-cream focus:border-muted-green focus:ring-2 focus:ring-muted-green/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-charcoal font-medium mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-warm-beige bg-cream focus:border-muted-green focus:ring-2 focus:ring-muted-green/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-charcoal font-medium mb-2">Event Date</label>
                    <input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-warm-beige bg-cream focus:border-muted-green focus:ring-2 focus:ring-muted-green/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-charcoal font-medium mb-2">City</label>
                    <input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-warm-beige bg-cream focus:border-muted-green focus:ring-2 focus:ring-muted-green/20 outline-none transition-all"
                      placeholder="City, State"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-warm-beige bg-cream focus:border-muted-green focus:ring-2 focus:ring-muted-green/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your vision..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-6 py-4 rounded-full font-[var(--font-family-body)] text-sm font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="tel:+919480467250"
                  className="bg-cream p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-muted-green/20 transition-colors">
                    <svg className="w-4 h-4 text-muted-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-charcoal">Phone 1</div>
                </a>
                <a 
                  href="mailto:syedwaseemi850@gmail.com,bhuvansmegalamane2003@gmail.com"
                  className="bg-cream p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-muted-green/20 transition-colors">
                    <svg className="w-4 h-4 text-muted-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-charcoal">Email</div>
                </a>
                <a 
                  href="tel:+918147026577"
                  className="bg-cream p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-muted-green/20 transition-colors">
                    <svg className="w-4 h-4 text-muted-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-charcoal">Phone 2</div>
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/Screenshot 2025-11-11 225532.png" 
                alt="Kraft paper flowers rose bouquet bag handbag"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919480467250"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
        </svg>
      </a>
    </div>
  );
}
