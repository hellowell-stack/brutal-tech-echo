
import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import notificationService from '../utils/NotificationService';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AdminPostCreator = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to create post
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
      
      // Show toast notification
      toast.success("Blog post created!", {
        description: "Your new post has been published successfully.",
      });
      
      // Notify subscribers
      notificationService.notifySubscribers(postTitle);
      
      // Reset form
      setPostTitle('');
      setPostContent('');
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-black text-white font-bold py-2 px-4 border-2 border-black hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all shadow-neobrutalism-sm hover:shadow-neobrutalism">
          Create New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="border-2 border-black shadow-neobrutalism max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Blog Post</DialogTitle>
          <DialogDescription>
            Fill in the details for your new blog post. It will be published immediately.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Post Title
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
              <label htmlFor="content" className="text-sm font-medium">
                Post Content
              </label>
              <Textarea
                id="content"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Enter post content"
                required
                className="min-h-[200px] border-2 border-black"
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
