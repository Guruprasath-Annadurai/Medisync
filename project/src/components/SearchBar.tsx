import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Feature } from '../types';

interface SearchBarProps {
  features: Feature[];
  onFeatureSelect: (id: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ features, onFeatureSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredFeatures = features.filter(feature =>
    feature.name.toLowerCase().includes(query.toLowerCase()) ||
    feature.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search features..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
        />
      </div>

      {isOpen && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
          {filteredFeatures.length > 0 ? (
            <ul className="py-2">
              {filteredFeatures.map(feature => (
                <li key={feature.id}>
                  <button
                    onClick={() => {
                      onFeatureSelect(feature.id);
                      setIsOpen(false);
                      setQuery('');
                    }}
                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-left"
                  >
                    <div className={`${feature.bgColor} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{feature.name}</h4>
                      <p className="text-sm text-gray-500 line-clamp-1">{feature.description}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No features found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;