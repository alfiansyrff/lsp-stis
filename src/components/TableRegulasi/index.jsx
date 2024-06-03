import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import PrimaryButton from '../Button/PrimaryButton';
import { ChevronLeft, ChevronRight } from '@mui/icons-material'; 

function TableRegulasi() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); 
  const itemsPerPage = 10;

  const allData = [
    { no: 1, kode: 'UU Nomor 13 Tahun 2003 - Ketenagakerjaan', link: 'link_to_download_1' },
    { no: 2, kode: 'Perpres Nomor 8 Tahun 2012 - Kerangka Kualifikasi Nasional Indonesia (KKNI)', link: 'link_to_download_2' },
    { no: 3, kode: 'Perpres Nomor 59 Tahun 2017 - Pelaksanaan Pencapaian Tujuan Pembangunan Berkelanjutan', link: 'link_to_download_3' },
    { no: 4, kode: 'PP Nomor 23 Tahun 2004 - Badan Nasional Sertifikasi Profesi', link: 'link_to_download_4' },
    { no: 5, kode: 'PP Nomor 31 Tahun 2006 - Sistem Pelatihan Kerja Nasional', link: 'link_to_download_5' },
    { no: 6, kode: 'PP Nomor 10 Tahun 2018 - Badan Nasional Sertifikasi Profesi', link: 'link_to_download_6' },
    { no: 7, kode: 'PP Nomor 31 Tahun 2019 - Pelaksanaan UU Nomor 3 Tahun 2014 Jaminan Produk Halal', link: 'link_to_download_7' },
    { no: 8, kode: 'Permen NakerTrans Nomor 8 Tahun 2012 - Tata Cara Penetapan Standar Kompetensi Kerja Nasional Indonesia', link: 'link_to_download_8' },
    { no: 9, kode: 'Permen Naker Nomor 2 Tahun 2016 - Sistem Standarisasi Kompetensi Kerja Nasional', link: 'link_to_download_9' },
    { no: 10, kode: 'Permen Naker Nomor 3 Tahun 2016 - Standar Kompetensi Kerja Nasional Indonesia (SKKNI)', link: 'link_to_download_10' },
    { no: 11, kode: 'SE Menteri Naker Nomor 5 Tahun 2019 - Pemberlakuan Wajib Sertifikasi Kompetensi Jabatan Bidang MSDM', link: 'link_to_download_11' },
    { no: 12, kode: 'Pedoman BNSP 201 - 2014 Persyaratan Umum Lembaga Sertifikasi Profesi', link: 'link_to_download_12' },
    { no: 13, kode: 'Pedoman BNSP 202 - 2014 Pembentukan Lembaga Sertifikasi Profesi', link: 'link_to_download_13' },
    { no: 14, kode: 'Pedoman BNSP 203 - 2007 Pelatihan Asesor Lisensi', link: 'link_to_download_14' },
    { no: 15, kode: 'Pedoman BNSP 204 - 2007 Kriteria Asesor Lisensi', link: 'link_to_download_15' },
    { no: 16, kode: 'Pedoman BNSP 205 - 2007 Kriteria Lembaga Pelatihan Asesor Lisensi', link: 'link_to_download_16' },
    { no: 17, kode: 'Pedoman BNSP 206 - 2014 Persyaratan Umum Tempat Uji Kompetensi', link: 'link_to_download_17' },
    { no: 18, kode: 'Pedoman BNSP 207 - 2007 Persyatan Umum LSP Cabang', link: 'link_to_download_18' },
    { no: 19, kode: 'Pedoman BNSP 208 - 2014 Ketentuan Umum Lisensi BNSP Kepada LSP', link: 'link_to_download_19' },
    { no: 20, kode: 'Pedoman BNSP 210 - 2017 Pengembangan dan Pemeliharaan Skema Sertifikasi Profesi', link: 'link_to_download_20' },
    { no: 21, kode: 'Pedoman BNSP 211 - 2013 Laporan Pelaksanaan Kegiatan LSP Kepada BNSP', link: 'link_to_download_21' },
    { no: 22, kode: 'Pedoman BNSP 214 - 2013 Verifikasi TUK Oleh TUK', link: 'link_to_download_22' },
    { no: 23, kode: 'Pedoman BNSP 218 - 2013 Persyaratan Umum Asesor', link: 'link_to_download_23' },
    { no: 24, kode: 'Pedoman BNSP 219 - 2014 Pedoman Penilaian Kinerja Lembaga Sertifikasi Profesi', link: 'link_to_download_24' },
    { no: 25, kode: 'Pedoman BNSP 301 - 2013 Pelaksanaan Asesmen Kompetensi', link: 'link_to_download_25' },
    { no: 26, kode: 'Pedoman BNSP 302 - 2013 Penerbitan Sertfikat Kompetensi', link: 'link_to_download_26' },
    { no: 27, kode: 'Pedoman BNSP 303 - 2013 Pedoman Persyaratan Umum Asesor, Master Asesor dan Lead Asesor', link: 'link_to_download_27' },
    { no: 28, kode: 'Pedoman BNSP 304 - 2008 Uji Kopetensi Oleh Panitia Teknis BNSP', link: 'link_to_download_28' },
    { no: 29, kode: 'Pedoman BNSP 305 - 2013 Pedomanan Pelaksanaan Uji Kompetensi', link: 'link_to_download_29' },
    { no: 30, kode: 'Pedoman BNSP 306 - 2014 Pelaksanaan Sertifikasi Kompetensi Kerja', link: 'link_to_download_30' },
    { no: 31, kode: 'Pedoman BNSP 401 - 2006 Pembentukan BKSP', link: 'link_to_download_31' },
    { no: 32, kode: 'Pedoman BNSP 502 - 2012 Pedoman Konsorsium', link: 'link_to_download_32' },
    { no: 33, kode: 'Pedoman BNSP 503 - 2012 Pengendalian Online Sertifikasi Kompetensi BNSP', link: 'link_to_download_33' },
    { no: 34, kode: 'Pedoman BNSP 508 - 2013 Manajemen Sistem Informasi Sertifikasi LSP Dan BNSP', link: 'link_to_download_34' },
    { no: 35, kode: 'Pedoman BNSP 604 - 2012 Pedoman Advokasi', link: 'link_to_download_35' },
    { no: 36, kode: 'Pedoman Teknis - Pelaksanaan Sertifikasi Kompetensi Kerja (PSKK) APBN Tahun 2016', link: 'link_to_download_36' },
    { no: 37, kode: 'Petunjuk Teknis (JUKNIS) - Pelatihan Asesor Kompetensi dan Recognition Current Competency (RCC) Tahun 2019', link: 'link_to_download_37' },
    { no: 38, kode: 'Form Kelengkapan Dokumen Lisensi Awal', link: 'link_to_download_38' },
    { no: 39, kode: 'Form Kelengkapan Dokumen PRL', link: 'link_to_download_39' },
    { no: 40, kode: 'Form Kelengkapan Dokumen Relisensi', link: 'link_to_download_40' },
    { no: 41, kode: 'Form Kelengkapan Dokumen Verifikasi Skema', link: 'link_to_download_41' },
    { no: 42, kode: 'SOP Pelayanan Blanko Sertifikasi', link: 'link_to_download_42' },
    { no: 43, kode: 'SOP Pelayanan Penggantian Blanko Sertifikasi Kompetensi', link: 'link_to_download_43' },
    { no: 44, kode: 'C1-Sistem-Manajemen-Mutu_ISO_9001_2015', link: 'link_to_download_44' },
    { no: 45, kode: 'SKKNI No. 333 Tahun 2020 Bidang Standarisasi, Pelatihan Kerja dan Sertifikasi', link: 'link_to_download_45' }
  ];
  
  
  useEffect(() => {
    setLoading(true);
    const debouncedSearch = debounce((searchTerm) => {
      const filtered = allData.filter(unit =>
        unit.kode.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
      setLoading(false);
    }, 300);

    debouncedSearch(searchTerm);

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className='my-5 max-w-7xl px-5 mx-auto'>
      <div className='mb-5 flex justify-end'>
        <form className="max-w-md">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari regulasi" required onChange={handleSearchChange} />
          </div>
        </form>
      </div>
  
      {/* Render skeleton loading when data is being fetched */}
      {loading ? (
        <div className="animate-pulse space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-md p-4 w-full"></div>
          ))}
        </div>
      ) : (
        <>
          {currentItems.length === 0 && (
            <div className='bg-white flex flex-col space-y-5 mx-auto justify-center items-center h-[18em] mb-5'>
              <img src="/image/not-found.svg" alt="Tidak Ditemukan" width={100} />
              <h1 className='text-center text-2xl text-ternaryBlue'>Regulasi tidak ditemukan</h1>
            </div>
          )}
  
          {currentItems.length > 0 && (
            <table className="w-full text-sm text-left text-ternaryBlue dark:text-gray-400 mb-5">
              <thead className="text-md text-center uppercase bg-ternaryBlue text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-tl-lg" style={{width:200}}>No</th>
                  <th scope="col" className="px-6 py-3">Regulasi</th>
                  <th scope="col" className="px-6 py-3 rounded-tr-lg" style={{width:200}}>Berkas</th>
                </tr>
              </thead>
  
              <tbody>
                {currentItems.map((unit, index) => (
                  <tr key={unit.no} className={index % 2 === 0 ? "bg-white" : "bg-gray-200" + " border-b hover:bg-gray-300"}>
                    <td className="px-6 py-4 text-center">{unit.no}</td>
                    <td className="px-6 py-4 text-center"><p className='bg-ternaryBlue bg-opacity-20 p-2 font-bold text-ternaryBlue rounded-full'>{unit.kode}</p></td>
                    <td className="px-6 py-4 flex mx-auto justify-center">
                      <PrimaryButton text={'Unduh'}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
  
          {currentItems.length !== 0 && (
            <div className='flex justify-end'>

            
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-ternaryBlue bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronLeft fontSize='medium' />
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`flex items-center justify-center px-3 h-8 leading-tight text-ternaryBlue bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === index + 1 ? 'bg-blue-500 bg-opacity-20 text-ternaryBlue' : ''}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-ternaryBlue bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronRight />
                  </button>
                </li>
              </ul>
            </nav>
            </div>
          )}
        </>
      )}
    </div>
  );  
}

export default TableRegulasi;