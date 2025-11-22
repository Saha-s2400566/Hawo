import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import BookingModal from '../components/BookingModal';
import axios from 'axios';

const Home = () => {
  const [featuredServices, setFeaturedServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Fetch services (mock data for now if backend not ready/reachable)
    const fetchServices = async () => {
      try {
        // const res = await axios.get('http://localhost:5000/api/v1/services');
        // setFeaturedServices(res.data.data.slice(0, 3));

        // Using mock data to ensure UI looks good immediately
        setFeaturedServices([
          {
            id: 1,
            name: 'Signature Facial',
            price: 120,
            duration: 60,
            description: 'Our signature treatment combining deep cleansing, exfoliation, and a custom mask.',
            imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            id: 2,
            name: 'Aromatherapy Massage',
            price: 95,
            duration: 60,
            description: 'Relax your mind and body with essential oils and gentle massage techniques.',
            imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          },
          {
            id: 3,
            name: 'Luxury Manicure',
            price: 55,
            duration: 45,
            description: 'Complete nail care including shaping, cuticle work, and premium polish.',
            imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
          }
        ]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchServices();
  }, []);

  const handleBook = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div>
      <Hero />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-glow-orange font-medium tracking-wider uppercase">Our Best</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Featured Treatments</h2>
            <div className="w-24 h-1 bg-glow-orange mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={handleBook}
              />
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={selectedService}
        staffList={[
          { id: 1, name: 'Sarah Johnson', specialization: 'Facialist', imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80' },
          { id: 2, name: 'Michael Chen', specialization: 'Massage Therapist', imageUrl: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80' }
        ]}
      />
    </div>
  );
};

export default Home;
