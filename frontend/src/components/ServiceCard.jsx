import { motion } from 'framer-motion';

const ServiceCard = ({ service, onBook }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-glow-orange transition-shadow duration-300 group"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={service.imageUrl || service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 relative">
                {/* Golden Halo Effect Background */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-glow-gold/20 rounded-full blur-xl group-hover:bg-glow-gold/40 transition-colors duration-300" />

                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900">{service.name}</h3>
                    <span className="text-glow-orange font-bold text-lg">${service.price}</span>
                </div>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.description}</p>

                <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{service.duration} mins</span>
                    <button
                        onClick={() => onBook(service)}
                        className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-glow-orange transition-colors duration-300"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
