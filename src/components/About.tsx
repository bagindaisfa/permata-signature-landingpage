import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      img: '/images/250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0004.jpg',
      title: '24/7 Security',
      description: 'Gated community with CCTV and professional security personnel.'
    },
    {
      img: '/images/250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0009.jpg',
      title: 'Playground',
      description: 'Safe and engaging outdoor play area for children.'
    },
    {
      img: '/images/250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0008.jpg',
      title: 'Boulevard',
      description: 'Elegant boulevard with lush greenery and wide pedestrian paths.'
    },
    {
      img: '/images/ev-charging-station.png',
      title: 'EV Charging Station',
      description: 'Convenient on-site charging points for electric vehicles.'
    },
    {
      img: '/images/250825 PERMATA SIGNATURE RESIDENCE - TOUCHUP VISUALIZATION REVISI 2_page-0005.jpg',
      title: 'Jogging Track',
      description: 'Dedicated jogging path for a healthy and active lifestyle.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Welcome to Permata Signature</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Living In Soothin Luxury
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div className="w-full h-40 md:h-48 lg:h-52 overflow-hidden">
                <picture>
                  <source srcSet={`${feature.img.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`} type="image/webp" />
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
