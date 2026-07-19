import React from 'react';

// MICRO-DETAIL: Editorial Frame
// To remove, simply remove <EditorialFrame /> from App.jsx
const EditorialFrame = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] border-[8px] md:border-[12px] border-white mix-blend-difference opacity-50" />
  );
};

export default EditorialFrame;
