import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto" style={{padding: '20px'}}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Permata Signature</h3>
            <p className="text-gray-400">Luxury living redefined with premium residential properties.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Gallery', 'Amenities', 'Location', 'Contact'].map((item, i) => (
                <li key={i}><a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Jl Puri Kembangan Raya A/3 Puri Indah, Jakarta</p>
              <p>Email: info@permatasignature.com</p>
              <p>Phone: 021-5825757</p>
            </address>
          </div>
          
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          &copy; {currentYear} Permata Signature. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
