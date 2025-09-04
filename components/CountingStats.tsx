'use client';

import { useEffect, useState, useRef } from 'react';

interface CountingStatsProps {
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
  }>;
}

export default function CountingStats({ stats }: CountingStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.round(increment * currentStep), stat.value);
        
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = newValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible, stats]);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="text-white">
          <div className="text-4xl sm:text-5xl font-bold mb-2">
            {counts[index].toLocaleString()}{stat.suffix || ''}
          </div>
          <div className="text-blue-200 text-lg">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}