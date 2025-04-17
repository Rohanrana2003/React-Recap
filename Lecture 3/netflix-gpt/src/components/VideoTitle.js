import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-56 px-20 bg-white min-h-screen">
      {/* Title and Description */}
      <div className="font-semibold text-[50px]">{title}</div>
      <div className="max-w-[50%]">{overview}</div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-10">
        <button className="px-12 py-[10px] border border-black rounded-md font-bold cursor-pointer hover:scale-95 transition-all duration-500">
          Play
        </button>
        <button className="px-12 py-[10px] border border-black rounded-md font-bold cursor-pointer hover:scale-95 transition-all duration-500">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
