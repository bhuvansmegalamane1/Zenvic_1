import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useRevealOnIntersect } from '../hooks';

// Define the Testimonial interface to match the schema
interface Testimonial {
  _id: string;
  _creationTime: number;
  clientName: string;
  review: string;
  rating: number;
  eventType: string;
}

export default function Testimonials() {
  const testimonialsQuery = useQuery(api.testimonials.getTestimonials);
  const { elementRef: testimonialsGridRef, isVisible: isTestimonialsGridVisible } = useRevealOnIntersect();
  const { elementRef: featuredQuoteRef, isVisible: isFeaturedQuoteVisible } = useRevealOnIntersect();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-8 leading-tight">
            Client Stories
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
            Hear from the couples and clients who trusted us with their most important moments
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section 
        ref={testimonialsGridRef}
        className={`py-24 px-6 bg-ivory transition-all duration-1000 ${
          isTestimonialsGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {testimonialsQuery === undefined ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-muted-green mx-auto"></div>
              <p className="text-charcoal/60 mt-4">Loading testimonials...</p>
            </div>
          ) : testimonialsQuery === null || testimonialsQuery.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-charcoal/60">No testimonials available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              {testimonialsQuery.map((testimonial: Testimonial, index: number) => (
                <div 
                  key={index}
                  className="bg-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-lg text-charcoal/80 leading-relaxed mb-6 italic">
                    "{testimonial.review}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-serif text-xl font-medium text-charcoal">
                        {testimonial.clientName}
                      </div>
                      <div className="text-muted-green font-medium">
                        {testimonial.eventType}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-muted-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Quote */}
      <section 
        ref={featuredQuoteRef}
        className={`py-24 px-6 bg-cream transition-all duration-1000 ${
          isFeaturedQuoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-relaxed mb-8 italic">
            "The Art of Beauty created the most stunning bridal bouquet for my sister's wedding! The attention to detail and the freshness of the flowers were exceptional. Jiya and her team truly understand the essence of Indian weddings and celebrations. Their floral handbags are also a game-changer - so elegant and unique!"
          </blockquote>
          <div className="text-muted-green font-medium text-lg">
            — Priya Sharma
          </div>
          <div className="text-charcoal/60">
            Sister's Wedding, Delhi
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream mb-6 leading-tight">
              Loved by Clients Across India
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-serif text-muted-green mb-4">98%</div>
              <div className="text-cream font-medium text-lg mb-2">Client Satisfaction Rate</div>
              <div className="text-cream/70">From couples who trusted us with their big day</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-muted-green mb-4">95%</div>
              <div className="text-cream font-medium text-lg mb-2">Referral Rate</div>
              <div className="text-cream/70">Happy clients who recommend us to family & friends</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-muted-green mb-4">4.9</div>
              <div className="text-cream font-medium text-lg mb-2">Average Rating</div>
              <div className="text-cream/70">Across Google, WeddingWire & JustGetInTouch</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}