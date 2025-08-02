
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Globe, Target, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About DBC Consultancy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the future of engineering excellence with innovative solutions 
            across diverse industries worldwide.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                DBC Consultancy stands at the forefront of civil engineering excellence, 
                delivering comprehensive solutions across multiple industrial sectors. 
                With decades of combined expertise, we specialize in complex engineering 
                challenges that require innovative thinking and technical precision.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our multidisciplinary approach ensures that every project benefits from 
                our deep understanding of structural, environmental, and process engineering, 
                making us the preferred partner for clients worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to sustainability, safety, and delivering projects that 
                meet the highest industry standards while contributing to economic growth 
                and environmental stewardship.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Globe className="text-blue-600" size={28} />
                </div>
                <p className="font-semibold text-gray-900">Global Reach</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Award className="text-green-600" size={28} />
                </div>
                <p className="font-semibold text-gray-900">Award Winning</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Users className="text-purple-600" size={28} />
                </div>
                <p className="font-semibold text-gray-900">Expert Team</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-50 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Target className="text-orange-600" size={28} />
                </div>
                <p className="font-semibold text-gray-900">Precision Focus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide world-class civil engineering solutions that drive innovation, 
              ensure safety, and create sustainable value for our clients and communities. 
              We are dedicated to excellence in every project we undertake.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading civil engineering consultancy globally, recognized for 
              our technical expertise, innovative solutions, and commitment to building 
              a better, more sustainable future through engineering excellence.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* CEO */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="/lovable-uploads/9e19df9c-196f-46ab-83a8-fe128a060b5e.png"
                  alt="David Bradley"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">David Bradley</h3>
              <p className="text-blue-600 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                David brings over 25 years of engineering leadership experience, 
                driving strategic vision and ensuring operational excellence across 
                all sectors with his innovative approach to complex engineering challenges.
              </p>
              <div className="text-sm text-gray-500 space-y-1 mb-4">
                <p>• M.Sc. Civil Engineering</p>
                <p>• Professional Engineer (PE)</p>
                <p>• 25+ Years Experience</p>
              </div>
              <a 
                href="https://www.linkedin.com/in/charles-david-bradley-9b331323a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Director of Operations */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="/lovable-uploads/2a95bea7-c09d-48ab-8032-8ec67383fe5d.png"
                  alt="Henry Mason"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Henry Mason</h3>
              <p className="text-green-600 font-semibold mb-4">Director of Operations</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Henry oversees project execution and quality assurance across all 
                engineering disciplines, ensuring projects are delivered on time and 
                within budget while maintaining the highest standards of excellence.
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>• M.Sc. Project Management</p>
                <p>• PMP Certified</p>
                <p>• 18+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
