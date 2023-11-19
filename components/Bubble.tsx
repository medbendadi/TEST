import Image from 'next/image';
import React from 'react';

interface BubbleProps {
   src: string;
   key: number;
}

const Bubble: React.FC<BubbleProps> = ({ src, key }) => {
  const getRandomValue = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

  const bubbleStyle: React.CSSProperties = {
    left: `${getRandomValue(-20, 100)}%`,
    bottom: `${getRandomValue(-20, 100)}%`,
    animation: `move infinite ${getRandomValue(3, 15)}s`,
  };

   return (
      <Image
         key={key}
         className='absolute bubble pointer-events-none'
         src={src}
         alt={`Bubble ${key + 1}`}
         width={60}
         height={60}
         objectFit='contain'
         style={bubbleStyle}
      />
   )
};

export default Bubble;