import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="flex items-center">
      <div className="relative w-64 h-4 bg-gray-200 rounded">
        <div
          className="absolute top-0 left-0 h-full rounded bg-gradient-to-r from-blue-300 to-violet-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="ml-2">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
