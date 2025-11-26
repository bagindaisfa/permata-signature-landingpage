import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header
      onMouseLeave={() => setIsOpen(false)}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? "bg-ps-primary-100/95 backdrop-blur-sm shadow-lg py-3"
          : "bg-ps-dark-900/90 backdrop-blur-sm py-4 border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={scrolled || !isHomePage ? "/logo.png" : "/logo-white.png"}
              alt="Permata Signature"
              className={`
                h-10 md:h-12 
                transition-all duration-300 
                min-w-[180px] md:min-w-[230px]
                min-h-[45px] md:min-h-[70px]
                ${
                  scrolled || !isHomePage
                    ? "opacity-100"
                    : "opacity-90 hover:opacity-100"
                }
              `}
            />
          </Link>

          {/* Desktop Navigation (disabled, always hidden) */}
          <nav className="hidden items-center space-x-8">
            <a
              href="#home"
              className={`${
                scrolled || !isHomePage
                  ? "text-ps-dark-900"
                  : "text-ps-primary-pale"
              } hover:text-ps-primary-700 transition-colors font-medium`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${
                scrolled || !isHomePage
                  ? "text-ps-dark-900"
                  : "text-ps-primary-pale"
              } hover:text-ps-primary-700 transition-colors font-medium`}
            >
              About
            </a>
            <a
              href="#products"
              className={`${
                scrolled || !isHomePage
                  ? "text-ps-dark-900"
                  : "text-ps-primary-pale"
              } hover:text-ps-primary-700 transition-colors font-medium`}
            >
              Products
            </a>

            <a
              href="#location"
              className={`${
                scrolled || !isHomePage
                  ? "text-ps-dark-900"
                  : "text-ps-primary-pale"
              } hover:text-ps-primary-700 transition-colors font-medium`}
            >
              Location
            </a>
            <a
              href="#contact"
              className={`${
                scrolled || !isHomePage
                  ? "bg-ps-primary-700 text-ps-primary-pale hover:bg-ps-primary-800"
                  : "bg-ps-primary-pale text-ps-dark-900 hover:bg-white"
              } px-6 py-2 rounded-lg transition-all duration-300 font-medium`}
            >
              Contact Our Sales
            </a>
          </nav>

          {/* Mobile menu button (always visible) */}
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setIsOpen(true)}
              className={`${
                scrolled || !isHomePage ? "text-ps-dark-900" : "text-white"
              } hover:text-ps-primary-700 focus:outline-none transition-colors`}
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

        {/* Mobile Navigation (shown on all sizes when open) */}
        {isOpen && (
          <div className="mt-4 pb-4 bg-black/40 backdrop-blur-md rounded-lg">
            <nav className="flex flex-col divide-y divide-white/10 bg-ps-dark-900/60 rounded-lg overflow-hidden">
              <a
                href="#home"
                className="block px-4 py-3 text-white hover:text-ps-primary-pale transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-white hover:text-ps-primary-pale transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#products"
                className="block px-4 py-3 text-white hover:text-ps-primary-pale transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>

              <a
                href="#location"
                className="block px-4 py-3 text-white hover:text-ps-primary-pale transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Location
              </a>
              <a
                href="#contact"
                className="m-3 text-white border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-ps-dark-900 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Our Sales
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
