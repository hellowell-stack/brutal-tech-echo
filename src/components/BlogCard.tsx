
import React from 'react';
import { Link } from 'react-router-dom';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <Link to={`/post/${post.id}`} className={`block ${featured ? 'col-span-2 row-span-2' : ''}`}>
      <div className={`neo-card h-full flex flex-col ${featured ? 'p-6' : 'p-4'}`}>
        <div className="relative mb-4 overflow-hidden border-2 border-black">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-0 left-0 bg-neobrutalism-pink text-white px-3 py-1 font-bold text-sm border-r-2 border-b-2 border-black">
            {post.category}
          </span>
        </div>
        
        <div className="flex-grow">
          <div className="mb-2 flex items-center space-x-2 text-sm">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className={`font-space-grotesk font-bold mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          
          <p className="text-gray-700 mb-4">{post.excerpt}</p>
        </div>
        
        <div className="flex items-center mt-auto">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-8 h-8 rounded-full mr-2 border border-black" 
          />
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
