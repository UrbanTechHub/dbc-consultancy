
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Fuel, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const OilGasEnergy = () => {
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
        <div className="bg-gradient-to-br from-orange-700 to-orange-600 rounded-3xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 text-white">
              <div className="flex items-center mb-6">
                <Fuel size={48} className="mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Oil, Gas & Energy
                </h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Advanced engineering solutions for upstream, midstream, and downstream 
                operations in the oil, gas, and renewable energy sectors.
              </p>
            </div>
            <div className="h-64 md:h-auto">
              <img 
                src="/lovable-uploads/062dca53-52ef-4614-bb3f-25d5db2e19c5.png" 
                alt="Oil and gas industrial facility" 
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
              DBC Consultancy provides comprehensive engineering solutions for the energy sector, 
              with expertise spanning traditional oil and gas operations to renewable energy 
              infrastructure. Our team understands the unique challenges of energy projects, 
              from extreme operating conditions to stringent safety requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We deliver innovative solutions that optimize performance, enhance safety, 
              and ensure regulatory compliance across all phases of energy project development.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Pipeline Design & Engineering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Offshore Platform Structures</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Refinery & Processing Facilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Storage Tank Engineering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Renewable Energy Infrastructure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Environmental & Safety Assessment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upstream Operations</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our upstream engineering services cover exploration and production facilities, 
              including drilling platforms, wellhead structures, and production equipment 
              foundations. We design robust systems that withstand harsh environmental 
              conditions while maximizing operational efficiency.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Offshore drilling platforms</li>
              <li>• Onshore production facilities</li>
              <li>• Wellhead and Christmas tree systems</li>
              <li>• Subsea infrastructure</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Midstream Infrastructure</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We provide comprehensive engineering solutions for pipeline systems, 
              compression stations, and storage facilities. Our midstream expertise 
              ensures safe and efficient transportation of oil, gas, and refined products 
              across vast distances.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Long-distance pipeline systems</li>
              <li>• Compressor and pump stations</li>
              <li>• Terminal and storage facilities</li>
              <li>• Loading and unloading systems</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Downstream Processing</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our downstream engineering services encompass refineries, petrochemical plants, 
              and distribution networks. We design and optimize processing facilities that 
              meet stringent quality standards while maximizing throughput and minimizing 
              environmental impact.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Refinery process units</li>
              <li>• Petrochemical processing plants</li>
              <li>• Product distribution systems</li>
              <li>• Environmental control systems</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Power Your Energy Projects</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Partner with our energy engineering experts to develop safe, efficient, 
            and sustainable solutions for your oil, gas, and renewable energy operations.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OilGasEnergy;
