'use client';

import { useEffect, useState } from 'react';

import { 
  generateFretboard, 
  standardTuning, 
  getScaleNotes
} from '@/utils/musicTheory';
import FretNumbers from './internalComponents/FretNumbers';
import Strings from './internalComponents/Strings';

interface FretboardProps {
  numFrets?: number;
  tuning?: string[];
  scale?: string;
  scaleKey?: string;
}

export default function Fretboard({ 
  numFrets = 22, 
  tuning = standardTuning,
  scale = 'Major',
  scaleKey = 'C'
}: FretboardProps) {
  const [fretboard, setFretboard] = useState<string[][]>([]);
  const [scaleNotes, setScaleNotes] = useState<string[]>([]);

  useEffect(() => {
    setFretboard(generateFretboard(tuning, numFrets));
    const notes = getScaleNotes(scaleKey, scale);
    console.log('Scale:', scale, 'Key:', scaleKey, 'Notes:', notes);
    setScaleNotes(notes);
  }, [tuning, numFrets, scale, scaleKey]);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full">
      <div className="overflow-hidden">
        <div className="w-full">
          <FretNumbers numFrets={numFrets} />
          <Strings 
            fretboard={fretboard} 
            tuning={tuning} 
            scaleNotes={scaleNotes}
          />
        </div>
      </div>
    </div>
  );
} 