import React, { useState, useEffect } from 'react'
import AdminLayout from '../layout/AdminLayout'
import FloatingNavbar from '../../components/FloatingNavbar/Index'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Close } from '@mui/icons-material';

function DaftarSertifikasi() {
  const breadcrumbs = [
    { href: '/user/sertifikasi', label: "Sertifikasi" },
    { href: null, label: "Daftar" },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institusi: '',
    phone: '',
    provinsi: '',
    kabupaten: '',
    kecamatan: '',
    alamat: '',
    skema: '',
  });

  const [errors, setErrors] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then(response => response.json())
      .then(data => setProvinces(data))
      .catch(error => console.error('Error fetching provinces:', error));
  }, []);

  useEffect(() => {
    if (formData.provinsi) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${formData.provinsi}.json`)
        .then(response => response.json())
        .then(data => setKabupaten(data))
        .catch(error => console.error('Error fetching kabupaten:', error));
    } else {
      setKabupaten([]);
    }
  }, [formData.provinsi]);

  useEffect(() => {
    if (formData.kabupaten) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${formData.kabupaten}.json`)
        .then(response => response.json())
        .then(data => setKecamatan(data))
        .catch(error => console.error('Error fetching kecamatan:', error));
    } else {
      setKecamatan([]);
    }
  }, [formData.kabupaten]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {


      setFormData({
        name: '',
        email: '',
        institusi: '',
        phone: '',
        provinsi: '',
        kabupaten: '',
        kecamatan: '',
        alamat: '',
        skema: '',
      });
      setErrors({});
      setSuccess(true); 
    } else {
      setErrors(validationErrors);
    }
  };
  
  const validateForm = () => {
    const errors = {};
    // const phonePattern = /^(\()?(\+62|62|0)(\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}$/;
    if (!formData.name) errors.name = 'Nama lengkap harus diisi';
    if (!formData.email) errors.email = 'Email harus diisi';
    if (!formData.institusi) errors.institusi = 'Asal institusi harus diisi';

    if (!formData.phone)  errors.phone = 'No Telefon harus diisi';
    
    if (!formData.provinsi) errors.provinsi = 'Provinsi harus diisi';
    if (!formData.kabupaten) errors.kabupaten = 'Kabupaten/Kota harus diisi';
    if (!formData.kecamatan) errors.kecamatan = 'Kecamatan harus diisi';
    if (!formData.alamat) errors.alamat = 'Alamat lengkap harus diisi';
    if (!formData.skema) errors.skema = 'Skema sertifikasi harus diisi';
    return errors;
  };

  return (
    <AdminLayout>
      <FloatingNavbar breadcrumbs={breadcrumbs} />

      <div className="p-10 mx-auto">
        <section className="dark:bg-gray-900">
          <div className="">

            <div className="flex items-center mb-5">
              <p className="text-xl text-ternaryBlue font-bold">Pendaftaran Sertifikasi</p>
              <div className="flex-grow border-t border-gray-500 ml-4"></div>
            </div>

            <p className='text-sm text-gray-700 mb-5'>
              Pastikan telah membaca dan memahami <span className='text-primaryBlue hover:underline'>
                <Link to={'/sertifikasi'}>Skema Sertifikasi</Link>
              </span> dengan detail sebelum mendaftar.
            </p>

            <form onSubmit={handleSubmit} className='bg-white rounded-2xl p-5'>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Nama lengkap"
                    
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Email"
                    
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="w-full">
                  <label htmlFor="institusi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">Asal Institusi</label>
                  <input
                    type="text"
                    name="institusi"
                    id="institusi"
                    value={formData.institusi}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${errors.institusi ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Asal institusi"
                    
                  />
                  {errors.institusi && <p className="mt-1 text-sm text-red-500">{errors.institusi}</p>}
                </div>

                <div className="w-full">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">No Telefon</label>
                  <input
                    type="tel"
                    pattern='^(\+62|62|0)8[1-9][0-9]{6,9}$'
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="No Telefon"
                    
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="provinsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">Provinsi</label>
                  <select
                    name="provinsi"
                    id="provinsi"
                    value={formData.provinsi}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${errors.provinsi ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                  >
                    <option value="" disabled>-- Pilih provinsi --</option>
                    {provinces.map(province => (
                      <option key={province.id} value={province.id}>{province.name}</option>
                    ))}
                  </select>
                  {errors.provinsi && <p className="mt-1 text-sm text-red-500">{errors.provinsi}</p>}
                </div>

                <div>
                  <label htmlFor="kabupaten" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">Kabupaten/Kota</label>
                  <select
                    name="kabupaten"
                    id="kabupaten"
                    value={formData.kabupaten}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${errors.kabupaten ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                  >
                    <option value="" disabled>-- Pilih Kabupaten/Kota --</option>
                    {kabupaten.map(kab => (
                      <option key={kab.id} value={kab.id}>{kab.name}</option>
                    ))}
                  </select>
                  {errors.kabupaten && <p className="mt-1 text-sm text-red-500">{errors.kabupaten}</p>}
                </div>

                <div>
                  <label htmlFor="kecamatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">Kecamatan</label>
                  <select
                    name="kecamatan"
                    id="kecamatan"
                    value={formData.kecamatan}
                    onChange={handleChange}
                    className={`bg-gray-50 border ${errors.kecamatan ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                  >
                    <option value="" disabled>-- Pilih Kecamatan --</option>
                    {kecamatan.map(kec => (
                      <option key={kec.id} value={kec.id}>{kec.name}</option>
                    ))}
                  </select>
                  {errors.kecamatan && <p className="mt-1 text-sm text-red-500">{errors.kecamatan}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">Alamat Lengkap</label>
                  <textarea
                    name="alamat"
                    id="alamat"
                    rows="8"
                    value={formData.alamat}
                    onChange={handleChange}
                    className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${errors.alamat ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    placeholder="Alamat lengkap"
                  />
                  {errors.alamat && <p className="mt-1 text-sm text-red-500">{errors.alamat}</p>}
                </div>

                <div className='sm:col-span-2'>
                  <label htmlFor="skema" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white required">Skema Sertifikasi</label>
                  <div id="skema" className={`bg-gray-50 border ${errors.skema ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}>
                    <div className="flex items-center mb-2">
                      <input
                        id="ilmuwan_data"
                        type="radio"
                        name="skema"
                        value="ilmuwan_data"
                        checked={formData.skema === 'ilmuwan_data'}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="ilmuwan_data" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ilmuwan Data (Data Scientist)</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="ilmuwan_data_madywa"
                        type="radio"
                        name="skema"
                        value="ilmuwan_data_madywa"
                        checked={formData.skema === 'ilmuwan_data_madywa'}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="ilmuwan_data_madywa" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ilmuwan Data Madya (Associate Data Scientist)</label>
                    </div>
                  </div>
                  {errors.skema && <p className="mt-1 text-sm text-red-500">{errors.skema}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="flex mt-5 items-center text-white px-6 py-2 rounded-md transition-colors duration-300 ease-in-out transform transition-transform duration-300 ease-in-out  bg-primaryBlue hover:bg-ternaryBlue"
              >
                Daftar
              </button>
            </form>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-5 right-5"
          >
            <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow border-2 border-gray-200" role="alert">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="sr-only">Check icon</span>
              </div>
              <div className="ms-3 text-sm font-normal">Berhasil mendaftar sertifikasi.</div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
                onClick={() => setSuccess(false)}
              >
                <Close />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </AdminLayout>
  )
}

export default DaftarSertifikasi;
