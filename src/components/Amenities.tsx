import { motion } from 'framer-motion';

const amenities = [
  { name: 'Premium-Smart Cluster', icon: '🏙️' },
  { name: 'Children\'s Play Area', icon: '🧒' },
  { name: '24/7 Security', icon: '👮' },
  { name: 'Parking and Buggy Car for Visitor', icon: '🚗' },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Amenities</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience a lifestyle of comfort and convenience with our premium amenities designed to enhance your living experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-3">{amenity.icon}</div>
              <h3 className="text-lg font-medium">{amenity.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
