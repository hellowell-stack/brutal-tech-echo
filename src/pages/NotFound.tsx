
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-neobrutalism-yellow border-y-2 border-black">
        <div className="text-center max-w-xl mx-auto p-8">
          <h1 className="text-8xl font-bold mb-4 font-space-grotesk">404</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-2xl mb-8 font-medium">Oops! This page has disappeared into the digital void.</p>
          <Link to="/" className="neo-button bg-black text-white py-3 px-6">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
