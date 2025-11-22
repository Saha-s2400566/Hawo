import { motion } from 'framer-motion';

const Stylists = () => {
    const stylists = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Senior Facialist',
            bio: 'Specializing in holistic skin therapies with over 10 years of experience.',
            image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Massage Therapist',
            bio: 'Expert in deep tissue and sports massage for recovery and relaxation.',
            image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80'
        },
        {
            id: 3,
            name: 'Emma Davis',
            role: 'Hair Stylist',
            bio: 'Creative stylist known for modern cuts and natural-looking color.',
            image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            name: 'David Wilson',
            role: 'Nail Artist',
            bio: 'Precision nail care and artistic designs for the perfect manicure.',
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-glow-white">
            <div className="bg-glow-beige/30 py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Experts</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Meet the talented professionals dedicated to your beauty and wellness journey.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stylists.map((stylist, index) => (
                        <motion.div
                            key={stylist.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <div className="absolute inset-0 rounded-full border-2 border-glow-orange/30 group-hover:border-glow-orange transition-colors duration-300" />
                                <div className="absolute -inset-2 rounded-full border border-glow-orange/10 group-hover:scale-110 transition-transform duration-500" />
                                <img
                                    src={stylist.image}
                                    alt={stylist.name}
                                    className="w-full h-full rounded-full object-cover p-2"
                                />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">{stylist.name}</h3>
                            <p className="text-glow-orange font-medium text-sm mb-3">{stylist.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{stylist.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stylists;
