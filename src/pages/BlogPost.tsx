
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { useBlogPost, useBlogPosts } from '../hooks/useBlogPosts';
import { convertDatabasePostToBlogPost } from '../utils/blogPostConverter';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { data: dbPost, isLoading, error } = useBlogPost(id!);
  const { data: allPosts } = useBlogPosts();
  
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Loading...</h1>
            <p>Please wait while we load the blog post.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !dbPost) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">Sorry, the post you're looking for doesn't exist.</p>
            <Link to="/" className="neo-button">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const post = convertDatabasePostToBlogPost(dbPost);
  const relatedPosts = allPosts
    ?.filter(p => p.id !== dbPost.id && p.category === dbPost.category)
    ?.slice(0, 2)
    ?.map(convertDatabasePostToBlogPost) || [];
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <Link to={`/category/${post.category.toLowerCase()}`}>
            <span className="inline-block bg-neobrutalism-pink text-white px-3 py-1 mb-4 font-bold border-2 border-black">
              {post.category}
            </span>
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space-grotesk">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-6">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full mr-4 border-2 border-black" 
            />
            <div>
              <span className="block font-medium">{post.author.name}</span>
              <span className="block text-gray-600">
                {post.date} • {post.readTime}
              </span>
            </div>
          </div>
          
          <div className="border-4 border-black mb-8 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6">{post.excerpt}</p>
            
            <div className="whitespace-pre-wrap">
              {dbPost.content}
            </div>
          </div>
        </article>
        
        {relatedPosts.length > 0 && (
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t-2 border-black">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link to={`/post/${relatedPost.id}`} key={relatedPost.id} className="block">
                  <div className="neo-card h-full">
                    <div className="relative mb-3 overflow-hidden border-2 border-black">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <h4 className="font-bold mb-2">{relatedPost.title}</h4>
                    <span className="text-sm text-gray-600">{relatedPost.date} • {relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPost;
