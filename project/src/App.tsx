import React, { useState } from 'react';
import { BrainCog, Activity, FileText, Bot, Video, Pill, Ambulance, Dna, Brain, HandMetal, 
  Microscope, Heart, Building2, Globe2, PersonStanding, Rocket, LineChart, Dumbbell, Home,
  GanttChartSquare, TestTube, PlaneTakeoff, Stethoscope, Users, Atom } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Feature } from './types';

function App() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features: Feature[] = [
    { 
      id: 1, 
      name: 'AI Diagnosis', 
      icon: BrainCog, 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      description: 'Advanced AI-powered diagnosis system with symptom analysis and instant health recommendations.'
    },
    { 
      id: 2, 
      name: 'Health Monitoring', 
      icon: Activity, 
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      description: 'Real-time health tracking with smart alerts and personalized insights.'
    },
    { 
      id: 3, 
      name: 'Medical Records', 
      icon: FileText, 
      color: 'text-purple-500',
      bgColor: 'bg-purple-500',
      description: 'Secure blockchain-based universal medical record system.'
    },
    { 
      id: 4, 
      name: 'Virtual Assistant', 
      icon: Bot, 
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500',
      description: '24/7 AI-powered health assistant for medical queries and support.'
    },
    { 
      id: 5, 
      name: 'Telemedicine', 
      icon: Video, 
      color: 'text-red-500',
      bgColor: 'bg-red-500',
      description: 'Connect with healthcare providers worldwide through virtual consultations.'
    },
    { 
      id: 6, 
      name: 'Smart Pharmacy', 
      icon: Pill, 
      color: 'text-pink-500',
      bgColor: 'bg-pink-500',
      description: 'AI-powered medication management and automated prescription services.'
    },
    { 
      id: 7, 
      name: 'Emergency Response', 
      icon: Ambulance, 
      color: 'text-orange-500',
      bgColor: 'bg-orange-500',
      description: 'Instant emergency response system with smart ambulance dispatch.'
    },
    { 
      id: 8, 
      name: 'Genetic Health', 
      icon: Dna, 
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500',
      description: 'DNA analysis and personalized genetic health insights.'
    },
    { 
      id: 9, 
      name: 'Mental Health', 
      icon: Brain, 
      color: 'text-teal-500',
      bgColor: 'bg-teal-500',
      description: 'AI-powered mental wellness support and therapy assistance.'
    },
    { 
      id: 10, 
      name: 'Smart Prosthetics', 
      icon: HandMetal, 
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500',
      description: 'Advanced prosthetic management and rehabilitation tracking.'
    },
    { 
      id: 11, 
      name: 'Disease Prediction', 
      icon: Microscope, 
      color: 'text-rose-500',
      bgColor: 'bg-rose-500',
      description: 'AI-driven disease prediction and prevention strategies.'
    },
    { 
      id: 12, 
      name: 'Blood & Organ', 
      icon: Heart, 
      color: 'text-red-600',
      bgColor: 'bg-red-600',
      description: 'Smart blood donation and organ matching system.'
    },
    { 
      id: 13, 
      name: 'Smart Hospital', 
      icon: Building2, 
      color: 'text-sky-500',
      bgColor: 'bg-sky-500',
      description: 'AI-powered hospital management and patient care system.'
    },
    { 
      id: 14, 
      name: 'Disease Outbreaks', 
      icon: Globe2, 
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500',
      description: 'Global disease outbreak prediction and monitoring.'
    },
    { 
      id: 15, 
      name: 'Elderly Care', 
      icon: PersonStanding, 
      color: 'text-violet-500',
      bgColor: 'bg-violet-500',
      description: 'Smart elderly care monitoring and assistance system.'
    },
    { 
      id: 16, 
      name: 'Space Healthcare', 
      icon: Rocket, 
      color: 'text-slate-500',
      bgColor: 'bg-slate-500',
      description: 'Healthcare solutions for space and extreme environments.'
    },
    { 
      id: 17, 
      name: 'Health Analytics', 
      icon: LineChart, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-600',
      description: 'Advanced health data analytics and insights platform.'
    },
    { 
      id: 18, 
      name: 'Fitness Plans', 
      icon: Dumbbell, 
      color: 'text-green-600',
      bgColor: 'bg-green-600',
      description: 'AI-powered personalized fitness and wellness plans.'
    },
    { 
      id: 19, 
      name: 'Virtual Clinic', 
      icon: Home, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-600',
      description: 'Complete virtual clinic experience from home.'
    },
    { 
      id: 20, 
      name: 'Genomic Health', 
      icon: GanttChartSquare, 
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-600',
      description: 'Advanced genomic analysis and personalized health insights.'
    },
    { 
      id: 21, 
      name: 'Medical Tourism', 
      icon: PlaneTakeoff, 
      color: 'text-red-700',
      bgColor: 'bg-red-700',
      description: 'Global medical treatment finder and tourism assistance.'
    },
    { 
      id: 22, 
      name: 'Surgery Outcomes', 
      icon: Stethoscope, 
      color: 'text-pink-600',
      bgColor: 'bg-pink-600',
      description: 'Surgery outcome prediction and recovery tracking.'
    },
    { 
      id: 23, 
      name: 'Clinical Trials', 
      icon: TestTube, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-600',
      description: 'Clinical trial matching and participation platform.'
    },
    { 
      id: 24, 
      name: 'Medical Network', 
      icon: Users, 
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-600',
      description: 'Global medical professional network and collaboration.'
    },
    { 
      id: 25, 
      name: 'Quantum Research', 
      icon: Atom, 
      color: 'text-teal-600',
      bgColor: 'bg-teal-600',
      description: 'Quantum computing applications in medical research.'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        features={features} 
        selectedFeature={selectedFeature}
        onFeatureSelect={setSelectedFeature}
      />
      <main className="flex-1 overflow-y-auto">
        <Dashboard 
          features={features}
          selectedFeature={selectedFeature}
          onFeatureSelect={setSelectedFeature}
        />
      </main>
    </div>
  );
}

export default App;