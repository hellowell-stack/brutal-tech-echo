
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-neobrutalism-teal border-y-2 border-black py-16 my-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk">
            Stay Updated on Tech Trends
          </h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter and get the freshest tech insights delivered to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 flex-grow border-2 border-black shadow-neobrutalism-sm"
              required
            />
            <button
              type="submit"
              className="neo-button bg-black text-white font-bold py-3 px-6"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
