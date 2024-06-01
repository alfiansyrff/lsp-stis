import React from 'react'
import GuestLayout from '../layout/GuestLayout'
import BreadCrumbs from '../../components/Breadcrumbs';
import TitlePage from '../../components/TitlePage';
import AccordionSertif from '../../components/Accordion/AccordionSertif';
import SkemaSertifikasi from '../../components/SkemaSertifikasi';

function Sertifikasi() {
  
  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Sertifikasi', href: null },
  ];


  return (
    <GuestLayout>
       <BreadCrumbs links={links} />

       <TitlePage title={'Sertifikasi LSP Polstat STIS'} desc={'Berisikan informasi skema sertifikasi dan buku panduan pengguna'} />

       <SkemaSertifikasi />
    </GuestLayout>
  )
}

export default Sertifikasi