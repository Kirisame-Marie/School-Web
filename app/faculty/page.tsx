import HeroSection from '@/components/HeroSection';
import FacultyCard from '@/components/FacultyCard';

const faculty = [
  {
    name: "Dr. Emily Watson",
    position: "Head of Mathematics Department",
    department: "Mathematics",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    email: "ewatson@brightfuture.edu",
    bio: "Ph.D. in Mathematics from MIT with 15 years of teaching experience. Specializes in advanced calculus and mathematical modeling."
  },
  {
    name: "Prof. James Martinez",
    position: "Science Department Chair",
    department: "Science & Technology",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    email: "jmartinez@brightfuture.edu",
    bio: "Former NASA researcher with expertise in physics and chemistry. Passionate about hands-on learning and scientific inquiry."
  },
  {
    name: "Ms. Sarah Chen",
    position: "English Literature Teacher",
    department: "English & Literature",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    email: "schen@brightfuture.edu",
    bio: "M.A. in English Literature from Yale. Award-winning teacher with focus on creative writing and critical analysis."
  },
  {
    name: "Dr. Michael Thompson",
    position: "History Department Head",
    department: "Social Studies",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    email: "mthompson@brightfuture.edu",
    bio: "Ph.D. in World History with specialization in modern European history. Published author and curriculum developer."
  },
  {
    name: "Ms. Lisa Rodriguez",
    position: "Art & Design Teacher",
    department: "Visual Arts",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    email: "lrodriguez@brightfuture.edu",
    bio: "Professional artist and educator with M.F.A. in Studio Arts. Exhibits regularly and guides students in creative expression."
  },
  {
    name: "Coach David Williams",
    position: "Athletic Director",
    department: "Physical Education",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    email: "dwilliams@brightfuture.edu",
    bio: "Former professional athlete with B.S. in Kinesiology. Led multiple championship teams and promotes student wellness."
  },
  {
    name: "Dr. Angela Park",
    position: "Computer Science Teacher",
    department: "Technology",
    image: "https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg",
    email: "apark@brightfuture.edu",
    bio: "Software engineer turned educator with Ph.D. in Computer Science. Expert in programming languages and robotics."
  },
  {
    name: "Mr. Robert Johnson",
    position: "Music Director",
    department: "Performing Arts",
    image: "https://images.pexels.com/photos/2182968/pexels-photo-2182968.jpeg",
    email: "rjohnson@brightfuture.edu",
    bio: "Professional musician and composer with M.M. in Music Education. Directs school bands, choirs, and orchestras."
  },
  {
    name: "Ms. Jennifer Lee",
    position: "World Languages Coordinator",
    department: "Foreign Languages",
    image: "https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg",
    email: "jlee@brightfuture.edu",
    bio: "Multilingual educator fluent in 5 languages. M.A. in Applied Linguistics with focus on immersive language learning."
  }
];

export default function Faculty() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Meet Our Faculty"
        subtitle="Excellence in Teaching"
        description="Our dedicated educators bring passion, expertise, and innovation to every classroom"
        primaryCTA={{
          text: "Join Our Team",
          href: "/contact"
        }}
        backgroundImage="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
      />

      {/* Faculty Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              World-Class Educators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our faculty members are accomplished professionals who bring real-world experience 
              and academic excellence to the classroom. With advanced degrees from top universities 
              and years of teaching experience, they are committed to inspiring and challenging every student.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <FacultyCard
                key={index}
                name={member.name}
                position={member.position}
                department={member.department}
                image={member.image}
                email={member.email}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* Faculty Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Faculty Excellence</h2>
            <p className="text-xl text-gray-600">Our educators are recognized leaders in their fields</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Advanced Degrees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12:1</div>
              <div className="text-gray-600">Student-Teacher Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years Avg Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Join Our Teaching Community</h2>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Are you a passionate educator looking to make a difference? We're always seeking 
            exceptional teachers who share our commitment to academic excellence and student success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@brightfuture.edu"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Submit Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}