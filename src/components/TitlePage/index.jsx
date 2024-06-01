import React from 'react'

function TitlePage({title, desc}) {
  return (
    <div className='mt-5 mb-10 max-w-7xl px-5 mx-auto'>
    <p className='text-3xl text-ternaryBlue mb-1 font-bold'>{title}</p>
    <p className='text-md text-ternaryBlue'>{desc}</p>
  </div>
  )
}

export default TitlePage