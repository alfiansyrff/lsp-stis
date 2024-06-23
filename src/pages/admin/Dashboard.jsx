import React, { useState } from 'react';
import AdminLayout from '../layout/AdminLayout';
import { Person, Apartment, Email, NoteAlt, Paid, FileUpload, UploadFile, Assignment, Grade } from '@mui/icons-material';
import FloatingNavbar from '../../components/FloatingNavbar/Index';
import Chart from 'react-apexcharts';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { Link } from 'react-router-dom';

function DashboardUser() {
  const breadcrumbs = [{ href: null, label: 'Dashboard' }];

  const activityData = {
    months: [
      { month: 'Jan', hours: 160 },
      { month: 'Feb', hours: 170 },
      { month: 'Mar', hours: 150 },
      { month: 'Apr', hours: 180 },
      { month: 'Mei', hours: 175 },
      { month: 'Jun', hours: 190 },
    ],
    weeks: [
      { week: 'Minggu 1', hours: 40 },
      { week: 'Minggu 2', hours: 50 },
      { week: 'Minggu 3', hours: 45 },
      { week: 'Minggu 4', hours: 48 },
    ],
    days: [
      { day: 'Sen', hours: 10 },
      { day: 'Sel', hours: 12 },
      { day: 'Rab', hours: 9 },
      { day: 'Kam', hours: 11 },
      { day: 'Jum', hours: 13 },
      { day: 'Sab', hours: 15 },
      { day: 'Min', hours: 14 },
    ],
  };

  const [selectedPeriod, setSelectedPeriod] = useState('months');

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const currentData = activityData[selectedPeriod];
  const labels = currentData.map(item => selectedPeriod === 'months' ? item.month : (selectedPeriod === 'weeks' ? item.week : item.day));
  const hours = currentData.map(item => item.hours);

  const lastValue = hours[hours.length - 1];
  const secondLastValue = hours[hours.length - 2];
  const difference = lastValue - secondLastValue;
  const isIncrease = difference >= 0;
  const percentageChange = ((Math.abs(difference) / secondLastValue) * 100).toFixed(1);

  const chartOptions = {
    chart: {
      id: 'user-activity-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: labels,
      title: {
        text: selectedPeriod === 'months' ? 'Bulan' : (selectedPeriod === 'weeks' ? 'Minggu' : 'Hari'),
        style: {
          color: '#228be6',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Menit',
        style: {
          color: '#228be6',
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0
      }
    },
    
  };

  const chartSeries = [
    {
      name: 'Lama Penggunaan (menit)',
      data: hours,
    },
  ];

  return (
    <AdminLayout>
      <FloatingNavbar breadcrumbs={breadcrumbs} />

      <div className="p-10 mt-0 mx-auto">
        <h1 className="text-3xl text-ternaryBlue font-bold">Selamat Datang, Alfian Syarif!</h1>

        <div className="mt-5 flex flex-col md:flex-row bg-white rounded-2xl p-5 justify-between space-y-5 md:space-y-0">
          {/* Nama */}
          <div className="flex items-center space-x-5">
            <Person className="text-primaryBlue bg-secondaryBlue p-1 rounded-lg" fontSize="large" />
            <div className="flex flex-col text-sm">
              <p className="mb-0 font-semibold text-ternaryBlue">Nama</p>
              <p className="text-gray-500 text-[12px]">Alfian Syarif</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-5">
            <Email className="text-primaryBlue bg-secondaryBlue p-1 rounded-lg" fontSize="large" />
            <div className="flex flex-col text-sm">
              <p className="mb-0 font-semibold text-ternaryBlue">Email</p>
              <p className="text-gray-500 text-[12px]">222112218@stis.ac.id</p>
            </div>
          </div>

          {/* Asal Institusi */}
          <div className="flex items-center space-x-5">
            <Apartment className="text-primaryBlue bg-secondaryBlue p-1 rounded-lg" fontSize="large" />
            <div className="flex flex-col text-sm">
              <p className="mb-0 font-semibold text-ternaryBlue">Asal Institusi</p>
              <p className="text-gray-500 text-[12px]">Politeknik Statistika STIS</p>
            </div>
          </div>
        </div>
        

        <div className='mt-10'>

          <div className="flex items-center mb-5">
            <p className="text-xl text-ternaryBlue font-bold">Prosedur Sertifikasi</p>
            <div className="flex-grow border-t border-gray-500 ml-4"></div>
          </div>

          <div className='xl:hidden'>
            <p className='text-sm text-gray-700 mb-5'>
              Prosedur sertifikasi dapat dilihat melalui <span className='text-primaryBlue hover:underline'>
                <Link to={'/sertifikasi'}>panduan pengguna</Link>
              </span>
            </p>
          </div>

          <div className='bg-white shadow p-5 rounded-2xl hidden xl:block'>
            <ol className="items-center sm:flex justify-center">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-secondaryBlue rounded-full ring-0 ring-white shrink-0">
                    <NoteAlt fontSize='medium' className='text-primaryBlue p-1'/>
                  </div>
                  <div className="hidden sm:flex w-full bg-ternaryBlue h-0.5"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-ternaryBlue">Daftar Sertifikasi</h3>
                  
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        
                    <Paid fontSize='medium' className='text-primaryBlue p-1' />
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg text-gray-500">Pembayaran Sertifikasi</h3>
                 
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                   <UploadFile fontSize='medium' className='text-primaryBlue p-1'/>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg text-gray-500">Dokumen FR.APL.01</h3>
                
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                   <UploadFile fontSize='medium' className='text-primaryBlue p-1'/>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg text-gray-500">Dokumen FR.APL.02</h3>
                
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                   <UploadFile fontSize='medium' className='text-primaryBlue p-1'/>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg text-gray-500">Dokumen FR.AK.01</h3>
                
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <Assignment fontSize='medium' className='text-primaryBlue p-1'/>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg text-gray-500">Ujian Kompetensi</h3>
                
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <UploadFile fontSize='medium' className='text-primaryBlue p-1'/>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg text-gray-500">Dokumen FR.AK.02</h3>
                
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <Grade  fontSize='medium' className='text-primaryBlue p-1'/>
                  </div>
                 
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg text-gray-500">Keputusan Sertifikasi</h3>
                
                </div>
              </li>
            </ol>

          </div>
        </div>

        <div className="mt-10 grid gap-10 md:hidden">
          {/* Statistic Title */}
          <div className="flex items-center mb-5">
            <p className="text-xl text-ternaryBlue font-bold">Statistik dan Kemajuan</p>
            <div className="flex-grow border-t border-gray-500 ml-4"></div>
          </div>

          {/* Line Chart */}
          <div className="w-full md:w-1/2 p-4 bg-white glassmorphism rounded-2xl shadow">
            <div className="flex justify-between gap-x-3 items-center pb-4 mb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-primaryOrange">Lama Penggunaan Website</h2>
              <select   value={selectedPeriod}
                onChange={handlePeriodChange} className="p-2 rounded bg-white border border-gray-300 text-ternaryBlue">
                <option value="months">Tahun ini</option>
                <option value="weeks">Bulan ini</option>
                <option value="days">Minggu ini</option>
              </select>
            </div>

            <div className="flex items-center text-sm space-x-3 mb-4">
              <span className={`text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ${isIncrease ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}>
                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isIncrease ? "M5 13V1m0 0L1 5m4-4 4 4" : "M5 1v12m0 0 4-4M5 13 1 9"} />
                </svg>
                {isIncrease ? '+' : '-'}{percentageChange}%
              </span>
              <p className="text-ternaryBlue">
                {isIncrease ? 'Naik' : 'Turun'} dibandingkan {selectedPeriod === 'months' ? 'bulan sebelumnya' : (selectedPeriod === 'weeks' ? 'minggu sebelumnya' : 'hari sebelumnya')}
              </p>
            </div>

            <Chart options={chartOptions} series={chartSeries} type="area" height={350} />
          </div>

          {/* Progress Bar Chart */}
          <div className="w-full md:w-1/2 p-4 bg-white glassmorphism rounded-2xl shadow">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-primaryOrange">Kemajuan Proses Administrasi</h2>
            </div>

            <div className="space-y-4">
              {/* Progress Item 1 */}
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-ternaryBlue dark:text-white">Pembayaran Sertifikasi</span>
                <span className="text-sm font-medium text-ternaryBlue dark:text-white">25% <span className="text-[12px] text-gray-500">(Menunggu pembayaran)</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width:'25%' }}></div>
              </div>

              {/* Progress Item 2 */}
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-ternaryBlue dark:text-white">Dokumen FR.APL.01</span>
                <span className="text-sm font-medium text-ternaryBlue dark:text-white">0% <span className="text-[12px] text-gray-500">(Belum diunggah)</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>

              {/* Progress Item 3 */}
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-ternaryBlue dark:text-white">Dokumen FR.APL.02</span>
                <span className="text-sm font-medium text-ternaryBlue dark:text-white">0% <span className="text-[12px] text-gray-500">(Belum diunggah)</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>

              {/* Progress Item 4 */}
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-ternaryBlue dark:text-white">Dokumen FR.AK.01</span>
                <span className="text-sm font-medium text-ternaryBlue dark:text-white">0% <span className="text-[12px] text-gray-500">(Belum diunggah)</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>

              {/* Progress Item 5 */}
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-ternaryBlue dark:text-white">Dokumen FR.AK.02</span>
                <span className="text-sm font-medium text-ternaryBlue dark:text-white">0% <span className="text-[12px] text-gray-500">(Belum diunggah)</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 hidden md:block">
          {/* Statistic Title */}
          <div className="flex items-center mb-5">
            <p className="text-xl text-ternaryBlue font-bold">Statistik dan Kemajuan</p>
            <div className="flex-grow border-t border-gray-500 ml-4"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Column (Line Chart) */}
            <div className="p-4 bg-white rounded-2xl shadow">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-primaryOrange">Lama Penggunaan Website</h2>
                <select value={selectedPeriod}
                onChange={handlePeriodChange} className="p-2 rounded bg-white border border-gray-300 text-ternaryBlue">
                  <option value="months">Bulanan</option>
                  <option value="weeks">Mingguan</option>
                  <option value="days">Harian</option>
                </select>
              </div>

              <div className="flex items-center text-sm space-x-3 mb-4">
                <span className={`text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ${isIncrease ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`}>
                  <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isIncrease ? "M5 13V1m0 0L1 5m4-4 4 4" : "M5 1v12m0 0 4-4M5 13 1 9"} />
                  </svg>
                  {isIncrease ? '+' : '-'}{percentageChange}%
                </span>
                <p className="text-ternaryBlue">
                  {isIncrease ? 'Naik' : 'Turun'} dibandingkan {selectedPeriod === 'months' ? 'bulan sebelumnya' : (selectedPeriod === 'weeks' ? 'minggu sebelumnya' : 'hari sebelumnya')}
                </p>
              </div>

              <Chart options={chartOptions} series={chartSeries} type="area" height={350} />
            </div>

            {/* Right Column (Progress Bar Chart) */}
            <div className="p-4 bg-white rounded-2xl shadow">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-primaryOrange">Kemajuan Proses Administrasi</h2>
              </div>

              <div className="space-y-8">
                {/* Progress Item 1 */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-ternaryBlue dark:text-white">Pembayaran Sertifikasi</span>
                    <span className="text-sm font-medium text-ternaryBlue dark:text-white">25% <span className="text-[12px] text-gray-500">(Menunggu pembayaran)</span></span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width:'25%' }}></div>
                  </div>
                </div>

                {/* Progress Item 2 */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-ternaryBlue dark:text-white">Dokumen FR.APL.01</span>
                    <span className="text-sm font-medium text-ternaryBlue dark:text-white">0% <span className="text-[12px] text-gray-500">(Belum diunggah)</span></span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>

                {/* Progress Item 3 */}
                <div>

                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-ternaryBlue dark:text-white">Dokumen FR.APL.02</span>
                  <span className="text-sm font-medium text-ternaryBlue dark:text-white">0% <span className="text-[12px] text-gray-500">(Belum diunggah)</span></span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
                </div>

                {/* Progress Item 4 */}
                <div>

                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-ternaryBlue dark:text-white">Dokumen FR.AK.01</span>
                    <span className="text-sm font-medium text-ternaryBlue dark:text-white">0% <span className="text-[12px] text-gray-500">(Belum diunggah)</span></span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>

                {/* Progress Item 5 */}
                <div>

                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-ternaryBlue dark:text-white">Dokumen FR.AK.02</span>
                    <span className="text-sm font-medium text-ternaryBlue dark:text-white">0% <span className="text-[12px] text-gray-500">(Belum diunggah)</span></span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-primaryBlue h-2.5 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}

export default DashboardUser;
