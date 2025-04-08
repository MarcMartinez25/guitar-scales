export const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

// TUNINGS
export const standardTuning = ['E', 'B', 'G', 'D', 'A', 'E'];
export const halfStepDown = ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'];
export const halfStepUp = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
export const wholeStepDown = ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'];
export const wholeStepUp = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
export const dropD = ['D', 'A', 'F', 'D', 'A', 'F'];
export const dropC = ['C', 'G', 'D', 'C', 'G', 'D'];

// SCALES
export const majorScale = [2,2,1,2,2,2,1];
export const minorScale = [2,1,2,2,1,2,2];
export const majorPentatonicScale = [2,2,3,2,3];
export const minorPentatonicScale = [3,2,2,3,2];
export const bluesScale = [3,2,1,1,3,2];
export const dorianScale = [2,1,2,2,2,1,2];
export const mixolydianScale = [2,2,1,2,2,1,2];

export const generateScale = (rootNote: string, scalePattern: number[]): string[] => {
  const scale: string[] = [];
  let currentIndex = notes.indexOf(rootNote);

  // Add the root note
  scale.push(notes[currentIndex]);

  // Calculate each note in the scale based on the intervals
  for (const interval of scalePattern) {
    currentIndex = (currentIndex + interval) % 12;
    scale.push(notes[currentIndex]);
  }

  return scale;
}

export function getNoteAtFret(openNote: string, fret: number): string {
  const openNoteIndex = notes.indexOf(openNote);
  if (openNoteIndex === -1) return '';

  const noteIndex = (openNoteIndex + fret) % 12;
  return notes[noteIndex];
}

export function generateFretboard(tuning: string[] = standardTuning, numFrets: number = 12): string[][] {
  return tuning.map((openNote) => {
    return Array(numFrets + 1).fill('').map((_, fret) => getNoteAtFret(openNote, fret));
  });
}

// Test function to verify scale generation
export function getScaleNotes(rootNote: string, scaleName: string): string[] {
  let pattern;
  switch (scaleName) {
    case 'Major':
      pattern = majorScale;
      break;
    case 'Minor':
      pattern = minorScale;
      break;
    case 'Major Pentatonic':
      pattern = majorPentatonicScale;
      break;
    case 'Minor Pentatonic':
      pattern = minorPentatonicScale;
      break;
    case 'Blues':
      pattern = bluesScale;
      break;
    case 'Dorian':
      pattern = dorianScale;
      break;
    case 'Mixolydian':
      pattern = mixolydianScale;
      break;
    default:
      return [];
  }
  return generateScale(rootNote, pattern);
} 