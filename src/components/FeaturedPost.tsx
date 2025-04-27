
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './BlogCard';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="bg-neobrutalism-yellow border-2 border-black shadow-neobrutalism mb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 z-10 font-bold text-lg">
        FEATURED
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Link to={`/category/${post.category.toLowerCase()}`}>
              <span className="inline-block bg-neobrutalism-pink text-white px-3 py-1 mb-4 font-bold border-2 border-black">
                {post.category}
              </span>
            </Link>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-space-grotesk">
              {post.title}
            </h2>
            
            <p className="text-lg mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center mb-6">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-3 border-2 border-black" 
              />
              <div>
                <span className="block text-sm">{post.author.name}</span>
                <span className="block text-sm text-gray-600">{post.date} • {post.readTime}</span>
              </div>
            </div>
            
            <Link 
              to={`/post/${post.id}`} 
              className="neo-button inline-flex items-center"
            >
              Read Article
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          
          <div className="order-1 md:order-2 border-4 border-black overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
