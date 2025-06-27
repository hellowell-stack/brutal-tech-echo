
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface DatabaseBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author_name: string;
  author_avatar: string | null;
  image_url: string | null;
  read_time: string | null;
  created_at: string;
  updated_at: string;
  published: boolean;
  user_id: string | null;
}

export interface CreateBlogPostData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author_name: string;
  author_avatar?: string;
  image_url?: string;
  read_time?: string;
  published?: boolean;
}

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          profiles(full_name, username, avatar_url)
        `)
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data as DatabaseBlogPost[];
    },
  });
};

export const useBlogPostsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['blog-posts', category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          profiles(full_name, username, avatar_url)
        `)
        .eq('published', true)
        .eq('category', category)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data as DatabaseBlogPost[];
    },
  });
};

export const useBlogPost = (id: string) => {
  return useQuery({
    queryKey: ['blog-post', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          profiles(full_name, username, avatar_url)
        `)
        .eq('id', id)
        .single();

      if (error) {
        throw error;
      }

      return data as DatabaseBlogPost;
    },
  });
};

export const useCreateBlogPost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (postData: CreateBlogPostData) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('Must be logged in to create posts');
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .insert({
          ...postData,
          user_id: user.id
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });
};

export const useUserBlogPosts = (userId?: string) => {
  return useQuery({
    queryKey: ['user-blog-posts', userId],
    queryFn: async () => {
      if (!userId) return [];
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data as DatabaseBlogPost[];
    },
    enabled: !!userId,
  });
};
