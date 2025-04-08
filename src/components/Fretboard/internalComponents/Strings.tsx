import React from 'react'

interface StringsProps {
  fretboard: string[][],
  tuning: string[],
  scaleNotes: string[]
}

const Strings = ({ fretboard, tuning, scaleNotes }: StringsProps) => {
  // Calculate the number of frets from the fretboard data, excluding the open string position
  const numFrets = Math.max(0, (fretboard[0]?.length || 1) - 1);

  return (
    <>
      <div className="space-y-0">
        {fretboard.map((string, stringIndex) => (
          <div key={stringIndex} className="flex w-full">
            {/* String name */}
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center font-bold">
              {tuning[stringIndex]}
            </div>
            
            <div className="flex flex-1 relative">
              {/* Horizontal string line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300"></div>
              
              {/* Start from index 1 to skip open string */}
              {string.slice(1).map((note, fretIndex) => (
                <div
                  key={fretIndex}
                  className="flex-1 h-16 relative"
                  style={{ 
                    borderRight: fretIndex === numFrets - 1 ? 'none' : '1px solid #e5e7eb',
                    minWidth: '2.5rem',
                    maxWidth: '4rem'
                  }}
                >
                  {note && scaleNotes.includes(note) && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-base
                        ${note === scaleNotes[0] ? 'bg-blue-900' : 'bg-blue-300'}`}
                      >
                        {note}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Strings