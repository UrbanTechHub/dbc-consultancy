
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact DBC Consultancy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next engineering project? Get in touch with our 
            expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <Input id="company" placeholder="Enter your company name" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select a service</option>
                  <option>Building and Construction</option>
                  <option>Oil, Gas and Energy</option>
                  <option>Power and Utilities</option>
                  <option>Chemicals and Petrochemicals</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <Button className="w-full bg-blue-600 text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@dbcconsultancy.com</p>
                    <p className="text-gray-600">projects@dbcconsultancy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      5 Brayford Square<br />
                      London. E1 0SG
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6 opacity-90">
                Our engineering experts are standing by to discuss your unique requirements 
                and provide tailored solutions for your next project.
              </p>
              <Button variant="secondary" className="bg-white text-blue-600">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
