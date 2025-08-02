
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Zap, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PowerUtilities = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/services" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section with Image */}
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-3xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 text-white">
              <div className="flex items-center mb-6">
                <Zap size={48} className="mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Power & Utilities
                </h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Comprehensive engineering solutions for power generation, transmission, 
                distribution, and utility infrastructure projects worldwide.
              </p>
            </div>
            <div className="h-64 md:h-auto">
              <img 
                src="/lovable-uploads/70418081-8a3f-41a1-8619-c8bc34cd13b8.png" 
                alt="Power and utilities infrastructure" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              DBC Consultancy delivers cutting-edge engineering solutions for the power and 
              utilities sector, covering everything from large-scale power generation facilities 
              to complex transmission and distribution networks. Our expertise spans conventional 
              and renewable energy systems, ensuring reliable and efficient power delivery.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand the critical importance of power infrastructure and work to 
              design resilient systems that meet growing energy demands while incorporating 
              the latest technologies and sustainability practices.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Power Plant Design & Engineering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Transmission Line Infrastructure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Substation Design & Construction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Distribution Network Engineering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Smart Grid Implementation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Renewable Energy Integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Power Generation</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our power generation expertise covers conventional thermal plants, nuclear 
              facilities, and renewable energy installations. We design robust power 
              generation systems that maximize efficiency, ensure safety, and meet 
              stringent environmental standards.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Thermal power plants</li>
              <li>• Nuclear power facilities</li>
              <li>• Solar and wind farms</li>
              <li>• Hydroelectric installations</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transmission Systems</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We engineer high-voltage transmission systems that efficiently transport 
              electricity across long distances. Our transmission solutions include 
              overhead lines, underground cables, and supporting infrastructure designed 
              to minimize losses and ensure system reliability.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• High-voltage transmission lines</li>
              <li>• Underground cable systems</li>
              <li>• Transmission towers and structures</li>
              <li>• Grid interconnection facilities</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Distribution Networks</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our distribution engineering services focus on the final delivery of 
              electricity to end users. We design efficient distribution networks 
              that incorporate smart grid technologies, improve reliability, and 
              support the integration of distributed energy resources.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Medium and low-voltage networks</li>
              <li>• Smart metering systems</li>
              <li>• Distribution automation</li>
              <li>• Microgrids and local generation</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Energize Your Infrastructure</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Let our power and utilities experts help you build resilient, efficient, 
            and sustainable electrical infrastructure for the future.
          </p>
          <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PowerUtilities;
