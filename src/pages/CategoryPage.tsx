
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';
import { blogPosts, categories } from '../data/blogPosts';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = categories.find(
    cat => cat.toLowerCase() === slug
  ) || 'Unknown Category';
  
  const filteredPosts = blogPosts.filter(
    post => post.category.toLowerCase() === slug
  );
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="border-b-4 border-neobrutalism-pink mb-8 pb-4">
          <h1 className="text-4xl font-bold font-space-grotesk">{categoryName}</h1>
          <p className="text-lg text-gray-600 mt-2">
            The latest articles and insights about {categoryName.toLowerCase()} technology.
          </p>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No articles found</h2>
            <p className="mb-4">There are no articles in this category yet.</p>
          </div>
        )}
      </main>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
