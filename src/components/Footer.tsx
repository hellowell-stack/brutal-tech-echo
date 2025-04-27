
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-12 border-t-4 border-neobrutalism-pink">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-space-grotesk">TECH<span className="text-neobrutalism-pink">ECHO</span></h3>
            <p className="mb-4">Cutting-edge insights on the latest tech trends and innovations.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-neobrutalism-pink">Twitter</a>
              <a href="#" className="hover:text-neobrutalism-pink">LinkedIn</a>
              <a href="#" className="hover:text-neobrutalism-pink">Instagram</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/ai" className="hover:text-neobrutalism-pink">AI & Machine Learning</Link></li>
              <li><Link to="/category/web3" className="hover:text-neobrutalism-pink">Web3 & Blockchain</Link></li>
              <li><Link to="/category/startups" className="hover:text-neobrutalism-pink">Startups & VC</Link></li>
              <li><Link to="/category/gadgets" className="hover:text-neobrutalism-pink">Gadgets & Hardware</Link></li>
              <li><Link to="/category/cybersecurity" className="hover:text-neobrutalism-pink">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-neobrutalism-pink">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-neobrutalism-pink">Contact</Link></li>
              <li><Link to="/write-for-us" className="hover:text-neobrutalism-pink">Write for Us</Link></li>
              <li><Link to="/advertise" className="hover:text-neobrutalism-pink">Advertise</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="mb-4">Get the latest tech news delivered to your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-white text-black flex-grow border-2 border-black"
              />
              <button className="bg-neobrutalism-pink px-4 py-2 font-bold border-2 border-black">
                →
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} TechEcho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
