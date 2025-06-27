
import { DatabaseBlogPost } from '@/hooks/useBlogPosts';
import { BlogPost } from '@/components/BlogCard';

export const convertDatabasePostToBlogPost = (dbPost: DatabaseBlogPost): BlogPost => {
  return {
    id: dbPost.id,
    title: dbPost.title,
    excerpt: dbPost.excerpt,
    category: dbPost.category,
    date: new Date(dbPost.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: dbPost.read_time || '5 min read',
    image: dbPost.image_url || '/placeholder.svg',
    author: {
      name: dbPost.author_name,
      avatar: dbPost.author_avatar || '/placeholder.svg'
    }
  };
};
