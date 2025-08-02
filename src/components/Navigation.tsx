import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f9fd1225-357f-4466-950b-fbdff9000e66.png" 
                alt="DBC Consultancy Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-sackers font-bold text-blue-900 tracking-wider">
                  DBC CONSULTANCY
                </h1>
                <p className="text-xs text-gray-600 -mt-1 hidden sm:block font-crimson italic">Engineering Excellence Delivered</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isHomePage ? 'text-blue-900' : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                location.pathname === '/about' ? 'text-blue-900' : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors ${
                location.pathname === '/services' ? 'text-blue-900' : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-blue-900' : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-900 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Professional Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-white shadow-2xl border-t border-gray-100">
            <div className="px-4 py-6 space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                  isHomePage 
                    ? 'text-blue-900 bg-blue-50 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === '/about' 
                    ? 'text-blue-900 bg-blue-50 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === '/services' 
                    ? 'text-blue-900 bg-blue-50 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === '/contact' 
                    ? 'text-blue-900 bg-blue-50 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
