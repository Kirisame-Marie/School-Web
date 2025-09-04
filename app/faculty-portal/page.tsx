'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/auth';
import type { AuthUser } from '@/lib/auth';
import { Users, BookOpen, Calendar, FileText, LogOut, Plus, BarChart3 } from 'lucide-react';

export default function FacultyPortal() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await auth.getCurrentUser();
        if (!currentUser || currentUser.user_type !== 'faculty') {
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
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
            <h1 className="text-2xl font-bold text-gray-900">Faculty Portal</h1>
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
        <div className="bg-green-600 text-white p-8 rounded-xl mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {user.full_name || 'Faculty'}!</h2>
          <p className="text-green-200">Manage your classes, students, and academic content</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">My Classes</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Manage your class rosters and student information</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View Classes →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Gradebook</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Enter and manage student grades</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Open Gradebook →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Assignments</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Create and manage assignments</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Manage Assignments →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Schedule</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">View your teaching schedule</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View Schedule →
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Recent Submissions</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Math Quiz #3 - John Smith</p>
                  <p className="text-sm text-gray-600">Submitted 2 hours ago</p>
                </div>
                <span className="text-yellow-600 font-medium text-sm">Pending</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Essay Assignment - Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Submitted 4 hours ago</p>
                </div>
                <span className="text-green-600 font-medium text-sm">Graded</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Lab Report - Mike Chen</p>
                  <p className="text-sm text-gray-600">Submitted yesterday</p>
                </div>
                <span className="text-green-600 font-medium text-sm">Graded</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Upcoming Classes</h3>
              <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                <Plus className="h-4 w-4" />
                <span>Add Event</span>
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-blue-600 font-bold text-sm">9:00 AM</div>
                <div>
                  <p className="font-medium text-gray-900">Advanced Mathematics</p>
                  <p className="text-sm text-gray-600">Room 204 • 25 students</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-green-600 font-bold text-sm">11:00 AM</div>
                <div>
                  <p className="font-medium text-gray-900">Algebra II</p>
                  <p className="text-sm text-gray-600">Room 204 • 22 students</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="text-purple-600 font-bold text-sm">2:00 PM</div>
                <div>
                  <p className="font-medium text-gray-900">Geometry</p>
                  <p className="text-sm text-gray-600">Room 204 • 20 students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}