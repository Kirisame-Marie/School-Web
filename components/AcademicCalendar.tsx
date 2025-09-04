'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  time?: string;
  location?: string;
  type: 'academic' | 'sports' | 'arts' | 'holiday' | 'meeting';
  allDay?: boolean;
}

interface DayEvents {
  date: string;
  dayName: string;
  events: CalendarEvent[];
}

const sampleWeekData: DayEvents[] = [
  {
    date: "September 1, 2025",
    dayName: "Monday",
    events: [
      {
        id: "1",
        title: "BFC CLOSED - Labor Day Weekend",
        type: "holiday",
        allDay: true
      }
    ]
  },
  {
    date: "September 2, 2025",
    dayName: "Tuesday",
    events: [
      {
        id: "2",
        title: "Faculty Meeting",
        time: "3:30am - 4:30am",
        type: "meeting"
      },
      {
        id: "3",
        title: "Parent-Teacher Conferences",
        time: "6:00pm - 8:00pm",
        type: "academic"
      }
    ]
  },
  {
    date: "September 3, 2025",
    dayName: "Wednesday",
    events: [
      {
        id: "4",
        title: "Boys Soccer V @ Gabriel Richard",
        time: "6:00am - 8:00am",
        type: "sports"
      },
      {
        id: "5",
        title: "Drama Club Rehearsal",
        time: "3:30am - 4:30am",
        type: "arts"
      }
    ]
  },
  {
    date: "September 4, 2025",
    dayName: "Thursday",
    events: [
      {
        id: "6",
        title: "F/JV/V Volleyball @ OLSM",
        time: "4:30am - 7:30am",
        type: "sports"
      },
      {
        id: "7",
        title: "Girls Swim @ Oxford HS",
        time: "4:45am - 8:45am",
        type: "sports"
      }
    ]
  },
  {
    date: "September 5, 2025",
    dayName: "Friday",
    events: [
      {
        id: "8",
        title: "XC @ OCS Small School Invite 2025",
        time: "4:00am - 7:00am",
        type: "sports"
      },
      {
        id: "9",
        title: "Boys Soccer V @ Austin Catholic",
        time: "5:30am - 7:30am",
        type: "sports"
      },
      {
        id: "10",
        title: "Girls Swim @ Avondale",
        time: "6:00am - 8:00am",
        type: "sports"
      }
    ]
  },
  {
    date: "September 6, 2025",
    dayName: "Saturday",
    events: [
      {
        id: "11",
        title: "St Mary Royal Oak Volleyball",
        time: "8:00pm - 12:00am",
        type: "sports"
      },
      {
        id: "12",
        title: "Freshman / JV Volleyball @ Chelsea",
        time: "8:00pm - 12:00am",
        type: "sports"
      }
    ]
  },
  {
    date: "September 7, 2025",
    dayName: "Sunday",
    events: []
  }
];

const eventTypeColors = {
  academic: 'bg-blue-100 text-blue-800 border-blue-200',
  sports: 'bg-green-100 text-green-800 border-green-200',
  arts: 'bg-purple-100 text-purple-800 border-purple-200',
  holiday: 'bg-red-100 text-red-800 border-red-200',
  meeting: 'bg-yellow-100 text-yellow-800 border-yellow-200'
};

export default function AcademicCalendar() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [viewMode, setViewMode] = useState<'Month' | 'Week' | 'Day'>('Week');

  const goToPreviousWeek = () => {
    setCurrentWeek(prev => prev - 1);
  };

  const goToNextWeek = () => {
    setCurrentWeek(prev => prev + 1);
  };

  const goToToday = () => {
    setCurrentWeek(0);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Calendar Header */}
      <div className="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-white rounded-lg border border-gray-300 overflow-hidden">
              <button
                onClick={goToPreviousWeek}
                className="p-2 hover:bg-blue-50 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 text-gray-600" />
              </button>
              <button
                onClick={goToNextWeek}
                className="p-2 hover:bg-blue-50 transition-colors border-l border-gray-300"
              >
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            
            <button
              onClick={goToToday}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              Today
            </button>
            
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Aug 31 – Sep 6, 2025
            </h2>
          </div>

          {/* View Mode Buttons */}
          <div className="flex items-center bg-white rounded-lg border border-gray-300 overflow-hidden">
            {(['Month', 'Week', 'Day'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === mode
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${mode !== 'Day' ? 'border-r border-gray-300' : ''}`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="p-4 sm:p-6">
        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="space-y-4">
            {sampleWeekData.map((day, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Day Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">{day.dayName}</h3>
                    <span className="text-sm text-gray-600">{day.date}</span>
                  </div>
                </div>
                
                {/* Events */}
                <div className="p-4">
                  {day.events.length === 0 ? (
                    <p className="text-gray-400 text-sm italic">No events scheduled</p>
                  ) : (
                    <div className="space-y-2">
                      {day.events.map((event) => (
                        <div key={event.id} className="flex items-start space-x-3">
                          {event.allDay ? (
                            <span className="text-sm text-gray-600 font-medium min-w-[80px]">All Day</span>
                          ) : (
                            <span className="text-sm text-gray-600 font-medium min-w-[120px]">{event.time}</span>
                          )}
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              event.type === 'academic' ? 'bg-blue-500' :
                              event.type === 'sports' ? 'bg-green-500' :
                              event.type === 'arts' ? 'bg-purple-500' :
                              event.type === 'holiday' ? 'bg-red-500' :
                              'bg-yellow-500'
                            }`} />
                            <span className="text-sm text-gray-800">{event.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sampleWeekData.map((day, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Day Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 text-center">{day.dayName}</h3>
                  <p className="text-xs text-gray-600 text-center mt-1">{day.date}</p>
                </div>
                
                {/* Events */}
                <div className="p-3">
                  {day.events.length === 0 ? (
                    <p className="text-gray-400 text-xs italic text-center">No events</p>
                  ) : (
                    <div className="space-y-2">
                      {day.events.map((event) => (
                        <div key={event.id} className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              event.type === 'academic' ? 'bg-blue-500' :
                              event.type === 'sports' ? 'bg-green-500' :
                              event.type === 'arts' ? 'bg-purple-500' :
                              event.type === 'holiday' ? 'bg-red-500' :
                              'bg-yellow-500'
                            }`} />
                            <span className="text-xs font-medium text-gray-800 leading-tight">{event.title}</span>
                          </div>
                          {!event.allDay && event.time && (
                            <div className="flex items-center space-x-1 ml-4">
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-600">{event.time}</span>
                            </div>
                          )}
                          {event.allDay && (
                            <div className="flex items-center space-x-1 ml-4">
                              <Calendar className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-600">All Day</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-50 px-4 sm:px-6 py-4 border-t border-gray-200">
        <div className="flex justify-center sm:justify-end space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
            Print
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}