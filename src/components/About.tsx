import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: '🏙️',
      title: 'Prime Location',
      description: 'Strategically located with easy access to business districts and amenities.'
    },
    {
      icon: '🏡',
      title: 'Modern Design',
      description: 'Contemporary architecture with premium finishes and smart home features.'
    },
    {
      icon: '🌳',
      title: 'Green Spaces',
      description: 'Lush landscaping and sustainable living environments.'
    },
    {
      icon: '🔒',
      title: '24/7 Security',
      description: 'Gated community with CCTV and professional security personnel.'
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
            Experience luxury living at its finest with our meticulously designed residences that combine modern 
            architecture with functional spaces, creating the perfect environment for you and your family.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
