import React from 'react';
import { YouTube, Instagram, Facebook, Twitter, Room, Email } from '@mui/icons-material';
import FooterTitle from './FooterTittle';
import FooterList from './FooterList';


const medSos = [
  {
    icon: Twitter,
    href: 'http://twitter.com/Lspstis',
    text: '@Lspstis',
  },
  {
    icon: YouTube,
    href: 'https://www.youtube.com/channel/UCwmpr4lmrApoGRpq4TcmsvA',
    text: 'Politeknik Statistika STIS',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/lspstis/',
    text: '@lspstis',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/PolstatSTIS/',
    text: 'Sekolah Tinggi Ilmu Statistik (STIS)',
  },
];

const contacts = [
  {
    icon: Room,
    href: 'https://goo.gl/maps/az5MAbFFxCu/',
    text: 'Jl. Otto Iskandardinata No.64C Jakarta 13330',
  },
  {
    icon: Email,
    href: 'mailto:helpdesk.semnas@stis.ac.id',
    text: 'helpdesk.semnas@stis.ac.id',
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-ternaryBlue text-white md:h-96 flex md:flex-around flex-col md:flex-row overflow-hidden md:items-center p-5 md:p-0 border-t-2 border-accent"
    >
      <div className="flex flex-col justify-center items-center md:w-4/12 mb-5 md:my-0">
        <div className='flex items-center'>
          <img
            alt="logo stis"
            src="/image/logo.png"
            width={100}
            height={100}
          />
          
          {/* Divider here */}
          <div className='w-[6px] rounded-full h-24 bg-primaryBlue mx-4'></div>
          
          <p className='block text-2xl'>
            Lembaga <span className='block'>Sertifikasi</span> <span className='block'>Profesi</span>
          </p>
        </div>

        <p className="whitespace-pre-wrap w-42 md:text-left ml-6 text-lg text-white mt-5">
          <span className="mr-2">&#169;</span>
          LSP Politeknik Statistika STIS 2024
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-9/12 mx-auto">
        <div>
          <FooterTitle title="Media Sosial" />
          <FooterList items={medSos} />
        </div>
        <div>
          <FooterTitle title="Kontak Kami" />
          <FooterList items={contacts} />
        </div>
      </div>

      <div className='hidden md:block absolute right-0 bottom-0'>
        <img src="/image/pattern1.png" width={180} height={180} alt="" srcSet="" />
      </div>

      <div className='hidden md:block absolute left-0 bottom-0'>
        <img src="/image/pattern1.png" width={180} height={180} alt="" srcSet=""  style={{ transform: 'scaleX(-1)' }} />
      </div>
    </footer>
  );
}
