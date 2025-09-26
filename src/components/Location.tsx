import { motion } from "framer-motion";

const strategicLocations = [
  { name: "Puri Indah & Lippo Mall", image: "/images/lippo.webp" },
  { name: "IPEKA & Springfield International School", image: "/images/ipeka.webp" },
  { name: "West Jakarta CBD", image: "/images/cbd.webp" },
  { name: "RSPI", image: "/images/rspi.webp" },
  { name: "Modern Market (Puri Indah)", image: "/images/puriindah.webp" },
  { name: "Coffeeshop & Cafes (Starbucks & Naked Papa)", image: "/images/starbucks.webp" },
];

const directAccess = [
  { name: "Airport", image: "/images/airport.webp" },
  { name: "Inner City", image: "/images/innercity.webp" },
  { name: "JORR Highway", image: "/images/highway.webp" },
];

const Location = () => {
  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Strategic Location</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-center md:text-left">
              Strategic Location, surroundings :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicLocations.map((location, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-3 overflow-hidden rounded-md">
                    <img 
                      src={location.image} 
                      alt={location.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-center font-medium">{location.name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-center md:text-left">
              Direct Access to :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {directAccess.map((access, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow flex items-center space-x-4"
                >
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                    <img 
                      src={access.image} 
                      alt={access.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-medium">{access.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
