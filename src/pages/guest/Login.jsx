import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import FloatingInput from '../../components/FloatingInput';

function Login() {
  return (
    <div className="flex h-screen relative">
      {/* Left side: Blue background */}
      <div className="w-7/12 relative">
        {/* Blue background forming a quarter circle */}
        <div className="bg-primaryBlue h-full w-full rounded-br-full absolute top-0 left-0 bottom-0 z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        {/* Back button */}
        <a href='#' className='bg-white w-fit rounded-full flex space-x-2 items-center p-4 relative left-20 top-10 z-10'>
          <ArrowBack className='text-primaryBlue' fontSize='medium'/>
          <p className='text-primaryBlue'>Kembali ke beranda</p>
        </a>
        {/* Image container */}
        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 w-full text-center">
          <img className="object-cover" width={500} height={500} src="image/login.png" alt="Background Login" />
        </div>
      </div>
      {/* Right side: Login form */}
      <div className="w-5/12 flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-ternaryBlue text-center mb-10">Masuk</h2>
          <form>
            <div className="mb-4">
            <FloatingInput label={'Email'} type={'email'} id={'email'}/>
            {/* <div className="relative">
              <input
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:primaryBlue peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div> */}

              {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                id="username"
                type="text"
                placeholder="Enter your username"
              /> */}
            </div>
            <div className="mb-4">
              <FloatingInput label={'Password'} type={'password'} id={'password'}/>
              {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                id="password"
                type="password"
                placeholder="Enter your password"
              /> */}
            </div>

            <div className="flex items-center justify-between mb-10">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Ingat saya</label>
                </div>
              </div>
              <a href="#" className="text-sm text-ternaryBlue">Lupa password?</a>
            </div>

            <div className='flex items-center justify-end'>
              <PrimaryButton text={'Masuk'} type='submit'/>
            </div>
            
            <p className='text-primaryBlue text-sm text-center mt-2'>Belum punya akun? <span><a className='text-ternaryBlue hover:text-primaryBlue' href="/register">Daftar</a></span> </p>

            
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
