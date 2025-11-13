import { useRevealOnIntersect } from '../hooks';

export default function About() {
  const { elementRef: missionRef, isVisible: isMissionVisible } = useRevealOnIntersect();
  const { elementRef: valuesRef, isVisible: isValuesVisible } = useRevealOnIntersect();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-8 leading-tight">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed">
            Founded on the belief that every celebration should be as unique as the love it honors
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionRef}
        className={`py-24 px-6 bg-ivory transition-all duration-1000 ${
          isMissionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-8 leading-tight">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  At The Art of Beauty, we believe that the most beautiful celebrations are born from 
                  understanding our clients' stories and translating them into unforgettable experiences.
                </p>
                <p>
                  As a premium floral décor and event styling house, we are dedicated to creating bespoke celebrations 
                  that reflect your unique vision and style. Each event we design is a testament to our commitment 
                  to excellence and our passion for bringing dreams to life.
                </p>
                <p>
                  Our approach combines timeless elegance with contemporary sophistication, 
                  ensuring that every detail reflects your unique vision and style.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e2d910de-c8a6-4d0b-234f-01dcc452d200/public" 
                alt="Behind the scenes of event planning"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className={`py-24 px-6 bg-cream transition-all duration-1000 ${
          isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-4">Passion</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We pour our hearts into every event, treating each celebration as if it were our own.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-4">Excellence</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We maintain the highest standards in every aspect of our work, from design to execution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-4">Collaboration</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We work closely with our clients to ensure their vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-serif text-muted-green mb-2">50+</div>
              <div className="text-cream/80 font-medium">Events Planned</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-muted-green mb-2">98%</div>
              <div className="text-cream/80 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-muted-green mb-2">50+</div>
              <div className="text-cream/80 font-medium">Vendor Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              Meet Our Team
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              The passionate professionals behind every unforgettable celebration
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">Syed</h3>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">Bhuvan</h3>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">Priya</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}