import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0003.jpg',
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0004.jpg',
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0005.jpg',
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0006.jpg',
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0007.jpg',
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0008.jpg',
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0009.jpg',
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0010.jpg',
    '250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0011.jpg',
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const navigate = (dir: 'prev' | 'next') => {
    if (selectedImage === null) return;
    setSelectedImage(prev => dir === 'prev' 
      ? (prev === 0 ? images.length - 1 : prev??0 - 1)
      : (prev === images.length - 1 ? 0 : prev??0 + 1)
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={`/images/${image}`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}>
              <XMarkIcon className="w-8 h-8" />
            </button>
            
            <button className="absolute left-4 text-white hover:text-gray-300" onClick={(e) => {
              e.stopPropagation();
              navigate('prev');
            }}>
              <ChevronLeftIcon className="w-10 h-10" />
            </button>
            
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img 
                src={`/images/${images[selectedImage]}`} 
                alt={`Gallery ${selectedImage + 1}`}
                className="max-h-[80vh] w-auto mx-auto object-contain"
              />
            </div>
            
            <button className="absolute right-4 text-white hover:text-gray-300" onClick={(e) => {
              e.stopPropagation();
              navigate('next');
            }}>
              <ChevronRightIcon className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
