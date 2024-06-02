import { ArrowBack } from '@mui/icons-material';
import React, { useState } from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import FloatingInput from '../../components/FloatingInput';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex h-screen relative">


      <div className="w-7/12 relative">
 
        <div className="bg-primaryBlue h-full w-full rounded-br-full absolute top-0 left-0 bottom-0 z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
   
        <Link to={'/'}  className='bg-white w-fit rounded-md flex space-x-2 items-center px-4 py-2 relative left-20 top-10 z-10'>
           <ArrowBack className='text-primaryBlue' fontSize='medium'/>
          <p className='text-primaryBlue'>Kembali</p>
        </Link>

        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 w-full text-center">
          <img className="object-cover" width={500} height={500} src="image/login.png" alt="Background Login" />
        </div>
      </div>

      <div className="w-5/12 flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg border-2 border-gray-200">
          <h2 className="text-3xl font-bold text-ternaryBlue text-center mb-10">Masuk</h2>
          <form>
            <div className="mb-4">
              <FloatingInput label={'Email'} type={'email'} id={'email'} />
            </div>
            <div className="mb-4 relative">
              <FloatingInput 
                label={'Password'} 
                type={showPassword ? 'text' : 'password'} 
                id={'password'} 
                showPassword={showPassword}
                handleTogglePasswordVisibility={handleTogglePasswordVisibility} 
              />
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
            <p className='text-ternaryBlue text-sm text-center mt-2'>Belum punya akun? <span><Link to={'register'} className='text-primaryBlue  hover:text-ternaryBlue'>Daftar</Link></span> </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
