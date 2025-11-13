import { useState } from 'react';
import { useRevealOnIntersect } from '../hooks';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { elementRef: galleryGridRef, isVisible: isGalleryGridVisible } = useRevealOnIntersect();

  const categories = ['All', 'Weddings', 'Corporate', 'Floral Design', 'Venue Styling'];

  const galleryItems = [
    {
      title: "Vintage Elegance",
      description: "Rustic wedding table décor",
      category: "Weddings",
      url: "/Zenvic_1/Screenshot 2025-11-11 183251.png",
      alt: "Rustic wedding table setting with vintage charm and natural elements"
    },
    {
      title: "Romantic Glow",
      description: "Candlelit table arrangements",
      category: "Floral Design",
      url: "/Zenvic_1/Singlerose_1080x.webp",
      alt: "Intimate candlelit dinner table with warm ambient lighting"
    },
    {
      title: "Garden Dreams",
      description: "Outdoor reception elegance",
      category: "Weddings",
      url: "/Zenvic_1/images.jpeg",
      alt: "Beautiful outdoor garden reception with natural floral arrangements"
    },
    {
      title: "Modern Sophistication",
      description: "Corporate event styling",
      category: "Corporate",
      url: "/Zenvic_1/images (3).jpeg",
      alt: "Sleek modern corporate event setup with contemporary design elements"
    },
    {
      title: "Champagne Moments",
      description: "Celebration centerpieces",
      category: "Floral Design",
      url: "/Zenvic_1/images (4).jpeg",
      alt: "Elegant champagne celebration with luxurious centerpiece arrangements"
    },
    {
      title: "Luxury Interiors",
      description: "Premium home arrangements",
      category: "Venue Styling",
      url: "/Zenvic_1/images (5).jpeg",
      alt: "Sophisticated interior floral arrangements for luxury home events"
    },
    {
      title: "Ceremony Arch",
      description: "Wedding ceremony backdrop",
      category: "Weddings",
      url: "/Zenvic_1/close-up-flovers-wedding-arch-wedding-ceremony-decorated-cloth-flowers-green-grass-close-up-110855072.webp",
      alt: "Elegant wedding arch with romantic floral arrangements"
    },
    {
      title: "Neutral Elegance",
      description: "Sophisticated tablescape",
      category: "Venue Styling",
      url: "/Zenvic_1/7e9c3399-3cb4-4c77-8e51-15ff7c1ac1eb.jpg",
      alt: "Elegant neutral wedding tablescape with sophisticated arrangements"
    },
    {
      title: "Boho Summer",
      description: "Modern boho event styling",
      category: "Weddings",
      url: "/Zenvic_1/bridal-purse-bouquet-idea.webp",
      alt: "Modern boho summer event styling with natural textures"
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-8 leading-tight">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
            A curated collection of our most cherished celebrations, each telling a unique story
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-ivory border-b border-warm-beige/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-muted-green text-cream'
                    : 'bg-cream text-charcoal hover:bg-muted-green hover:text-cream'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section 
        ref={galleryGridRef}
        className={`py-24 px-6 bg-ivory transition-all duration-1000 ${
          isGalleryGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img 
                  src={item.url} 
                  alt={item.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-cream">
                    <span className="inline-block px-3 py-1 bg-muted-green text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl font-medium mb-2">{item.title}</h3>
                    <p className="text-cream/90 font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream mb-6 leading-tight">
              Our Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-serif text-muted-green mb-2">50+</div>
              <div className="text-cream/80 font-medium">Events Created</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-muted-green mb-2">50+</div>
              <div className="text-cream/80 font-medium">Floral Arrangements</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-muted-green mb-2">50+</div>
              <div className="text-cream/80 font-medium">Venues Styled</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-muted-green mb-2">98%</div>
              <div className="text-cream/80 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}