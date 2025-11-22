import { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import BookingModal from '../components/BookingModal';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Mock data for full services list
    setServices([
      {
        id: 1,
        name: 'Signature Facial',
        price: 120,
        duration: 60,
        description: 'Our signature treatment combining deep cleansing, exfoliation, and a custom mask.',
        imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        category: 'Face'
      },
      {
        id: 2,
        name: 'Aromatherapy Massage',
        price: 95,
        duration: 60,
        description: 'Relax your mind and body with essential oils and gentle massage techniques.',
        imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        category: 'Body'
      },
      {
        id: 3,
        name: 'Luxury Manicure',
        price: 55,
        duration: 45,
        description: 'Complete nail care including shaping, cuticle work, and premium polish.',
        imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        category: 'Nails'
      },
      {
        id: 4,
        name: 'Deep Tissue Massage',
        price: 110,
        duration: 60,
        description: 'Intense massage therapy targeting deep muscle layers to release chronic tension.',
        imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        category: 'Body'
      },
      {
        id: 5,
        name: 'Hair Styling & Cut',
        price: 85,
        duration: 60,
        description: 'Professional consultation, wash, cut, and blow-dry styling.',
        imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
        category: 'Hair'
      },
      {
        id: 6,
        name: 'Hydrating Facial',
        price: 100,
        duration: 50,
        description: 'Intense hydration treatment for dry and dehydrated skin.',
        imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        category: 'Face'
      }
    ]);
  }, []);

  const handleBook = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const categories = ['All', ...new Set(services.map(s => s.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-glow-white">
      <div className="bg-glow-beige/30 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium treatments designed to enhance your natural beauty and well-being.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-glow-orange text-white shadow-glow-orange'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={handleBook}
            />
          ))}
        </div>
      </div>

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

export default Services;
