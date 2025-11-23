import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Youtube, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="font-bold text-xl mb-4 flex items-center justify-center md:justify-start">
              <Heart size={20} className="mr-2 text-orange-400" /> InnoHeza Ltd.
            </h3>
            <p className="text-teal-200">
              Making the world a safer, healthier space through need-driven innovation in global health.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/solution" className="block hover:text-orange-400 transition-colors">Our Solution</Link>
              <Link to="/team" className="block hover:text-orange-400 transition-colors">The Team</Link>
              <Link to="/impact" className="block hover:text-orange-400 transition-colors">Impact</Link>
              <Link to="/roadmap" className="block hover:text-orange-400 transition-colors">Roadmap</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Join Us & Stories</h3>
            <div className="space-y-2">
              <Link to="/join-us" className="block hover:text-orange-400 transition-colors">Partner, Invest, Donate</Link>
              <Link to="/updates" className="block hover:text-orange-400 transition-colors">Stories / Progress Updates</Link>
              <p className="text-sm text-teal-300">Newsletter (Sign Up)</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center md:justify-start gap-2 text-teal-100">
                <Mail size={18} className="text-orange-400" /> Contact (Placeholder Email)
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="hover:text-orange-400 transition-colors"><Twitter size={24} /></a>
                <a href="#" className="hover:text-orange-400 transition-colors"><Youtube size={24} /></a>
                <a href="#" className="hover:text-orange-400 transition-colors"><Instagram size={24} /></a>
              </div>
              <p className="text-sm text-teal-300 pt-2">Legal Info (T&C, Privacy)</p>
            </div>
          </div>

        </div>
        <div className="border-t border-teal-700 mt-8 pt-8 text-center text-teal-300">
          <p>&copy; 2025 InnoMeza Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;