import HeroSection from '@/components/HeroSection';
import { CheckCircle, Calendar, FileText, Users, Award, DollarSign } from 'lucide-react';

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete our online application form with student information and academic history.",
    icon: FileText
  },
  {
    step: 2,
    title: "Schedule Tour",
    description: "Visit our campus to meet faculty, see facilities, and experience our community.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Submit Documents",
    description: "Provide transcripts, recommendations, and any required assessment scores.",
    icon: FileText
  },
  {
    step: 4,
    title: "Interview Process",
    description: "Meet with our admissions team and relevant department heads.",
    icon: Users
  },
  {
    step: 5,
    title: "Admission Decision",
    description: "Receive your admission decision and enrollment information.",
    icon: Award
  }
];

export default function Admissions() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Join Our Community"
        subtitle="Admissions"
        description="Begin your journey toward academic excellence and personal growth"
        primaryCTA={{
          text: "Apply Now",
          href: "#application"
        }}
        secondaryCTA={{
          text: "Schedule Tour",
          href: "#tour"
        }}
        backgroundImage="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg"
      />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bright Future Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes our school the ideal place for your child's educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">98% College Acceptance</h3>
              <p className="text-gray-600">Our graduates consistently gain admission to top universities worldwide.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">12:1 Student-Teacher Ratio</h3>
              <p className="text-gray-600">Small class sizes ensure personalized attention for every student.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-purple-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">20+ AP Courses</h3>
              <p className="text-gray-600">Extensive Advanced Placement program for college preparation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined admission process is designed to get to know your child and family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="inline-flex p-4 bg-blue-600 text-white rounded-full mb-2">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Required Documents</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Completed application form
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Official transcripts from previous schools
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Two letters of recommendation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Student essay or personal statement
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Immunization records
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Standards</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We seek students who demonstrate academic curiosity, strong character, 
                    and the potential to contribute positively to our school community. 
                    While we don't have strict grade requirements, we look for students 
                    who challenge themselves academically and show consistent effort.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Dates</h2>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-900">Academic Year 2025-2026</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-4 border-b border-gray-100">
                      <div>
                        <span className="font-semibold text-gray-900 block">Application Opens</span>
                        <span className="text-sm text-gray-500">Begin your application process</span>
                      </div>
                      <span className="text-blue-600 font-bold text-lg">October 1, 2025</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-4 border-b border-gray-100">
                      <div>
                        <span className="font-semibold text-gray-900 block">Early Decision Deadline</span>
                        <span className="text-sm text-gray-500">For priority consideration</span>
                      </div>
                      <span className="text-blue-600 font-bold text-lg">December 15, 2025</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-4 border-b border-gray-100">
                      <div>
                        <span className="font-semibold text-gray-900 block">Regular Decision Deadline</span>
                        <span className="text-sm text-gray-500">Final application deadline</span>
                      </div>
                      <span className="text-blue-600 font-bold text-lg">February 1, 2026</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-4 border-b border-gray-100">
                      <div>
                        <span className="font-semibold text-gray-900 block">Decision Notifications</span>
                        <span className="text-sm text-gray-500">Admission decisions sent</span>
                      </div>
                      <span className="text-blue-600 font-bold text-lg">March 15, 2026</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div>
                        <span className="font-semibold text-gray-900 block">Enrollment Deadline</span>
                        <span className="text-sm text-gray-500">Confirm your enrollment</span>
                      </div>
                      <span className="text-blue-600 font-bold text-lg">May 1, 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Our admissions team is here to guide you through every step of the process.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-blue-800">
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p className="text-blue-800">
                    <strong>Email:</strong> admissions@brightfuture.edu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tuition & Financial Aid
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to making our exceptional education accessible to qualified students
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tuition Rates</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Elementary (K-5)</span>
                    <span className="text-2xl font-bold text-gray-900">Php 18,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Middle School (6-8)</span>
                    <span className="text-2xl font-bold text-gray-900">Php 21,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">High School (9-12)</span>
                    <span className="text-2xl font-bold text-gray-900">Php 24,500</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    * Tuition includes most textbooks, technology fees, and standard activities. 
                    Additional fees may apply for specialized programs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Aid</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Need-Based Aid</h4>
                      <p className="text-gray-600 text-sm">
                        Over 40% of our families receive financial assistance. 
                        Aid is awarded based on demonstrated financial need.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Merit Scholarships</h4>
                      <p className="text-gray-600 text-sm">
                        Outstanding academic, artistic, or athletic achievements 
                        may qualify students for merit-based scholarships.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Plans</h4>
                      <p className="text-gray-600 text-sm">
                        Flexible payment options including monthly installments 
                        to help manage tuition costs throughout the year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="application" className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Apply?</h2>
          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            Join our community of learners, innovators, and future leaders. 
            Start your application today and take the first step toward an exceptional education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Application
            </a>
            <a
              href="#tour"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
            >
              Schedule Campus Tour
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}