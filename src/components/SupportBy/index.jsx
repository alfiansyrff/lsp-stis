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
      <div data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out" className="mt-16 bg-white bg-opacity-[35%]">
        <div className="flex items-center justify-center flex-col md:flex-row m-5 bg-white border-accent border-2 shadow-xl mx-auto rounded-3xl w-max h-max px-4 py-3 gap-[2.5em]">
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
