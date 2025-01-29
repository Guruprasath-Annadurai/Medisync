import React from 'react';
import { DashboardProps } from '../types';
import SearchBar from './SearchBar';
import FeatureModal from './FeatureModal';

const Dashboard: React.FC<DashboardProps> = ({ features, selectedFeature, onFeatureSelect }) => {
  const selectedFeatureData = features.find(f => f.id === selectedFeature);

  return (
    <div className="p-8">
      <header className="mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to MediSync AI</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the future of healthcare with our AI-powered platform. 
            Revolutionizing patient care through advanced technology integration.
          </p>
          <div className="max-w-xl mx-auto">
            <SearchBar features={features} onFeatureSelect={onFeatureSelect} />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => onFeatureSelect(feature.id)}
            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
              selectedFeature === feature.id ? 'ring-2 ring-blue-500 scale-[1.02]' : ''
            }`}
          >
            <div className="p-6">
              <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {feature.description}
              </p>
            </div>
            <div className={`px-6 py-4 border-t border-gray-100 flex items-center justify-between ${
              selectedFeature === feature.id ? 'bg-blue-50' : 'bg-gray-50'
            }`}>
              <span className="text-sm font-medium text-blue-600">Learn more</span>
              <span className="text-blue-600">→</span>
            </div>
          </div>
        ))}
      </div>

      {selectedFeatureData && (
        <FeatureModal 
          feature={selectedFeatureData} 
          onClose={() => onFeatureSelect(0)} 
        />
      )}

      <footer className="mt-16 text-center text-gray-500">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">© 2024 MediSync AI. All rights reserved.</p>
          <p className="text-sm">
            Transforming healthcare through artificial intelligence, blockchain technology, 
            and advanced data analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;