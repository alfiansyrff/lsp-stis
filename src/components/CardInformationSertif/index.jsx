import React from 'react';

function CardInformationSertif() {
  return (
    <div className="bg-white shadow border-2 border-gray-200 rounded-lg p-6 max-w-3xl">
      <h2 className="text-xl font-semibold mb-4 text-primaryOrange">Informasi Detail Sertifikasi</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Tanggal Ujian:</span>
          <span className="text-gray-900">-</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Skema Sertifikasi:</span>
          <span className="text-gray-900">Ilmuwan Data</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Tempat Ujian:</span>
          <span className="text-gray-900">Website LSP Polstat STIS</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Nomor Pendaftaran:</span>
          <span className="text-gray-900">LSP240004</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Nomor Skema:</span>
          <span className="text-gray-900">010607</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Asesor:</span>
          <span className="text-gray-900">-</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Status Pembayaran:</span>
          <span className="bg-ternaryBlue text-ternaryBlue bg-opacity-20 p-2 rounded-full text-sm text-center">Menunggu Konfirmasi</span>
        </div>
      
        {/* <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Status:</span>
          <button className="bg-gray-500 p-1 rounded text-white text-sm w-24 h-12" disabled>N/A</button>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Formulir Pembayaran:</span>
          <a href="https://lsp.stis.ac.id/pembayaran/LSP240004">
            <button className="bg-blue-500 p-1 rounded text-white text-sm w-24 h-12">Upload Bukti Pembayaran</button>
          </a>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Formulir APL.01:</span>
          <a href="https://lsp.stis.ac.id/frapl01/LSP240004">
            <button className="bg-gray-500 p-1 rounded text-white text-sm w-24 h-12" disabled>FR.APL.01</button>
          </a>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Formulir APL.02:</span>
          <a href="https://lsp.stis.ac.id/frapl02/LSP240004">
            <button className="bg-gray-500 p-1 rounded text-white text-sm w-24 h-12" disabled>FR.APL.02</button>
          </a>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Formulir AK.01:</span>
          <a href="https://lsp.stis.ac.id/frak01/LSP240004/edit">
            <button className="bg-gray-500 p-1 rounded text-white text-sm w-24 h-12" disabled>FR.AK.01</button>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default CardInformationSertif;
