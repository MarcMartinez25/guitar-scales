import React from 'react'

interface FretNumbersProps {
    numFrets: number
}

const FretNumbers = ({ numFrets }: FretNumbersProps) => {
  return (
    <>
      {/* Fret numbers */}
      <div className="flex w-full">
        {/* Empty space for tuning column */}
        <div className="w-16 h-8 flex-shrink-0"></div>
        <div className="flex flex-1">
          {/* Create array of length numFrets starting from 1 */}
          {[...Array(numFrets)].map((_, i) => (
            <div 
              key={i} 
              className="flex-1 h-8 flex items-center justify-center text-sm font-medium text-gray-600"
              style={{ 
                borderRight: i === numFrets - 1 ? 'none' : '1px solid #e5e7eb',
                minWidth: '2.5rem',
                maxWidth: '4rem'
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FretNumbers