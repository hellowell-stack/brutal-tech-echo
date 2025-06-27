
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedPost from '../components/FeaturedPost';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';
import CategoryPill from '../components/CategoryPill';
import AdminPostCreator from '../components/AdminPostCreator';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { convertDatabasePostToBlogPost } from '../utils/blogPostConverter';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: dbPosts, isLoading, error } = useBlogPosts();
  const { user } = useAuth();
  
  const categories = ['All', 'AI', 'Web3', 'Mobile', 'Cloud', 'DevOps', 'Design'];
  
  const blogPosts = dbPosts?.map(convertDatabasePostToBlogPost) || [];
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  const featuredPost = blogPosts[0];

  if (error) {
    console.error('Error loading blog posts:', error);
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Featured Post */}
        {featuredPost && <FeaturedPost post={featuredPost} />}
        
        {/* Admin Section - Only show if user is logged in */}
        {user && (
          <section className="container mx-auto px-4 mt-8">
            <div className="bg-neobrutalism-yellow p-6 border-4 border-black mb-8">
              <AdminPostCreator />
            </div>
          </section>
        )}
        
        {/* Categories */}
        <section className="container mx-auto px-4 my-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <CategoryPill 
                key={category} 
                category={category} 
                active={category === activeCategory}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </section>
        
        {/* Latest Articles */}
        <section className="container mx-auto px-4 my-12">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-neobrutalism-pink pb-2 inline-block">
            {activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`}
          </h2>
          
          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-lg">Loading posts...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg">
                {user 
                  ? "No posts found. Create your first post using the form above!" 
                  : "No posts found. Login to start creating posts!"
                }
              </p>
            </div>
          )}
        </section>
        
        {/* Tech Insights */}
        <section className="bg-black text-white border-y-2 border-neobrutalism-pink py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Tech Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neobrutalism-pink p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-4">AI & Machine Learning</h3>
                <p className="mb-4">From deep learning breakthroughs to practical applications, stay updated on how AI is changing our world.</p>
                <button onClick={() => setActiveCategory('AI')} className="text-black font-bold hover:underline">Read more →</button>
              </div>
              
              <div className="bg-neobrutalism-yellow text-black p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-4">Web3 & Blockchain</h3>
                <p className="mb-4">Explore the decentralized future with our coverage of cryptocurrencies, NFTs, DAOs, and blockchain technology.</p>
                <button onClick={() => setActiveCategory('Web3')} className="font-bold hover:underline">Read more →</button>
              </div>
              
              <div className="bg-neobrutalism-teal text-black p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-4">Emerging Tech</h3>
                <p className="mb-4">Quantum computing, biotechnology, space tech, and other cutting-edge innovations shaping our future.</p>
                <button onClick={() => setActiveCategory('Cloud')} className="font-bold hover:underline">Read more →</button>
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
