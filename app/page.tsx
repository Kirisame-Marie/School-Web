import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import CountingStats from '@/components/CountingStats';
import AcademicCalendar from '@/components/AcademicCalendar';
import { BookOpen, Users, Award, Globe, Target, Heart } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="(School Name)"
        subtitle="Excellence in Education Since 19xx"
        description="Empowering students to reach their full potential through innovative learning, dedicated faculty, and a nurturing environment."
        primaryCTA={{
          text: "Explore Programs",
          href: "/programs"
        }}
        secondaryCTA={{
          text: "Take a Tour",
          href: "/about"
        }}
        backgroundImage="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose (School Name)?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive educational experience that prepares students for success in an ever-changing world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Academic Excellence"
              description="Rigorous curriculum designed to challenge and inspire students at every level, with personalized attention from expert faculty."
              color="blue"
            />
            <FeatureCard
              icon={Users}
              title="Small Class Sizes"
              description="Average class size of 15 students ensures personalized attention and meaningful relationships between students and teachers."
              color="green"
            />
            <FeatureCard
              icon={Award}
              title="Proven Results"
              description="98% college acceptance rate with graduates attending top universities worldwide. Our students consistently excel academically."
              color="purple"
            />
            <FeatureCard
              icon={Globe}
              title="Global Perspective"
              description="International programs, cultural exchanges, and diverse community prepare students for global citizenship."
              color="orange"
            />
            <FeatureCard
              icon={Target}
              title="Personalized Learning"
              description="Individualized learning plans and support systems help each student reach their unique potential and goals."
              color="blue"
            />
            <FeatureCard
              icon={Heart}
              title="Supportive Community"
              description="Nurturing environment where students, families, and educators work together to create a positive learning experience."
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountingStats 
            stats={[
              { value: 1200, label: "Students Enrolled", suffix: "+" },
              { value: 98, label: "College Acceptance", suffix: "%" },
              { value: 85, label: "Expert Faculty", suffix: "+" },
              { value: 40, label: "Years Excellence", suffix: "+" }
            ]}
          />
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Academic Calendar 2025-2026
            </h2>
            <p className="text-xl text-gray-600">Important dates and events for the current academic year</p>
          </div>

          <AcademicCalendar />

          {/* Upcoming Events */}
          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-blue-600 font-bold text-lg mb-1">March 20</div>
                <h4 className="font-semibold text-gray-900 mb-2">Spring Concert</h4>
                <p className="text-gray-600 text-sm">Join us for our annual spring music concert featuring all school ensembles.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-blue-600 font-bold text-lg mb-1">March 25</div>
                <h4 className="font-semibold text-gray-900 mb-2">Science Fair</h4>
                <p className="text-gray-600 text-sm">Students showcase their innovative research projects and scientific discoveries.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-blue-600 font-bold text-lg mb-1">April 2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Open House</h4>
                <p className="text-gray-600 text-sm">Prospective families are invited to tour our campus and meet our faculty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Events
            </h2>
            <p className="text-xl text-gray-600">Stay updated with what's happening at our school</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
                alt="Science Fair"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">March 15, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Science Fair Winners</h3>
                <p className="text-gray-600 text-sm">Congratulations to our students who showcased incredible innovation and creativity at this year's science fair.</p>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg"
                alt="Arts Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">March 10, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">New Arts Wing Opening</h3>
                <p className="text-gray-600 text-sm">Our new state-of-the-art arts wing opens next month, featuring modern studios and performance spaces.</p>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
                alt="Student Achievement"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">March 5, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">National Merit Scholars</h3>
                <p className="text-gray-600 text-sm">Five of our seniors have been named National Merit Scholars, recognizing their academic excellence.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}