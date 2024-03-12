import React from "react";

function ProgressBar({ scoreCount }) {
  const progressPercentage = (scoreCount / 10) * 100;

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="w-64 bg-gray-200 rounded-full h-8 dark:bg-gray-700">
        <div
          className="bg-green-400 rounded-full h-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="ml-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
        {`${scoreCount}/10`}
      </div>
    </div>
  );
}

export default ProgressBar;
