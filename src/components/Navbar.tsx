import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || !isHomePage 
          ? 'bg-ps-primary-100/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-ps-dark-900/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={scrolled || !isHomePage ? '/logo-blue.png' : '/logo.png'} 
              alt="Permata Signature" 
              className={`h-10 md:h-12 transition-all duration-300 ${
                scrolled || !isHomePage ? 'opacity-100' : 'opacity-90 hover:opacity-100'
              }`} 
              style={{minWidth: '230px',minHeight: '57px'}}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="#home" 
              className={`${scrolled || !isHomePage ? 'text-ps-dark-900' : 'text-ps-primary-pale'} hover:text-ps-primary-700 transition-colors font-medium`}
            >
              Home
            </Link>
            <Link 
              to="#about" 
              className={`${scrolled || !isHomePage ? 'text-ps-dark-900' : 'text-ps-primary-pale'} hover:text-ps-primary-700 transition-colors font-medium`}
            >
              About
            </Link>
            <Link 
              to="#gallery" 
              className={`${scrolled || !isHomePage ? 'text-ps-dark-900' : 'text-ps-primary-pale'} hover:text-ps-primary-700 transition-colors font-medium`}
            >
              Gallery
            </Link>
            <Link 
              to="#amenities" 
              className={`${scrolled || !isHomePage ? 'text-ps-dark-900' : 'text-ps-primary-pale'} hover:text-ps-primary-700 transition-colors font-medium`}
            >
              Amenities
            </Link>
            <Link 
              to="#location" 
              className={`${scrolled || !isHomePage ? 'text-ps-dark-900' : 'text-ps-primary-pale'} hover:text-ps-primary-700 transition-colors font-medium`}
            >
              Location
            </Link>
            <Link 
              to="#contact" 
              className={`${
                scrolled || !isHomePage 
                  ? 'bg-ps-primary-700 text-ps-primary-pale hover:bg-ps-primary-800' 
                  : 'bg-ps-primary-pale text-ps-dark-900 hover:bg-white'
              } px-6 py-2 rounded-lg transition-all duration-300 font-medium`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || !isHomePage ? 'text-ps-dark-900' : 'text-ps-primary-pale'} hover:text-ps-primary-700 focus:outline-none transition-colors`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="#home" 
                className="text-ps-dark-900 hover:text-ps-primary-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="#about" 
                className="text-ps-dark-900 hover:text-ps-primary-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="#gallery" 
                className="text-ps-dark-900 hover:text-ps-primary-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="#amenities" 
                className="text-ps-dark-900 hover:text-ps-primary-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Amenities
              </Link>
              <Link 
                to="#location" 
                className="text-ps-dark-900 hover:text-ps-primary-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Location
              </Link>
              <Link 
                to="#contact" 
                className="bg-ps-primary-700 text-ps-primary-pale px-6 py-2 rounded-lg hover:bg-ps-primary-800 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
