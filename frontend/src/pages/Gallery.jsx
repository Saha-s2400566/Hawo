import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Gallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    ];

    return (
        <div className="pt-20 min-h-screen bg-glow-white">
            <div className="bg-glow-beige/30 py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Gallery</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A glimpse into our serene atmosphere and the results we achieve.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="rounded-[40px] overflow-hidden shadow-2xl">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        spaceBetween={0}
                        slidesPerView={1}
                        effect="fade"
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="h-[600px]"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full">
                                    <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {images.map((img, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden h-48 cursor-pointer hover:opacity-80 transition-opacity">
                            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
