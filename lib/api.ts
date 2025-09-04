import { supabase } from './supabase';
import type { ContactSubmission, NewsArticle, Event } from './supabase';

export const api = {
  // Contact form submissions
  async submitContactForm(data: Omit<ContactSubmission, 'id' | 'created_at'>) {
    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .single();

    if (error) throw error;
    return submission;
  },

  // Get contact submissions (admin only)
  async getContactSubmissions() {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // News articles
  async getNewsArticles(limit = 10) {
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  },

  async createNewsArticle(article: Omit<NewsArticle, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('news_articles')
      .insert([article])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Events
  async getEvents(startDate?: string, endDate?: string) {
    let query = supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });

    if (startDate) {
      query = query.gte('event_date', startDate);
    }
    if (endDate) {
      query = query.lte('event_date', endDate);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async createEvent(event: Omit<Event, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('events')
      .insert([event])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateEvent(id: string, updates: Partial<Event>) {
    const { data, error } = await supabase
      .from('events')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteEvent(id: string) {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};