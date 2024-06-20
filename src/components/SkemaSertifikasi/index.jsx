import React from 'react'
import Heading from '../Heading/Index'
import AccordionSertif from '../Accordion/AccordionSertif';
import TableSkemaDataScientist from './TableSkemaDataScientist';
import TableSkemaAssociate from './TableSkemaAssociate';
import BookletCard from './Card';
import TabMenu from '../Accordion/AccordionSertif';

function SkemaSertifikasi() {


  const accordionItems = [
    {
      title: 'Ilmuwan Data (Data Scientist)',
      content: <TableSkemaDataScientist />,
    },
    {
      title: 'Ilmuwan Data Madya (Associate Data Scientist)',
      content: <TableSkemaAssociate />
    },
  ];
  
  return (
    <div className='max-w-7xl px-5 mx-auto'>
      <Heading text={'Skema Sertifikasi'}/>
      
      <TabMenu items={accordionItems}/>

      <Heading text={'Panduan Pengguna'}/>

      <div className='my-16 flex flex-wrap items-center justify-between'>
        <BookletCard imageSrc={'/image/panduan_asesor.png'} title={'Buku Panduan Asesor'} fileLink={'panduan_asesor.pdf'} />
        <BookletCard imageSrc={'/image/panduan_admin.png'} title={'Buku Panduan Admin'} fileLink={'panduan_adnin.pdf'} />
        <BookletCard imageSrc={'/image/panduan_asesi.png'} title={'Buku Panduan Asesi'} fileLink={'panduan_asesi.pdf'} />
      </div>
        
    </div>
  )
}

export default SkemaSertifikasi