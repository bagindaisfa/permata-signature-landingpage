import { motion } from 'framer-motion';

const nearbyPlaces = [
  { name: 'City Center', distance: '5 min', icon: '🏙️' },
  { name: 'International School', distance: '10 min', icon: '🏫' },
  { name: 'Shopping Mall', distance: '8 min', icon: '🛍️' },
  { name: 'Hospital', distance: '7 min', icon: '🏥' },
  { name: 'Restaurant', distance: '3 min', icon: '🍽️' },
  { name: 'Public Transport', distance: '2 min', icon: '🚌' },
];

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Prime Location</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the perfect balance of tranquility and urban convenience in one of the most sought-after neighborhoods.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Nearby Places</h3>
            <div className="grid grid-cols-2 gap-4">
              {nearbyPlaces.map((place, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 hover:bg-white rounded-lg transition-colors">
                  <span className="text-2xl">{place.icon}</span>
                  <div>
                    <p className="font-medium">{place.name}</p>
                    <p className="text-sm text-gray-500">{place.distance} away</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-96 bg-gray-200 rounded-xl overflow-hidden"
          >
            {/* Replace with your actual map embed */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">Location Map</h3>
                <p className="text-gray-600">Interactive map will be embedded here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
