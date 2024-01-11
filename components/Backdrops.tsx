
import React from 'react';

interface BackdropsProps {
  backdrops: string[];
}

const Backdrops: React.FC<BackdropsProps> = ({ backdrops }) => {
  return (
    <div>
   
      {backdrops.map((backdrop, index) => (
        <img key={index} src={backdrop} alt={`Backdrop ${index + 1}`} />
      ))}
    </div>
  );
};

export default Backdrops;
