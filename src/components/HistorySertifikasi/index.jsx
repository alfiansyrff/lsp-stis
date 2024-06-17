import { AccessTime, Check, Clear, HourglassBottom, HourglassBottomOutlined } from '@mui/icons-material';
import React from 'react';

function HistorySertifikasi() {
  return (
    <body className="bg-white rounded-lg border-2 border-gray-200 shadow">
      <div className="p-4 mt-4">
        <h1 className="text-xl text-center font-semibold mb-6 text-primaryOrange">Status Sertifikasi</h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                    <div className='flex items-center'>
                       <Check />
                    </div>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <p className="font-semibold text-sm mb-1">Daftar Sertifikasi</p>
                <p className="leading-tight text-justify w-full text-[12px]">
                  21 Juli 2024, 12:30
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                    <div className='flex items-center'>
                       <HourglassBottomOutlined />
                    </div>
                </div>
              </div>
              <div className="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                 <p className="font-semibold text-sm mb-1">Menunggu Pembayaran</p>
                <p className="leading-tight text-justify w-full text-[12px]">
            
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </body>
  );
}

export default HistorySertifikasi;
