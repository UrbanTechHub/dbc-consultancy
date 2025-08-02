
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Building2, Fuel, Zap, Beaker, ArrowRight, CheckCircle, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-center">
                Engineering Excellence
                <span className="block text-blue-300">Delivered Globally</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-90">
                DBC Consultancy provides world-class civil engineering solutions across 
                building construction, energy, utilities, and chemical industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-white text-blue-900 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
                    Explore Our Services
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white bg-transparent px-8 py-4 text-lg hover:bg-white/10 transition-colors">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/lovable-uploads/803c0534-f6e5-49a5-8c5f-f75147bd6253.png"
                alt="Construction engineers reviewing building plans on site"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Engineering Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions across diverse industries, 
              delivered with precision and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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

          {/* Engineering Expertise Visual */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/cba7d778-46b8-4f2a-ad19-1a8bff264bec.png"
                  alt="Engineering professionals collaborating on construction project"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Excellence</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our experienced team of engineers brings together decades of expertise 
                  in civil engineering, project management, and innovative design solutions. 
                  We collaborate closely with clients to ensure every project meets the 
                  highest standards of quality and safety.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">Certified Professional Engineers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">Industry-Leading Safety Standards</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">Innovative Design Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose DBC Consultancy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with innovative thinking to deliver 
              exceptional engineering solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-blue-50 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of expert engineers delivers cutting-edge solutions 
                using the latest technologies and industry best practices.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-50 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with clients throughout every project phase, 
                ensuring clear communication and aligned objectives.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-purple-50 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                With a track record of successful projects across multiple 
                industries, we deliver reliable solutions on time and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Connect with our engineering experts to discuss your unique requirements 
            and discover how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 px-8 py-4 text-lg hover:bg-gray-100 transition-colors">
                Get Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent px-8 py-4 text-lg hover:bg-white/10 transition-colors">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
