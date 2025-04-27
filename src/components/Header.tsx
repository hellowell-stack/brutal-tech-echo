
import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-space-grotesk text-3xl font-bold">TECH<span className="text-neobrutalism-pink">ECHO</span></Link>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-neobrutalism-pink font-medium">Home</Link>
          <Link to="/category/ai" className="hover:text-neobrutalism-pink font-medium">AI</Link>
          <Link to="/category/web3" className="hover:text-neobrutalism-pink font-medium">Web3</Link>
          <Link to="/category/startups" className="hover:text-neobrutalism-pink font-medium">Startups</Link>
          <Link to="/about" className="hover:text-neobrutalism-pink font-medium">About</Link>
          <button className="neo-button bg-black text-white">Subscribe</button>
        </nav>
        
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-black">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-neobrutalism-pink font-medium py-2">Home</Link>
              <Link to="/category/ai" className="hover:text-neobrutalism-pink font-medium py-2">AI</Link>
              <Link to="/category/web3" className="hover:text-neobrutalism-pink font-medium py-2">Web3</Link>
              <Link to="/category/startups" className="hover:text-neobrutalism-pink font-medium py-2">Startups</Link>
              <Link to="/about" className="hover:text-neobrutalism-pink font-medium py-2">About</Link>
              <button className="neo-button bg-black text-white w-full">Subscribe</button>
            </nav>
          </div>
        </div>
      )}
      
      {/* Ticker/Marquee */}
      <div className="marquee-container py-2">
        <div className="marquee-content font-bold text-black">
          BREAKING: OpenAI Unveils GPT-5 With Revolutionary Multi-Modal Capabilities • Microsoft Announces Windows 12 With AI-First Approach • Apple's Quantum Computing Division Makes Breakthrough • Twitter Rebrands Again • Tesla Releases Fully Autonomous Driving Feature • 
        </div>
      </div>
    </header>
  );
};

export default Header;
