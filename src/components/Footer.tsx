import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif text-white mb-4">Estudio 43</h3>
            <p className="text-stone-400">
              Crafting timeless wooden furniture with passion and precision since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>contact@estudio43.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Craftsman Lane, Design District</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-white mb-4">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
          © {new Date().getFullYear()} Estudio 43. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;