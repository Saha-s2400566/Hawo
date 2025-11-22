import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] bg-glow-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-glow-beige/30 rounded-l-[100px] transform translate-x-1/4" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-glow-orange/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-glow-orange font-medium tracking-wider uppercase mb-4 block">
                            Welcome to Glow Studio
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Reveal Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-orange to-yellow-500">
                                Inner Glow
                            </span>
                        </h1>
                        <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                            Experience premium beauty and wellness treatments designed to rejuvenate your body and spirit.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                to="/services"
                                className="px-8 py-4 rounded-full bg-glow-orange text-white font-medium hover:bg-orange-500 transition-all duration-300 shadow-glow-orange hover:shadow-lg transform hover:-translate-y-1"
                            >
                                View Services
                            </Link>
                            <Link
                                to="/gallery"
                                className="px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 font-medium hover:border-glow-orange hover:text-glow-orange transition-all duration-300"
                            >
                                Our Work
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative z-10 rounded-[50px] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Woman with glowing skin"
                                className="w-full h-[600px] object-cover"
                            />
                        </div>
                        {/* Decorative Halo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-glow-orange/30 rounded-[60px] -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-glow-orange/10 rounded-[70px] -z-20" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
