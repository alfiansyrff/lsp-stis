import React, { useRef } from 'react';

function CardVideo({ linkVideo, name, jabatan }) {
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    // Check if videoRef is not null and linkVideo is provided
    if (videoRef.current && linkVideo) {
      // Set the playback position to the second 3 (3000 milliseconds)
      videoRef.current.currentTime = 1;
    }
  };

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-t-lg rounded-b-2xl shadow dark:bg-gray-800 dark:border-gray-700">
        <video
          ref={videoRef}
          className='rounded-t-lg'
          src={linkVideo}
          alt={`Link Video Testimoni ${name}`}
          controls
          onLoadedMetadata={handleLoadedMetadata} // Call handleLoadedMetadata when video metadata is loaded
        ></video>
        <div className="p-5 bg-primaryBlue rounded-b-2xl">
          <p className="mb-3 text-white font-bold text-xl text-center">{name}</p>
          <p className="mb-3 font-normal text-white text-md text-center">{jabatan}</p>
        </div>
      </div>
    </div>
  );
}

export default CardVideo;
