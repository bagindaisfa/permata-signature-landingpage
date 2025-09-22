import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Gallery = () => {
  const products = [
    {
      title: 'THE SIGNATURE',
      size: 'TYPE 9×10',
      image: '/images/type-9.png',
      plan: '/images/denah-type-9.png',
      description: 'Cozy and efficient layout designed for modern living.'
    },
    {
      title: 'THE MANOR',
      size: 'TYPE 10×10',
      image: '/images/type-10.png',
      plan: '/images/denah-type-10.png',
      description: 'Balanced spaces with premium finishing for families.'
    },
    {
      title: 'THE ESTATE',
      size: 'TYPE 12×14',
      image: '/images/type-12.png',
      plan: '/images/denah-type-12.png',
      description: 'Spacious design offering flexibility and comfort.'
    },
    {
      title: 'THE GRAND',
      size: 'TYPE 17×20',
      image: '/images/type-17.png',
      plan: '/images/denah-type-17.png',
      description: 'Grand proportions with luxury details throughout.'
    },
  ];

  const [index, setIndex] = useState(0);
  const [showPlan, setShowPlan] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const go = (dir: 'prev' | 'next') => {
    setIndex(prev => {
      const next = dir === 'prev' ? (prev === 0 ? products.length - 1 : prev - 1) : (prev === products.length - 1 ? 0 : prev + 1);
      return next;
    });
    setShowPlan(false);
  };

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    const threshold = 50; // px
    if (Math.abs(touchDeltaX.current) > threshold) {
      if (touchDeltaX.current < 0) {
        go('next');
      } else {
        go('prev');
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        {/* Single-card carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Card */}
            <motion.div
              key={`${index}-${showPlan ? 'plan' : 'image'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div
                className="relative"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <picture>
                  <source
                    srcSet={(showPlan ? products[index].plan : products[index].image).replace(/\.(jpg|jpeg|png)$/i, '.webp')}
                    type="image/webp"
                  />
                  <img
                    src={showPlan ? products[index].plan : products[index].image}
                    alt={`${products[index].title} ${showPlan ? 'Plan' : 'Image'}`}
                    className="w-full h-[340px] md:h-[420px] object-contain bg-gray-50 cursor-pointer"
                    onClick={() => setShowPlan(v => !v)}
                    loading="lazy"
                  />
                </picture>
                <div className="absolute top-3 right-3 text-xs bg-black/60 text-white px-2 py-1 rounded-md">
                  {showPlan ? 'Click to view exterior' : 'Click to view plan'}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">{products[index].title}</h3>
                  <span className="text-xs md:text-sm text-gray-600">{products[index].size}</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{products[index].description}</p>
              </div>
            </motion.div>

            {/* Controls */}
            <button
              aria-label="Previous"
              onClick={() => go('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
            </button>
            <button
              aria-label="Next"
              onClick={() => go('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIndex(i); setShowPlan(false); }}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-ps-primary-700 w-6' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox removed in favor of single-card carousel */}
    </section>
  );
};

export default Gallery;
