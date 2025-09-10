import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0002.jpg" 
          alt="Permata Signature Residence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ps-dark-900 bg-opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Experience Luxury Living at <span className="text-ps-primary-pale">Permata Signature</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover your dream home in the heart of the city, where modern design meets unparalleled comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ps-primary-pale hover:bg-ps-primary-light text-ps-dark-900 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Schedule a Visit
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-ps-primary-pale hover:bg-ps-primary-700 hover:bg-opacity-20 text-ps-primary-pale font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              View Gallery
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-ps-primary-pale"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 border-2 border-ps-primary-pale rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-ps-primary-pale rounded-full"></div>
        </div>
        <p className="text-ps-primary-pale text-sm mt-2">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
