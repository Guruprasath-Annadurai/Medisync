import React from 'react';
import { X } from 'lucide-react';
import { Feature } from '../types';

interface FeatureModalProps {
  feature: Feature;
  onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ feature, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{feature.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">{feature.description}</p>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Enhanced patient care through AI-powered insights
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Real-time monitoring and instant alerts
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Secure and private data management
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How It Works</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">1</span>
                    <p className="text-gray-600">Connect your medical devices and health trackers</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">2</span>
                    <p className="text-gray-600">AI analyzes your health data in real-time</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">3</span>
                    <p className="text-gray-600">Receive personalized insights and recommendations</p>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6">
          <button 
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            onClick={onClose}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;