
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/f9fd1225-357f-4466-950b-fbdff9000e66.png" 
                alt="DBC Consultancy Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">DBC CONSULTANCY</h3>
                <p className="text-sm text-gray-400">Engineering Excellence Delivered</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading civil engineering consultancy delivering innovative 
              solutions across diverse industries worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Building & Construction</li>
              <li>Oil, Gas & Energy</li>
              <li>Power & Utilities</li>
              <li>Chemicals & Petrochemicals</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 space-y-2">
              <p>info@dbcconsultancy.com</p>
              <p>5 Brayford Square<br />London. E1 0SG</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DBC CONSULTANCY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
