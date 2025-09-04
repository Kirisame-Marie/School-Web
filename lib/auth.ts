import { supabase } from './supabase';

export interface AuthUser {
  id: string;
  email: string;
  user_type: 'student' | 'faculty';
  full_name?: string;
}

export const auth = {
  // Sign up new user
  async signUp(email: string, password: string, userType: 'student' | 'faculty', fullName?: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_type: userType,
          full_name: fullName
        }
      }
    });

    if (error) throw error;
    return data;
  },

  // Sign in user
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return data;
  },

  // Sign out user
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  // Get current user
  async getCurrentUser(): Promise<AuthUser | null> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return null;

    return {
      id: user.id,
      email: user.email!,
      user_type: user.user_metadata?.user_type || 'student',
      full_name: user.user_metadata?.full_name
    };
  },

  // Listen to auth changes
  onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        callback({
          id: session.user.id,
          email: session.user.email!,
          user_type: session.user.user_metadata?.user_type || 'student',
          full_name: session.user.user_metadata?.full_name
        });
      } else {
        callback(null);
      }
    });
  }
};