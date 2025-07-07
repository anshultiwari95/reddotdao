'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for existing authentication on mount
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('youtube-dao-user');
      if (savedUser) {
        try {
          const userData = JSON.parse(savedUser);
          setUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error parsing saved user data:', error);
          localStorage.removeItem('youtube-dao-user');
        }
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email, password) => {
    try {
      // Simulate authentication API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: Date.now().toString(),
        email,
        username: email.split('@')[0],
        createdAt: new Date().toISOString(),
        dataPoints: 0,
        contributions: 0,
        rank: 'Newcomer'
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('youtube-dao-user', JSON.stringify(userData));
      }
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Sign in error:', error);
      return { success: false, error: 'Sign in failed' };
    }
  };

  const signUp = async (email, password, username) => {
    try {
      // Simulate registration API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: Date.now().toString(),
        email,
        username: username || email.split('@')[0],
        createdAt: new Date().toISOString(),
        dataPoints: 0,
        contributions: 0,
        rank: 'Newcomer'
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('youtube-dao-user', JSON.stringify(userData));
      }
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Sign up error:', error);
      return { success: false, error: 'Sign up failed' };
    }
  };

  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('youtube-dao-user');
    }
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem('youtube-dao-user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    isAuthenticated: mounted ? isAuthenticated : false,
    user: mounted ? user : null,
    loading: mounted ? loading : true,
    signIn,
    signUp,
    signOut,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 