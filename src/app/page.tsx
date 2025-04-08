'use client';

import { useState } from 'react';
import Fretboard from '@/components/Fretboard/Fretboard';
import ScaleSelector from '@/components/ScaleSelector/ScaleSelector';

export default function Home() {
  const [scale, setScale] = useState<string>('Major');
  const [scaleKey, setScaleKey] = useState<string>('C');
  const [tuning, setTuning] = useState<string[]>(['E', 'B', 'G', 'D', 'A', 'E']);

  const handleScaleChange = (newScale: string, newKey: string, newTuning: string[]) => {
    setScale(newScale);
    setScaleKey(newKey);
    setTuning(newTuning);
  };

  return (
    <main className="min-h-screen p-8 bg-slate-700">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Guitar Fretboard</h1>
      <div className="max-w-7xl mx-auto">
        <ScaleSelector onScaleChange={handleScaleChange} />
        <Fretboard 
          scale={scale}
          scaleKey={scaleKey}
          tuning={tuning}
        />
      </div>
    </main>
  );
}
