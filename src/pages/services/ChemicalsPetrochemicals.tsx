
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Beaker, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChemicalsPetrochemicals = () => {
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

        {/* Hero Section with Industrial Image */}
        <div className="bg-gradient-to-br from-purple-700 to-purple-600 rounded-3xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center mb-6">
                <Beaker size={48} className="mr-4" />
                <h1 className="text-3xl md:text-4xl font-bold">
                  Chemicals & Petrochemicals
                </h1>
              </div>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Specialized engineering solutions for chemical processing, petrochemical 
                manufacturing, and specialty chemical production facilities.
              </p>
            </div>
            <div className="h-64 md:h-auto relative">
              <img 
                src="/lovable-uploads/af2d66c8-0244-4f35-ba65-2fd19d061b7e.png"
                alt="Chemical Processing Plant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              DBC Consultancy provides specialized engineering services for the chemicals 
              and petrochemicals industry, delivering solutions that meet the unique 
              challenges of chemical processing environments. Our expertise covers 
              everything from basic chemicals to complex specialty products.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              We understand the critical importance of safety, environmental compliance, 
              and process optimization in chemical facilities, and we design systems 
              that exceed industry standards while maximizing operational efficiency.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Process Plant Design</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Equipment Foundation Engineering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Structural Systems for Corrosive Environments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Safety & Environmental Systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Piping and Instrumentation Design</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Hazard Analysis & Risk Assessment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Facilities</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              We design comprehensive process facilities for chemical and petrochemical 
              production, incorporating advanced process technologies and safety systems. 
              Our facilities are engineered to handle corrosive materials, high pressures, 
              and extreme temperatures while maintaining operational excellence.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Chemical processing plants
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Petrochemical production facilities
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Specialty chemical manufacturing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Catalyst production facilities
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety & Environmental Systems</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Safety is paramount in chemical processing. We design comprehensive safety 
              systems including emergency shutdown systems, fire protection, gas detection, 
              and environmental control systems that protect personnel, equipment, and 
              the surrounding environment.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Emergency shutdown systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Fire protection and suppression
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Gas detection and monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Environmental control systems
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialized Infrastructure</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Chemical facilities require specialized infrastructure to handle unique 
              operational requirements. We engineer corrosion-resistant structures, 
              specialized foundations for rotating equipment, and containment systems 
              that meet stringent regulatory requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Corrosion-resistant structures
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Equipment foundations and supports
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Secondary containment systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Utility and support systems
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Transform Your Chemical Operations</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Partner with our chemical engineering experts to develop safe, efficient, 
            and compliant facilities for your chemical and petrochemical operations.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChemicalsPetrochemicals;
