'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedResponses = {
  'hello': 'Hello! Welcome to (School Name). How can I help you today?',
  'hi': 'Hi there! I\'m here to help answer any questions about our school.',
  'admissions': 'For admissions information, you can visit our Admissions page or contact our admissions office at (63) 962-700-2263. The application deadline for fall 2025 is February 1st.',
  'tuition': 'Our tuition rates are: Elementary (K-5) Php 18,500, Middle School (6-8) Php 21,000, High School (9-12) Php 24,500. We offer financial aid and payment plans.',
  'programs': 'We offer comprehensive academic programs including AP courses, IB diploma program, STEM, arts, athletics, and more. Visit our Programs page for details.',
  'tour': 'Campus tours are available Monday-Friday at 10 AM and 2 PM. Weekend tours by appointment. You can schedule a tour by calling (63) 962-700-2263.',
  'contact': 'You can reach us at (63) 962-700-2263 or info@brightfuture.edu. Our office hours are Monday-Friday 8 AM-5 PM, Saturday 9 AM-2 PM.',
  'faculty': 'Our faculty includes 85+ expert educators with advanced degrees. 95% hold master\'s or doctoral degrees. Visit our Faculty page to meet our teachers.',
  'calendar': 'The current academic year runs from August 26, 2024 to June 12, 2025. Check our homepage for important dates and upcoming events.',
  'default': 'Thank you for your question! For detailed information, please visit our website pages or contact our office at (63) 962-700-2263. Our admissions team is happy to help!'
};

const quickQuestions = [
  { text: 'Admissions Info', key: 'admissions', icon: '📚' },
  { text: 'Tuition & Fees', key: 'tuition', icon: '💰' },
  { text: 'Campus Tour', key: 'tour', icon: '🏫' },
  { text: 'Academic Programs', key: 'programs', icon: '🎓' },
  { text: 'Contact Info', key: 'contact', icon: '📞' },
  { text: 'Faculty', key: 'faculty', icon: '👨‍🏫' }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m the (School Name) assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    
    return predefinedResponses.default;
  };

  const handleQuickQuestion = (questionKey: string, questionText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: questionText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setShowQuickQuestions(false);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: predefinedResponses[questionKey as keyof typeof predefinedResponses] || predefinedResponses.default,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setShowQuickQuestions(false);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">School Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              {messages.length > 1 && (
                <button
                  onClick={() => {
                    setMessages([messages[0]]);
                    setShowQuickQuestions(true);
                    setIsTyping(false);
                  }}
                  className="text-white hover:text-gray-200 transition-colors text-xs"
                  title="Reset chat"
                >
                  Reset
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <span>{message.text}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Quick Questions */}
            {showQuickQuestions && !isTyping && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 text-center">Quick questions:</div>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question.key, question.text)}
                      className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:shadow-sm"
                    >
                      <span className="text-base">{question.icon}</span>
                      <span>{question.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => setShowQuickQuestions(false)}
                placeholder="Ask about admissions, programs, tours..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}