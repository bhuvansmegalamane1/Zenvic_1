import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Consultation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    city: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real implementation, you would send this data to your backend
      console.log('Consultation request submitted:', formData);
      toast.success('Consultation request submitted successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to submit consultation request. Please try again.');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-8 text-center">
          Book a Consultation
        </h1>
        <p className="text-xl text-charcoal/70 text-center mb-12 max-w-2xl mx-auto">
          Schedule a personalized consultation to discuss your event vision and requirements.
        </p>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-charcoal font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-charcoal font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="eventDate" className="block text-charcoal font-medium mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-charcoal font-medium mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                  placeholder="Your city"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-charcoal font-medium mb-2">
                Event Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
                placeholder="Tell us about your event, guest count, style preferences, etc."
              />
            </div>
            
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-full font-[var(--font-family-body)] text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Submit Consultation Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}