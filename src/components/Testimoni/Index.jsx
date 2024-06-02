import React from 'react';
import Heading from '../Heading/Index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardVideo from '../Card/CardVideo';
import { ArrowForward, ArrowBack, ArrowBackIosNew, ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

function Testimoni() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='my-[10em] max-w-5xl mx-auto'>

      <div data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">
        <Heading text={'Testimoni'}/>
      </div >

      <div data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">
        <Slider {...settings} className="space-x-4 mt-16">
          <div className="w-full px-4">
            <CardVideo name={'Prof. Dr. Chairy, SE, MM.'} jabatan={'Guru Besar dan Sekretaris Yayasan'} linkVideo={'https://lsp.stis.ac.id/video/2.mp4'}/>
          </div>
          <div className="w-full px-4">
            <CardVideo name={'Prof. Dr. Chairy, SE, MM.'} jabatan={'Guru Besar dan Sekretaris Yayasan'}  linkVideo={'https://lsp.stis.ac.id/video/2.mp4'}/>
          </div>
          <div className="w-full px-4">
            <CardVideo name={'Prof. Dr. Chairy, SE, MM.'} jabatan={'Guru Besar dan Sekretaris Yayasan'}  linkVideo={'https://lsp.stis.ac.id/video/2.mp4'}/>
          </div>
          <div className="w-full px-4">
            <CardVideo name={'Prof. Dr. Chairy, SE, MM.'} jabatan={'Guru Besar dan Sekretaris Yayasan'}  linkVideo={'https://lsp.stis.ac.id/video/2.mp4'}/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

// Custom previous arrow component
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} flex items-center`} // Make the arrow bigger and change its color
    style={{ ...style}}
    onClick={onClick}>
      <ArrowBackIos className='text-primaryBlue hover:text-ternaryBlue'  fontSize='large' />
    </div>
  )
}

// Custom next arrow component
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} flex items-center`} // Make the arrow bigger and change its color
    style={{ ...style}}
    onClick={onClick}>
      <ArrowForwardIos className='text-primaryBlue hover:text-ternaryBlue' fontSize='large' />
    </div>
  );
}

export default Testimoni;
