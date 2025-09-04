'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, User, Users, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function Login() {
  const [userType, setUserType] = useState<'student' | 'faculty' | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { ...formData, userType });
    alert(`Login attempted for ${userType} with email: ${formData.email}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-6">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Please select your account type to continue</p>
          </div>

          {/* User Type Selection */}
          <div className="space-y-4">
            <button
              onClick={() => setUserType('student')}
              className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 p-6 rounded-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 group-hover:bg-blue-200 p-3 rounded-full transition-colors">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Student Portal</h3>
                  <p className="text-gray-600 text-sm">Access grades, assignments, and school resources</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setUserType('faculty')}
              className="w-full bg-white border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 p-6 rounded-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 group-hover:bg-green-200 p-3 rounded-full transition-colors">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Faculty Portal</h3>
                  <p className="text-gray-600 text-sm">Manage classes, grades, and student information</p>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Need help? Contact IT support at{' '}
              <a href="mailto:support@brightfuture.edu" className="text-blue-600 hover:underline">
                support@brightfuture.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => setUserType(null)}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Change Account Type</span>
          </button>
          
          <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-full ${userType === 'student' ? 'bg-blue-600' : 'bg-green-600'}`}>
              {userType === 'student' ? (
                <User className="h-8 w-8 text-white" />
              ) : (
                <Users className="h-8 w-8 text-white" />
              )}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {userType === 'student' ? 'Student' : 'Faculty'} Login
          </h1>
          <p className="text-gray-600">
            Sign in to access your {userType === 'student' ? 'student' : 'faculty'} portal
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {userType === 'student' ? 'Student Email' : 'Faculty Email'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder={userType === 'student' ? 'student@brightfuture.edu' : 'faculty@brightfuture.edu'}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg ${
                userType === 'student' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              Sign In to {userType === 'student' ? 'Student' : 'Faculty'} Portal
            </button>
          </div>

          {/* Additional Links */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center space-y-2">
              {userType === 'student' && (
                <p className="text-sm text-gray-600">
                  New student?{' '}
                  <Link href="/admissions" className="text-blue-600 hover:text-blue-700 hover:underline">
                    Apply for admission
                  </Link>
                </p>
              )}
              <p className="text-sm text-gray-600">
                Need technical support?{' '}
                <a href="mailto:support@brightfuture.edu" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Contact IT Help Desk
                </a>
              </p>
            </div>
          </div>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="text-sm font-semibold text-yellow-800 mb-2">Demo Credentials</h4>
          <div className="text-xs text-yellow-700 space-y-1">
            <p><strong>Student:</strong> student@brightfuture.edu / demo123</p>
            <p><strong>Faculty:</strong> faculty@brightfuture.edu / demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
}