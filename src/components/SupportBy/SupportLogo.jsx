import React from 'react';

function SupportLogo({ link, title, alt, src, width, height }) {
  return (
    <div className="logo-container">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className=""
      >
        <img
          src={src}
          alt={alt}
          className="transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
          width={width}
          height={height}
        />
      </a>
    </div>
  );
}

export default SupportLogo;
