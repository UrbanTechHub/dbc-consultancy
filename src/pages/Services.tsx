
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Building2, Fuel, Zap, Beaker } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Building & Construction",
      description: "Comprehensive structural engineering solutions for residential, commercial, and industrial construction projects of all scales.",
      icon: <Building2 className="text-blue-600" size={28} />,
      link: "/services/building-construction"
    },
    {
      title: "Oil, Gas & Energy", 
      description: "Advanced engineering solutions for upstream, midstream, and downstream operations in the oil, gas, and renewable energy sectors.",
      icon: <Fuel className="text-orange-600" size={28} />,
      link: "/services/oil-gas-energy"
    },
    {
      title: "Power & Utilities",
      description: "Comprehensive engineering solutions for power generation, transmission, distribution, and utility infrastructure projects worldwide.",
      icon: <Zap className="text-yellow-600" size={28} />,
      link: "/services/power-utilities"
    },
    {
      title: "Chemicals & Petrochemicals",
      description: "Specialized engineering solutions for chemical processing, petrochemical manufacturing, and specialty chemical production facilities.",
      icon: <Beaker className="text-purple-600" size={28} />,
      link: "/services/chemicals-petrochemicals"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DBC Consultancy delivers comprehensive civil engineering solutions across 
            diverse industries, combining technical expertise with innovative thinking.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        {/* Why Choose Our Services Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine decades of engineering expertise with cutting-edge technology 
              to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">25+</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Years of Experience</h3>
              <p className="text-gray-600 text-sm">Proven track record across multiple industries</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">500+</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Projects Completed</h3>
              <p className="text-gray-600 text-sm">Successfully delivered worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">100%</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600 text-sm">Commitment to excellence in every project</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
