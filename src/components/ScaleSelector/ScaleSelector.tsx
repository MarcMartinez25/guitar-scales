'use client';

import React, { useState } from 'react'
import { 
  standardTuning, 
  majorScale, 
  minorScale, 
  majorPentatonicScale, 
  minorPentatonicScale,
  bluesScale,
  dorianScale,
  mixolydianScale,
  notes 
} from '@/utils/musicTheory';

interface ScaleSelectorProps {
  onScaleChange?: (scale: string, key: string, tuning: string[]) => void;
}

const ScaleSelector: React.FC<ScaleSelectorProps> = ({ onScaleChange }) => {
  const [scale, setScale] = useState<string>('Major');
  const [key, setKey] = useState<string>('C');
  const [tuning, setTuning] = useState<string[]>(standardTuning);

  const scaleTypes = [
    { name: 'Major', pattern: majorScale },
    { name: 'Minor', pattern: minorScale },
    { name: 'Major Pentatonic', pattern: majorPentatonicScale },
    { name: 'Minor Pentatonic', pattern: minorPentatonicScale },
    { name: 'Blues', pattern: bluesScale },
    { name: 'Dorian', pattern: dorianScale },
    { name: 'Mixolydian', pattern: mixolydianScale },
  ];

  const tunings = [
    { name: 'Standard', value: standardTuning },
    { name: 'Drop D', value: ['D', 'A', 'D', 'G', 'B', 'E'] },
    { name: 'Half Step Down', value: ['D#', 'G#', 'C#', 'F#', 'A#', 'D#'] },
  ];

  const handleScaleChange = (newScale: string) => {
    setScale(newScale);
    if (onScaleChange) {
      onScaleChange(newScale, key, tuning);
    }
  };

  const handleKeyChange = (newKey: string) => {
    setKey(newKey);
    if (onScaleChange) {
      onScaleChange(scale, newKey, tuning);
    }
  };

  const handleTuningChange = (newTuning: string[]) => {
    setTuning(newTuning);
    if (onScaleChange) {
      onScaleChange(scale, key, newTuning);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Scale Type Selector */}
        <div>
          <label htmlFor="scale" className="block text-sm font-medium text-gray-700 mb-1">
            Scale Type
          </label>
          <select
            id="scale"
            value={scale}
            onChange={(e) => handleScaleChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {scaleTypes.map((scaleType) => (
              <option key={scaleType.name} value={scaleType.name}>
                {scaleType.name}
              </option>
            ))}
          </select>
        </div>

        {/* Key Selector */}
        <div>
          <label htmlFor="key" className="block text-sm font-medium text-gray-700 mb-1">
            Key
          </label>
          <select
            id="key"
            value={key}
            onChange={(e) => handleKeyChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {notes.map((note: string) => (
              <option key={note} value={note}>
                {note}
              </option>
            ))}
          </select>
        </div>

        {/* Tuning Selector */}
        <div>
          <label htmlFor="tuning" className="block text-sm font-medium text-gray-700 mb-1">
            Tuning
          </label>
          <select
            id="tuning"
            value={tuning.join(' ')}
            onChange={(e) => {
              const selectedTuning = tunings.find(t => t.name === e.target.value);
              if (selectedTuning) {
                handleTuningChange(selectedTuning.value);
              }
            }}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {tunings.map((tuning) => (
              <option key={tuning.name} value={tuning.name}>
                {tuning.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ScaleSelector;