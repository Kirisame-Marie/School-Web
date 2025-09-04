'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';
import type { AuthUser } from '@/lib/auth';
import { BookOpen, Calendar, FileText, Award, LogOut, Bell } from 'lucide-react';

export default function StudentPortal() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await auth.getCurrentUser();
        if (!currentUser || currentUser.user_type !== 'student') {
          router.push('/login');
          return;
        }
        setUser(currentUser);
      } catch (error) {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your portal...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Student Portal</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user.full_name || user.email}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-blue-600 text-white p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {user.full_name || 'Student'}!</h2>
          <p className="text-blue-200">Here's what's happening in your academic journey</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Courses</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">View your current courses and assignments</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View Courses →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Grades</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Check your current grades and progress</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View Grades →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Schedule</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">View your class schedule and events</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View Schedule →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Assignments</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">View and submit your assignments</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View Assignments →
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Grades</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Mathematics Quiz #3</p>
                  <p className="text-sm text-gray-600">March 15, 2025</p>
                </div>
                <span className="text-green-600 font-bold text-lg">A-</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">English Essay</p>
                  <p className="text-sm text-gray-600">March 12, 2025</p>
                </div>
                <span className="text-blue-600 font-bold text-lg">B+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Science Lab Report</p>
                  <p className="text-sm text-gray-600">March 10, 2025</p>
                </div>
                <span className="text-green-600 font-bold text-lg">A</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Assignments</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <Bell className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-gray-900">History Research Paper</p>
                  <p className="text-sm text-gray-600">Due: March 22, 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Math Problem Set #8</p>
                  <p className="text-sm text-gray-600">Due: March 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <Award className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Science Project Presentation</p>
                  <p className="text-sm text-gray-600">Due: March 25, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}