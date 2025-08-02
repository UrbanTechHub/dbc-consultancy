
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Building2, Wrench, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BuildingConstruction = () => {
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
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 text-white">
              <div className="flex items-center mb-6">
                <Building2 size={48} className="mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Building & Construction
                </h1>
              </div>
              <p className="text-xl opacity-90 leading-relaxed">
                Comprehensive structural engineering solutions for residential, commercial, 
                and industrial construction projects of all scales.
              </p>
            </div>
            <div className="h-64 md:h-auto">
              <img 
                src="/lovable-uploads/b0c51fd1-ac15-4b2c-81bb-e05bc9fb022e.png" 
                alt="Construction site with concrete buildings under construction" 
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
              DBC Consultancy brings decades of experience in building and construction 
              engineering, delivering innovative structural solutions that combine safety, 
              efficiency, and aesthetic appeal. Our comprehensive approach covers every 
              phase from conceptual design to construction completion.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in complex structural challenges, sustainable building practices, 
              and cutting-edge construction technologies that ensure your project meets 
              the highest standards of quality and performance.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Structural Design & Analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Foundation Engineering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Seismic Design & Retrofit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Construction Management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Building Information Modeling (BIM)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-600">Sustainable Design Consultation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Construction</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              From custom homes to large residential developments, we provide comprehensive 
              structural engineering services that ensure safety, durability, and 
              architectural flexibility. Our residential expertise includes foundation 
              design, framing systems, and specialized solutions for challenging terrain.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Single-family homes</li>
              <li>• Multi-family developments</li>
              <li>• Townhouses & condominiums</li>
              <li>• Luxury custom residences</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Projects</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our commercial construction expertise spans office buildings, retail centers, 
              healthcare facilities, and educational institutions. We deliver cost-effective 
              solutions that meet stringent building codes while optimizing space utilization 
              and operational efficiency.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Office buildings & corporate headquarters</li>
              <li>• Shopping centers & retail spaces</li>
              <li>• Hospitals & medical facilities</li>
              <li>• Schools & universities</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial Construction</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Heavy industrial construction requires specialized knowledge of dynamic loads, 
              equipment foundations, and process-specific requirements. We design robust 
              structures that withstand industrial operations while ensuring worker safety 
              and environmental compliance.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Manufacturing facilities</li>
              <li>• Warehouses & distribution centers</li>
              <li>• Processing plants</li>
              <li>• Equipment foundations</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mt-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Vision?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Let our structural engineering experts help you bring your construction 
            project to life with innovative, safe, and cost-effective solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuildingConstruction;
