
import { toast } from "@/components/ui/sonner";

class NotificationService {
  private subscribers: string[] = [];
  
  constructor() {
    // Try to load subscribers from localStorage
    const savedSubscribers = localStorage.getItem('blog-subscribers');
    if (savedSubscribers) {
      try {
        this.subscribers = JSON.parse(savedSubscribers);
      } catch (e) {
        console.error('Failed to parse subscribers from localStorage');
      }
    }
  }

  addSubscriber(email: string): boolean {
    if (!this.isValidEmail(email)) {
      return false;
    }

    if (this.subscribers.includes(email)) {
      return true; // Already subscribed
    }

    this.subscribers.push(email);
    this.saveToLocalStorage();
    return true;
  }

  removeSubscriber(email: string): boolean {
    const initialLength = this.subscribers.length;
    this.subscribers = this.subscribers.filter(sub => sub !== email);
    this.saveToLocalStorage();
    return this.subscribers.length !== initialLength;
  }

  getSubscribers(): string[] {
    return [...this.subscribers];
  }

  notifySubscribers(postTitle: string): void {
    console.log(`Simulating sending email notifications to ${this.subscribers.length} subscribers about new post: ${postTitle}`);
    
    // In a real app, this would call a backend API to send actual emails
    toast.success(`New blog post published: "${postTitle}"`, {
      description: `Notification sent to ${this.subscribers.length} subscribers`,
    });
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('blog-subscribers', JSON.stringify(this.subscribers));
  }
}

// Create a singleton instance
const notificationService = new NotificationService();
export default notificationService;
