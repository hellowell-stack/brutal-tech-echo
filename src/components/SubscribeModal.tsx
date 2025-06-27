
import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const SubscribeModal = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // unique constraint violation
          toast.error("Already subscribed!", {
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        setIsOpen(false);
        toast.success("Successfully subscribed!", {
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      toast.error("Subscription failed", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-black text-white font-bold py-3 px-6 border-2 border-black hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all shadow-neobrutalism-sm hover:shadow-neobrutalism text-lg">
          Subscribe Now
        </Button>
      </DialogTrigger>
      <DialogContent className="border-2 border-black shadow-neobrutalism">
        <DialogHeader>
          <DialogTitle className="text-2xl">Subscribe to Our Newsletter</DialogTitle>
          <DialogDescription>
            Get the latest tech insights and updates delivered directly to your inbox.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="border-2 border-black"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-neobrutalism-pink text-white hover:bg-neobrutalism-pink/90 hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all shadow-neobrutalism-sm hover:shadow-neobrutalism"
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
