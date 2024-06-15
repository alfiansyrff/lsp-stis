import React from 'react'
import GuestLayout from '../layout/GuestLayout'
import BreadCrumbs from '../../components/Breadcrumbs'
import TitlePage from '../../components/TitlePage';
import TableRegulasi from '../../components/TableRegulasi';

function Reguilasi() {

  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Regulasi', href: null },
  ];



  return (
    <GuestLayout>
      <BreadCrumbs links={links} />

      <TitlePage title={'Pedoman dan Regulasi'} desc={'Daftar pedoman dan regulasi terkait dengan Badan Nasional Sertifikasi Profesi (BNSP)'} />

      <TableRegulasi />
    </GuestLayout>
  )
}

export default Reguilasi