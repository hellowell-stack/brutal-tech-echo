
import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SubscribeModal = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
      toast.success("Subscription successful!", {
        description: `You'll receive email notifications for new blog posts at ${email}`,
        duration: 5000,
      });
      setEmail('');
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-white border-2 border-black hover:bg-neobrutalism-yellow hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all shadow-neobrutalism-sm hover:shadow-neobrutalism">
          <Mail className="h-4 w-4" />
          Subscribe to Updates
        </Button>
      </DialogTrigger>
      <DialogContent className="border-2 border-black shadow-neobrutalism">
        <DialogHeader>
          <DialogTitle className="text-2xl">Subscribe to Blog Updates</DialogTitle>
          <DialogDescription>
            Get notified when new articles are published.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubscribe}>
          <div className="space-y-4 py-4">
            <Alert className="bg-neobrutalism-teal border-2 border-black">
              <AlertDescription>
                Enter your email to receive notifications about new blog posts!
              </AlertDescription>
            </Alert>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="border-2 border-black"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-black text-white hover:bg-black/80 hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all shadow-neobrutalism-sm hover:shadow-neobrutalism"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
