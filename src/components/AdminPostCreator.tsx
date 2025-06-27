
import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminPostCreator = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postExcerpt, setPostExcerpt] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const categories = ['AI', 'Web3', 'Mobile', 'Cloud', 'DevOps', 'Design'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([
          {
            title: postTitle,
            excerpt: postExcerpt,
            content: postContent,
            category: postCategory,
            author_name: authorName || 'Admin',
            author_avatar: '/placeholder.svg',
            image_url: imageUrl || '/placeholder.svg',
            read_time: `${Math.ceil(postContent.split(' ').length / 200)} min read`,
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      setIsOpen(false);
      
      // Show success toast
      toast.success("Blog post created!", {
        description: "Your new post has been published successfully.",
      });
      
      // Reset form
      setPostTitle('');
      setPostExcerpt('');
      setPostContent('');
      setPostCategory('');
      setAuthorName('');
      setImageUrl('');
      
      // Refresh the page to show the new post
      window.location.reload();
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error("Failed to create post", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-black text-white font-bold py-2 px-4 border-2 border-black hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all shadow-neobrutalism-sm hover:shadow-neobrutalism">
          Create New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="border-2 border-black shadow-neobrutalism max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Blog Post</DialogTitle>
          <DialogDescription>
            Fill in the details for your new blog post. It will be published immediately.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Post Title *
                </label>
                <Input
                  id="title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="Enter post title"
                  required
                  className="border-2 border-black"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category *
                </label>
                <Select value={postCategory} onValueChange={setPostCategory} required>
                  <SelectTrigger className="border-2 border-black">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="author" className="text-sm font-medium">
                  Author Name
                </label>
                <Input
                  id="author"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Author name (optional)"
                  className="border-2 border-black"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Image URL
                </label>
                <Input
                  id="image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Image URL (optional)"
                  className="border-2 border-black"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="excerpt" className="text-sm font-medium">
                Post Excerpt *
              </label>
              <Textarea
                id="excerpt"
                value={postExcerpt}
                onChange={(e) => setPostExcerpt(e.target.value)}
                placeholder="Brief description of the post"
                required
                className="min-h-[80px] border-2 border-black"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                Post Content *
              </label>
              <Textarea
                id="content"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Write your full blog post content here..."
                required
                className="min-h-[300px] border-2 border-black"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-neobrutalism-pink text-white hover:bg-neobrutalism-pink/90 hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all shadow-neobrutalism-sm hover:shadow-neobrutalism"
            >
              {isLoading ? "Publishing..." : "Publish Post"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPostCreator;
