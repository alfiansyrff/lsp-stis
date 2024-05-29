import React from 'react';

function Heading({text}) {
  return (
    <div className="flex justify-center mb-2">
    <h1 className="relative z-10 text-2xl text-center md:text-3xl lg:text-4xl text-ternaryBlue font-extrabold uppercase">
      {text}
      <span className="absolute -bottom-4 left-0 right-0 w-7/12 mx-auto h-1 bg-primaryOrange"></span>
    </h1>
  </div>
  );
}

export default Heading;
