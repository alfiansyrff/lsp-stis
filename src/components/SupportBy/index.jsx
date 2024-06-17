import React from 'react';
import SupportLogo from './SupportLogo';
import Heading from '../Heading/Index';

const support = [
  {
    link: "https://stis.ac.id/",
    title: "Politeknik Statistika STIS",
    alt: "Polstat STIS",
    src: "/image/logo.png",
    width: 100,
    height: 100,
  },
  {
    link: "https://bnsp.go.id/",
    title: "BNSP (Badan Nasional Sertifikat Profesi)",
    alt: "BPS",
    src: "/image/bnsp.png",
    width: 100,
    height: 100,
  },
];

function SupportBy() {
  return (
    <div className='my-[10em] max-w-5xl mx-auto'>

      <div data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out">
        <Heading text="Diselenggarakan Oleh" />
      </div>
      
      <div className="mt-16 bg-white bg-opacity-[35%] max-w-md mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-5 m-5 p-4 bg-white border-accent border-2 shadow-xl rounded-3xl">
          {support.map((item) => (
            <SupportLogo
              key={item.title}
              link={item.link}
              title={item.title}
              alt={item.alt}
              src={item.src}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SupportBy;
