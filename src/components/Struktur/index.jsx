import React from 'react'
import Heading from '../Heading/Index'

function Struktur() {
  return (
    <div className='my-[10em] max-w-5xl mx-auto px-5'>

      <div data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">
       <Heading text={'Struktur Organisasi'}/>
      </div>

      <div data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out">
        <img className='mt-10' src="image/struktur.png" alt="Struktur Organisasi" srcSet="" />
      </div>
    </div>
  )
}

export default Struktur