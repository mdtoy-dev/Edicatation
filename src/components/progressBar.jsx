import React from 'react';

function ProgressBar({ scoreCount }) {

  const progressPercentage = (scoreCount / 10) * 100; 

  return (
    <div className="mt-0 self-start justify-self-center place-self-center m-auto w-9/12 bg-gray-200 rounded-full h-10 dark:bg-gray-700">
      <div
        className="bg-green-400 rounded-full h-full"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;