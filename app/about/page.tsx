import HeroSection from '@/components/HeroSection';
import { Target, Eye, Heart, Users } from 'lucide-react';
import CountingStats from '@/components/CountingStats';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="About Our School"
        subtitle="Our Story"
        description="Dedicated to excellence in education for over 40 years"
        primaryCTA={{
          text: "View Programs",
          href: "/programs"
        }}
        backgroundImage="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
      />

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional education that empowers students to become confident, 
                compassionate, and capable leaders who positively impact their communities and the world.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-green-100 rounded-full mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier educational institution that sets the standard for academic excellence, 
                innovative teaching, and holistic student development in our community.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellence, Integrity, Respect, Innovation, and Community. These core values guide 
                every decision we make and every interaction within our school family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Founded in 1985 by visionary educators Dr. Margaret Bright and Dr. James Future, 
                  (School Name) began with a simple yet powerful mission: to create an 
                  educational environment where every student could thrive academically, socially, and personally.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a small school with 50 students has grown into a thriving 
                  educational community of over 1,200 students. Throughout our history, we've 
                  maintained our commitment to small class sizes, personalized attention, and 
                  innovative teaching methods.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to be recognized as one of the top schools in the region, 
                  with our graduates attending prestigious universities worldwide and making 
                  significant contributions to their communities and professions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
                alt="School History"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">School Leadership</h2>
            <p className="text-xl text-gray-600">Meet the dedicated leaders guiding our school community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                alt="Dr. Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-2">Principal</p>
              <p className="text-gray-600 text-sm">
                Ph.D. in Educational Leadership with 20+ years of experience in educational administration.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                alt="Michael Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-blue-600 font-medium mb-2">Vice Principal</p>
              <p className="text-gray-600 text-sm">
                M.Ed. in Curriculum Development with expertise in STEM education and teacher development.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                alt="Lisa Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Lisa Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-2">Academic Director</p>
              <p className="text-gray-600 text-sm">
                M.A. in Educational Psychology specializing in personalized learning and student support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
            <section className="py-20 bg-blue-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CountingStats 
                  stats={[
                    { value: 40, label: "Years of Excellence", suffix: "+" },
                    { value: 1200, label: "Current Students", suffix: "%" },
                    { value: 5000, label: "Alumni Worldwide", suffix: "+" },
                    { value: 80, label: "Faculty Members", suffix: "+" }
                  ]}
                />
              </div>
            </section>
    </main>
  );
}