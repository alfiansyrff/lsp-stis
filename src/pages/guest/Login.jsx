
import { ArrowBack } from '@mui/icons-material';
import React, { useState } from 'react';
import PrimaryButton from '../../components/Button/PrimaryButton';
import FloatingInput from '../../components/FloatingInput';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const userAccount = [
    {
      email: 'admin@gmail.com',
      password: '12345678'
    },
    {
      email: 'user@gmail.com',
      password: '12345678'
    },
    {
      email: 'user2@gmail.com',
      password: '12345678'
    }
  ];

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = 'Email harus diisi';
    if (!password) errors.password = 'Password harus diisi';
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const user = userAccount.find((user) => user.email === email);

    if (!user) {
      setError({ email: 'Email tidak terdaftar', password: '' });
    } else if (password.length < 8) {
      setError({ email: '', password: 'Minimal panjang password 8 karakter' });
    } else if (user.password !== password) {
      setError({ email: '', password: 'Password tidak sesuai' });
    } else {
      setError({ email: '', password: '' });
      localStorage.setItem('loginSuccess', 'true');
      localStorage.setItem('email', user.email);
      navigate('/user');
    }
  };

  const handleInputChange = (setter, field) => (event) => {
    setter(event.target.value);
    setError((prevError) => {
      const newError = { ...prevError };
      delete newError[field];
      return newError;
    });
  };

  return (
    <div className="flex h-screen relative">
      <div className="w-7/12 hidden md:block relative">
        <div className="bg-primaryBlue h-full w-full rounded-br-full absolute top-0 left-0 z-0" style={{ height: '90%', width: '90%', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="bg-ternaryBlue h-full w-full rounded-bl-full rounded-br-full absolute top-0 z-0" style={{ height: '40%', width: '40%', clipPath: 'circle(40% at 40% 0)', left: '72%' }}></div>
        <div className="h-full w-full rounded-br-full absolute bottom-0 z-0" style={{ height: '20%', width: '20%', backgroundColor: '#D7EAFB', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', left: '151.4%', transform: 'rotate(180deg)' }}></div>

        <Link to={'/'} className="bg-white w-fit rounded-md flex space-x-2 items-center px-4 py-2 relative left-5 top-5 z-10">
          <ArrowBack className="text-primaryBlue" fontSize="medium" />
          <p className="text-primaryBlue">Beranda</p>
        </Link>
        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 w-full text-center">
          <img className="object-cover" width={400} height={400} src="image/login.png" alt="Background Login" />
        </div>
      </div>

      <div className="w-full md:w-5/12 z-10 px-5 md:px-0 flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg border-2 border-gray-200">
          <h2 className="text-3xl font-bold text-ternaryBlue text-center mb-10">Masuk</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <FloatingInput
                label={'Email'}
                type={'email'}
                id={'email'}
                value={email}
                className={`bg-gray-50 border ${error.email ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                onChange={handleInputChange(setEmail, 'email')}
              />
              {error.email && <p id="errorEmail" className="text-sm ms-2 text-red-500">{error.email}</p>}
            </div>
            <div className="mb-4 relative">
              <FloatingInput
                label={'Password'}
                type={showPassword ? 'text' : 'password'}
                id={'password'}
                value={password}
                className={`bg-gray-50 border ${error.password ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                onChange={handleInputChange(setPassword, 'password')}
                showPassword={showPassword}
                handleTogglePasswordVisibility={handleTogglePasswordVisibility}
              />
              {error.password && <p id="errorPassword" className="text-sm ms-2 text-red-500">{error.password}</p>}
            </div>

            <div className="flex items-center justify-between mb-10">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500">Ingat saya</label>
                </div>
              </div>
              <a href="#" className="text-sm text-ternaryBlue">Lupa password?</a>
            </div>

            <div className="flex items-center justify-end">
              <PrimaryButton text={'Masuk'} type="submit" />
            </div>
            <p className="text-ternaryBlue text-sm text-center mt-2">Belum punya akun? <span><Link to={'/register'} className="text-primaryBlue hover:text-ternaryBlue">Daftar</Link></span> </p>
          </form>
        </div>
      </div>

      <div
        className="md:hidden bg-ternaryBlue h-full rounded-bl-full rounded-br-full absolute top-0 z-0"
        style={{
          height: "100%",
          width: "100%",
          clipPath: "circle(40% at 50% 0)",
        }}
      ></div>
    </div>
  );
}

export default Login;
