import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';

interface FacultyCardProps {
  name: string;
  position: string;
  department: string;
  image: string;
  email: string;
  bio: string;
}

export default function FacultyCard({ name, position, department, image, email, bio }: FacultyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="relative h-64 bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-1">{position}</p>
        <p className="text-gray-500 text-sm mb-4">{department}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <a
            href={`mailto:${email}`}
            className="text-gray-400 hover:text-blue-600 transition-colors"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}