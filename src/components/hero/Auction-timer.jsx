import React, { useState, useEffect } from 'react';

const AuctionTimer = () => {
  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60); // 6 hours in seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const formatTime = () => {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = Math.floor((timeLeft % 3600) % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-white px-[20px]">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold uppercase">Ends in</span>
          <span className="text-lg font-bold">{formatTime()}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold uppercase">Current bid</span>
          <span className="text-lg font-bold">0.24ETH</span>
        </div>
      </div>
      <button className="mt-4 bg-yellow-400 text-blue-800 w-full py-2 px-4 rounded hover:bg-yellow-300">
        Place A Bid
      </button>
    </div>
  );
};

export default AuctionTimer;
