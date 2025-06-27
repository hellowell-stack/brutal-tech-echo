
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';
import { useCreateBlogPost } from '@/hooks/useBlogPosts';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const AdminPostCreator = () => {
  const { user } = useAuth();
  const { data: profile } = useProfile(user?.id);
  const createBlogPost = useCreateBlogPost();
  const { toast } = useToast();
  
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('AI');
  const [imageUrl, setImageUrl] = useState('');
  const [readTime, setReadTime] = useState('5 min read');

  if (!user) {
    return (
      <div className="text-center p-4">
        <p className="mb-4">You need to be logged in to create blog posts.</p>
        <Link to="/auth" className="neo-button">
          Login to Create Posts
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Title and content are required",
        variant: "destructive"
      });
      return;
    }

    try {
      await createBlogPost.mutateAsync({
        title: title.trim(),
        excerpt: excerpt.trim() || title.substring(0, 100) + '...',
        content: content.trim(),
        category,
        author_name: profile?.full_name || user.email || 'Anonymous',
        author_avatar: profile?.avatar_url,
        image_url: imageUrl.trim() || '/placeholder.svg',
        read_time: readTime,
        published: true
      });

      // Reset form
      setTitle('');
      setExcerpt('');
      setContent('');
      setCategory('AI');
      setImageUrl('');
      setReadTime('5 min read');

      toast({
        title: "Success",
        description: "Blog post created successfully!"
      });
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast({
        title: "Error",
        description: "Failed to create blog post. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-bold mb-2">
            Title *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-neobrutalism-pink"
            placeholder="Enter blog post title"
            required
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-bold mb-2">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-neobrutalism-pink"
            rows={2}
            placeholder="Brief description (optional - will auto-generate if empty)"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-bold mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-neobrutalism-pink"
          >
            {['AI', 'Web3', 'Mobile', 'Cloud', 'DevOps', 'Design'].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            id="imageUrl"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-neobrutalism-pink"
            placeholder="https://example.com/image.jpg (optional)"
          />
        </div>

        <div>
          <label htmlFor="readTime" className="block text-sm font-bold mb-2">
            Read Time
          </label>
          <input
            id="readTime"
            type="text"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-neobrutalism-pink"
            placeholder="5 min read"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-bold mb-2">
            Content *
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-neobrutalism-pink"
            rows={10}
            placeholder="Write your blog post content here..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={createBlogPost.isPending}
          className="neo-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {createBlogPost.isPending ? 'Creating Post...' : 'Create Blog Post'}
        </button>
      </form>
    </div>
  );
};

export default AdminPostCreator;
