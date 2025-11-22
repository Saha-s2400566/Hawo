import { motion } from 'framer-motion';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Glow Serum',
            price: 45,
            image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Skincare'
        },
        {
            id: 2,
            name: 'Hydrating Mist',
            price: 28,
            image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Face'
        },
        {
            id: 3,
            name: 'Body Oil',
            price: 35,
            image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Body'
        },
        {
            id: 4,
            name: 'Night Cream',
            price: 52,
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            category: 'Skincare'
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-glow-white">
            <div className="bg-glow-beige/30 py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Shop Products</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Bring the Glow Studio experience home with our curated skincare line.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="h-64 bg-gray-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover mix-blend-multiply"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
                                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-glow-orange font-bold mb-4">${product.price}</p>
                                <button className="w-full py-2 rounded-full border border-gray-200 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
