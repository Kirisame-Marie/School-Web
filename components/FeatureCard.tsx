import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

export default function FeatureCard({ icon: Icon, title, description, color = 'blue' }: FeatureCardProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      icon: 'text-blue-600',
      border: 'hover:border-blue-200'
    },
    green: {
      bg: 'bg-green-100',
      icon: 'text-green-600',
      border: 'hover:border-green-200'
    },
    purple: {
      bg: 'bg-purple-100',
      icon: 'text-purple-600',
      border: 'hover:border-purple-200'
    },
    orange: {
      bg: 'bg-orange-100',
      icon: 'text-orange-600',
      border: 'hover:border-orange-200'
    }
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md ${colorClasses[color].border} transition-all duration-300 hover:transform hover:-translate-y-1`}>
      <div className={`inline-flex p-3 rounded-lg ${colorClasses[color].bg} mb-4`}>
        <Icon className={`h-6 w-6 ${colorClasses[color].icon}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}