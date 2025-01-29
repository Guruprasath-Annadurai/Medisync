import React from 'react';
import { Heart } from 'lucide-react';
import { SidebarProps } from '../types';

const Sidebar: React.FC<SidebarProps> = ({ features, selectedFeature, onFeatureSelect }) => {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">MediSync AI</h1>
          </div>
          <p className="text-sm text-gray-500">Smart Healthcare Platform</p>
        </div>
        
        <div className="px-6 py-3 bg-gray-50 border-y border-gray-200">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            Features
          </h2>
        </div>
      </div>

      <nav className="px-3 py-4">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => onFeatureSelect(feature.id)}
            className={`w-full flex items-center px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors mb-1 ${
              selectedFeature === feature.id 
                ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200' 
                : ''
            }`}
          >
            <feature.icon className={`w-5 h-5 ${feature.color} mr-3 flex-shrink-0`} />
            <span className="text-sm font-medium truncate">{feature.name}</span>
          </button>
        ))}
      </nav>

      <div className="sticky bottom-0 p-4 bg-white border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          <p>Version 1.0.0</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;