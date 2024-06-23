
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import GuestLayout from '../layout/GuestLayout';
import BreadCrumbs from '../../components/Breadcrumbs';
import TitlePage from '../../components/TitlePage';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMap from 'highcharts/modules/map';
import mapData from '@highcharts/map-collection/countries/id/id-all.geo.json';

HighchartsMap(Highcharts);

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

  const lineChartSeries = [
    {
      name: 'Pengunjung',
      data: visitorData,
    },
  ];

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

  const mapOptions = {
    chart: {
      map: mapData,
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    colorAxis: {
      min: 0,
      minColor: '#E6E7E8',
      maxColor: '#003399'
    },
    tooltip: {
      pointFormat: '{point.name}: {point.value}'
    },
    series: [{
      data: [
        { 'hc-key': 'id-ac', value: 11, name: 'Aceh' },
        { 'hc-key': 'id-ba', value: 17, name: 'Bali' },
        { 'hc-key': 'id-bb', value: 16, name: 'Bangka Belitung' },
        { 'hc-key': 'id-bt', value: 14, name: 'Banten' },
        { 'hc-key': 'id-be', value: 13, name: 'Bengkulu' },
        { 'hc-key': 'id-yo', value: 40, name: 'DI Yogyakarta' },
        { 'hc-key': 'id-jk', value: 38, name: 'DKI Jakarta' },
        { 'hc-key': 'id-go', value: 39, name: 'Gorontalo' },
        { 'hc-key': 'id-ja', value: 43, name: 'Jambi' },
        { 'hc-key': 'id-jr', value: 30, name: 'Jawa Barat' },
        { 'hc-key': 'id-jt', value: 25, name: 'Jawa Tengah' },
        { 'hc-key': 'id-ji', value: 20, name: 'Jawa Timur' },
        { 'hc-key': 'id-kb', value: 18, name: 'Kalimantan Barat' },
        { 'hc-key': 'id-ks', value: 19, name: 'Kalimantan Selatan' },
        { 'hc-key': 'id-kt', value: 44, name: 'Kalimantan Tengah' },
        { 'hc-key': 'id-ki', value: 36, name: 'Kalimantan Timur' },
        { 'hc-key': 'id-ku', value: 12, name: 'Kalimantan Utara' },
        { 'hc-key': 'id-kr', value: 22, name: 'Kepulauan Riau' },
        { 'hc-key': 'id-1024', value: 28, name: 'Lampung' },
        { 'hc-key': 'id-ma', value: 30, name: 'Maluku' },
        { 'hc-key': 'id-la', value: 41, name: 'Maluku Utara' },
        { 'hc-key': 'id-nb', value: 31, name: 'Nusa Tenggara Barat' },
        { 'hc-key': 'id-nt', value: 20, name: 'Nusa Tenggara Timur' },
        { 'hc-key': 'id-pa', value: 34, name: 'Papua' },
        { 'hc-key': 'id-ib', value: 23, name: 'Papua Barat' },
        { 'hc-key': 'id-pe', value: 24, name: 'Papua Pegunungan' },
        { 'hc-key': 'id-ps', value: 26, name: 'Papua Selatan' },
        { 'hc-key': 'id-ri', value: 29, name: 'Riau' },
        { 'hc-key': 'id-sr', value: 25, name: 'Sulawesi Barat' },
        { 'hc-key': 'id-se', value: 42, name: 'Sulawesi Selatan' },
        { 'hc-key': 'id-st', value: 33, name: 'Sulawesi Tengah' },
        { 'hc-key': 'id-sg', value: 21, name: 'Sulawesi Tenggara' },
        { 'hc-key': 'id-sw', value: 32, name: 'Sulawesi Utara' },
        { 'hc-key': 'id-sb', value: 24, name: 'Sumatera Barat' },
        { 'hc-key': 'id-sl', value: 29, name: 'Sumatera Selatan' },
        { 'hc-key': 'id-su', value: 27, name: 'Sumatera Utara' },
      ],
      name: 'Pendaftar',
      states: {
        hover: {
          color: '#e67e22'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  };

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
          <h2 className="font-bold mb-4 text-primaryOrange text-center text-xl mb-5">Sebaran Pendaftar</h2>
          <HighchartsReact
            constructorType={'mapChart'}
            highcharts={Highcharts}
            options={mapOptions}
          />
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
