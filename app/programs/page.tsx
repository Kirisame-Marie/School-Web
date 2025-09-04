import HeroSection from '@/components/HeroSection';
import { BookOpen, Calculator, FlaskRound as Flask, Palette, Globe, Music, Dumbbell, Code } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: "English & Literature",
    description: "Comprehensive language arts program focusing on critical reading, creative writing, and communication skills.",
    features: ["Creative Writing Workshop", "Public Speaking", "Literature Analysis", "Advanced Placement Options"]
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description: "From foundational arithmetic to advanced calculus, our math program builds strong analytical thinking.",
    features: ["Algebra & Geometry", "Advanced Calculus", "Statistics", "Mathematical Modeling"]
  },
  {
    icon: Flask,
    title: "Science & Technology",
    description: "Hands-on laboratory experiences in biology, chemistry, physics, and environmental science.",
    features: ["Advanced Laboratory", "Research Projects", "STEM Competitions", "Science Fair"]
  },
  {
    icon: Palette,
    title: "Visual & Performing Arts",
    description: "Nurture creativity through painting, sculpture, theater, dance, and digital media arts.",
    features: ["Art Studios", "Theater Productions", "Dance Classes", "Digital Media"]
  },
  {
    icon: Globe,
    title: "Social Studies",
    description: "Explore history, geography, civics, and cultural studies to understand our interconnected world.",
    features: ["World History", "Civics & Government", "Geography", "Current Events"]
  },
  {
    icon: Music,
    title: "Music Program",
    description: "Develop musical talents through choir, band, orchestra, and individual instruction.",
    features: ["School Band", "Choir", "Orchestra", "Private Lessons"]
  },
  {
    icon: Dumbbell,
    title: "Physical Education",
    description: "Promote health and fitness through sports, wellness education, and recreational activities.",
    features: ["Team Sports", "Fitness Training", "Health Education", "Outdoor Activities"]
  },
  {
    icon: Code,
    title: "Computer Science",
    description: "Learn programming, web development, and digital literacy skills for the modern world.",
    features: ["Programming Languages", "Web Development", "Robotics", "Digital Citizenship"]
  }
];

export default function Programs() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Our Programs"
        subtitle="Academic Excellence"
        description="Comprehensive curriculum designed to challenge, inspire, and prepare students for future success"
        primaryCTA={{
          text: "Apply Now",
          href: "/admissions"
        }}
        backgroundImage="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg"
      />

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse curriculum ensures every student finds their passion and develops the skills needed for success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
                  <program.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{program.description}</p>
                <ul className="space-y-1">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Advanced Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Challenge yourself with our specialized advanced programs designed for high-achieving students
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Placement (AP)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Earn college credit while in high school with our comprehensive AP program offering 
                20+ courses across all major subject areas.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">STEM Courses</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• AP Calculus AB/BC</li>
                    <li>• AP Physics 1 & 2</li>
                    <li>• AP Chemistry</li>
                    <li>• AP Computer Science A</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Liberal Arts</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• AP English Literature</li>
                    <li>• AP World History</li>
                    <li>• AP Psychology</li>
                    <li>• AP Art & Design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Baccalaureate (IB)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Develop global perspectives and critical thinking skills through our IB Diploma Programme, 
                recognized by universities worldwide.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-600">Six subject groups covering all disciplines</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-600">Extended Essay research project</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-600">Theory of Knowledge course</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-600">Creativity, Activity, Service (CAS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Beyond the Classroom
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Develop leadership skills, pursue passions, and build lifelong friendships through our extensive extracurricular programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Government</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Develop leadership skills and represent student voice in school decisions
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Student Council</li>
                  <li>• Class Representatives</li>
                  <li>• Leadership Training</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Clubs</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore academic interests with like-minded peers and expert mentors
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• National Honor Society</li>
                  <li>• Debate Team</li>
                  <li>• Science Olympiad</li>
                  <li>• Model UN</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sports & Athletics</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Build teamwork, discipline, and school spirit through competitive athletics
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Varsity Teams</li>
                  <li>• JV & Freshman</li>
                  <li>• Intramural Sports</li>
                  <li>• Fitness Programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}