import React, { useState, useEffect } from 'react';
import GuestLayout from '../layout/GuestLayout';
import BreadCrumbs from '../../components/Breadcrumbs';
import TitlePage from '../../components/TitlePage';
import Chart from 'react-apexcharts';

function Statistik() {
  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Statistik', href: null },
  ];

  const years = [2024, 2023, 2022];

  const [selectedYear, setSelectedYear] = useState(2024);
  const [visitorData, setVisitorData] = useState([]);

  // Example visitor data for different years
  const visitorDataByYear = {
    2024: [400, 270, 480, 660, 390, 520, 950, 1100, 1200, 900, 950, 900],
    2023: [300, 600, 400, 500, 550, 780, 655, 1000, 1100, 1200, 850, 900],
    2022: [300, 500, 600, 400, 700, 800, 750, 900, 1000, 1100, 1050, 1200],
  };

  useEffect(() => {
    // Fetch or set the initial visitor data based on selected year
    setVisitorData(visitorDataByYear[selectedYear]);
  }, [selectedYear]);

  // Function to handle year dropdown change
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  // Define the options for the line chart
  const lineChartOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      title: {
        text: 'Bulan',
      },
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
        'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
      ],
    },
    yaxis: {
      title: {
        text: 'Jumlah Pengunjung',
      },
    },
  };

  // Series for the line chart
  const lineChartSeries = [
    {
      name: 'Pengunjung',
      data: visitorData,
    },
  ];
  

  // Define the data and options for the donut chart
  const donutChartOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Ilmuwan Data', 'Ilmuwan Data Madya'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const donutChartSeries = [40, 26];

   // Define the data and options for the donut chart
   const donutChartOptions2 = {
    chart: {
      type: 'donut',
    },
    labels: ['Ilmuwan Data', 'Ilmuwan Data Madya'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const donutChartSeries2 = [10, 9];

  // Define the data and options for the horizontal bar chart
  const barChartOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      title: {
        text: 'Orang'
      },
      categories: ['Jawa Barat', 'Jawa Timur', 'Jawa Tengah', 'Jakarta', 'Bali']
    },
    yaxis: {
      title: {
        text: 'Provinsi'
      }
    }
  };

  const barChartSeries = [{
    name: 'Pendaftar',
    data: [30, 25, 20, 15, 10] // Example data
  }];

  const stackedBarOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ['Ilmuwan Data', 'Ilmuwan Data Madya'],
      
    },
   
  };

  const stackedBarSeries = [
    {
      name: 'Lulus',
      data: [25, 18], // Example data for Ilmuwan Data and Ilmuwan Data Madya
    },
    {
      name: 'Tidak Lulus',
      data: [15, 8], // Example data for Ilmuwan Data and Ilmuwan Data Madya
    }
  ];


  return (
    <GuestLayout>
      <BreadCrumbs links={links} />
      <TitlePage title={'Statistik dan Ringkasan'} desc={'Berisikan berbagai statistik dan ringkasan terkait website dan kegiatan sertifikasi LSP Polstat STIS'} />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 my-10'>

        <div className="bg-white col-span-1 md:col-span-2 rounded-2xl p-6 shadow-md">
          <h2 className="font-bold mb-4 text-primaryOrange text-center text-xl mb-5">Jumlah Kunjungan Website</h2>
          <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 my-5'>
            <div className=''>
              <label className='text-ternaryBlue' id='tahunContainer' htmlFor="tahun">Pilih Tahun</label>
              <select id='tahun' value={selectedYear} onChange={handleYearChange} className='mt-2 w-full border-gray-300 rounded-md shadow-sm p-2'>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className=''>
              <label className='text-ternaryBlue' id='pengunjungContainer' htmlFor="pengunjung">Total Pengunjung</label>
              <input type="text" id="pengunjung" className="mt-2 border-gray-300 text-sm rounded-md block p-2.5 hover:cursor-not-allowed" value={visitorData.reduce((acc, curr) => acc + curr, 0)} disabled/>
            </div>
          </div>
          <Chart options={lineChartOptions} series={lineChartSeries} type="area" height={350} />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="font-bold mb-4 text-primaryOrange text-center text-xl mb-5">Persentase Pendaftar Berdasarkan Skema Sertifikasi</h2>
          <Chart options={donutChartOptions} series={donutChartSeries} type="donut" height={350} />
        </div>
        

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="font-bold mb-4 text-primaryOrange text-center text-xl mb-5">5 Provinsi Pendaftar Terbanyak</h2>
          <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="font-bold mb-4 text-primaryOrange text-center text-xl mb-5">Persentase Asesor Berdasarkan Skema Sertifikasi</h2>
          <Chart options={donutChartOptions2} series={donutChartSeries2} type="donut" height={350} />
          
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="font-bold mb-4 text-primaryOrange text-center text-xl mb-5">Perbandingan Jumlah Asesi Lulus Ujian Berdasarkan Skema Sertifikasi</h2>
          <Chart options={stackedBarOptions} series={stackedBarSeries} type="bar" height={350} />

        </div>
      </div>
    </GuestLayout>
  );
}

export default Statistik;
