import React, { useState, useEffect } from "react";
import StarIcon from "@heroicons/react/16/solid/StarIcon";

function ProgressBar({ scoreCount }) {
  // setting the progress bar percentage to scoreCount
  const progressPercentage = (scoreCount / 10) * 100;

  //useState and useEffect hooks to change the colour and size of the star
  const [starClass, setStarClass] = useState(() => getStarClass(scoreCount));

  //condition deciding the class properties of the star
  function getStarClass(scoreCount) {
    if (scoreCount === 1 || scoreCount === 2 || scoreCount === 3) {
      return "h-16 w-16 fill-current text-amber-200 transition-all ease-out duration-1000";
    } else if (scoreCount === 4 || scoreCount === 5 || scoreCount === 6) {
      return " h-16 w-16 fill-current text-amber-300  transition-all ease-out duration-1000";
    } else if (scoreCount === 7 || scoreCount === 8 || scoreCount === 9) {
      return "h-16 w-16 fill-current text-amber-400  transition-all ease-out duration-1000";
    } else if (scoreCount === 10) {
      return "h-16 w-16 fill-current text-amber-500  transition-all ease-out duration-1000";
    } else {
      return "h-16 w-16 fill-current text-amber-50  transition-all ease-out duration-1000";
    }
  }

  useEffect(() => {
    setStarClass(getStarClass(scoreCount));
  }, [scoreCount]);

  return (
    <div>
      <div className="w-9/12 m-auto">
        <StarIcon
          className={starClass}
          style={{ marginLeft: `${progressPercentage}%` }}
        />
      </div>
      <div className="mt-0 self-start justify-self-center place-self-center m-auto w-9/12 bg-gray-200 rounded-full h-10 dark:bg-gray-700">
        <div
          className="progress bg-green-400 rounded-full h-full transition-all ease-out duration-1000"
          style={{ width: `${progressPercentage}%` }}
        />
        <div className="ml-4 text-sm text-right font-semibold">
          {`${scoreCount}/10`}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
