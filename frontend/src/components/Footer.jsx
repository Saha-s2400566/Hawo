import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-glow-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="font-serif text-2xl font-bold text-white">
                            Glow<span className="text-glow-orange">Studio</span>
                        </span>
                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                            Experience the ultimate in beauty and wellness. Where your inner glow meets expert care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-glow-beige">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/services" className="text-gray-400 hover:text-glow-orange transition-colors">Services</a></li>
                            <li><a href="/stylists" className="text-gray-400 hover:text-glow-orange transition-colors">Our Team</a></li>
                            <li><a href="/gallery" className="text-gray-400 hover:text-glow-orange transition-colors">Gallery</a></li>
                            <li><a href="/products" className="text-gray-400 hover:text-glow-orange transition-colors">Shop</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-glow-beige">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Glow Avenue</li>
                            <li>Beverly Hills, CA 90210</li>
                            <li>+1 (555) 123-4567</li>
                            <li>hello@glowstudio.com</li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-glow-beige">Opening Hours</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex justify-between"><span>Mon - Fri</span> <span>9am - 8pm</span></li>
                            <li className="flex justify-between"><span>Saturday</span> <span>10am - 6pm</span></li>
                            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© 2025 Glow Studio. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-glow-orange transition-colors"><FaInstagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-glow-orange transition-colors"><FaFacebookF size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-glow-orange transition-colors"><FaTwitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
