
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedPost from '../components/FeaturedPost';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';
import CategoryPill from '../components/CategoryPill';
import { blogPosts, categories, featuredPost } from '../data/blogPosts';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Featured Post */}
        <FeaturedPost post={featuredPost} />
        
        {/* Categories */}
        <section className="container mx-auto px-4 my-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <CategoryPill 
                key={category} 
                category={category} 
                active={category === activeCategory} 
              />
            ))}
          </div>
        </section>
        
        {/* Latest Articles */}
        <section className="container mx-auto px-4 my-12">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-neobrutalism-pink pb-2 inline-block">
            {activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
        
        {/* Tech Insights */}
        <section className="bg-black text-white border-y-2 border-neobrutalism-pink py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Tech Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Column */}
              <div className="bg-neobrutalism-pink p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-4">AI & Machine Learning</h3>
                <p className="mb-4">From deep learning breakthroughs to practical applications, stay updated on how AI is changing our world.</p>
                <a href="#" className="text-black font-bold hover:underline">Read more →</a>
              </div>
              
              {/* Second Column */}
              <div className="bg-neobrutalism-yellow text-black p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-4">Web3 & Blockchain</h3>
                <p className="mb-4">Explore the decentralized future with our coverage of cryptocurrencies, NFTs, DAOs, and blockchain technology.</p>
                <a href="#" className="font-bold hover:underline">Read more →</a>
              </div>
              
              {/* Third Column */}
              <div className="bg-neobrutalism-teal text-black p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-4">Emerging Tech</h3>
                <p className="mb-4">Quantum computing, biotechnology, space tech, and other cutting-edge innovations shaping our future.</p>
                <a href="#" className="font-bold hover:underline">Read more →</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
