// Register.js

import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import PrimaryButton from '../../components/Button/PrimaryButton';
import FloatingInput from '../../components/FloatingInput';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [asalInstansi, setAsalInstansi] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (password !== confirmPassword) {
      errors.confirmPassword = "Password tidak sesuai";
    }
    if (password.length < 8) {
      errors.password = "Minimal panjang password 8 karakter";
    }
    // Add additional validations if needed
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      setError({});
      // Add logic to handle successful registration
      localStorage.setItem("loginSuccess", "true");
      navigate("/admin"); // Redirect to admin route
    }
  };

  return (
    <div className="flex h-screen relative">
      <div className="w-5/12 flex items-center justify-center z-10">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg border-2 border-gray-200">
          <h2 className="text-3xl font-bold text-ternaryBlue text-center mb-10">Daftar</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <FloatingInput
                label={"Nama"}
                type={"text"}
                id={"nama"}
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              {error.nama && (
                <p id="errorNama" className="text-sm ms-2 text-red-500">
                  {error.nama}
                </p>
              )}
            </div>
            <div className="mb-4 relative">
              <FloatingInput
                label={"Email"}
                type={"email"}
                id={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <p id="errorEmail" className="text-sm ms-2 text-red-500">
                  {error.email}
                </p>
              )}
            </div>
            <div className="mb-4 relative">
              <FloatingInput
                label={"Asal Instansi"}
                type={"text"}
                id={"asalInstansi"}
                value={asalInstansi}
                onChange={(e) => setAsalInstansi(e.target.value)}
              />
              {error.asalInstansi && (
                <p id="errorAsalInstansi" className="text-sm ms-2 text-red-500">
                  {error.asalInstansi}
                </p>
              )}
            </div>
            <div className="mb-4 relative">
              <FloatingInput
                label={"Password"}
                type={showPassword ? "text" : "password"}
                id={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                showPassword={showPassword}
                handleTogglePasswordVisibility={handleTogglePasswordVisibility}
              />
              {error.password && (
                <p id="errorPassword" className="text-sm ms-2 text-red-500">
                  {error.password}
                </p>
              )}
            </div>
            <div className="mb-4 relative">
              <FloatingInput
                label={"Konfirmasi Password"}
                type={showConfirmPassword ? "text" : "password"}
                id={"confirmPassword"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                showPassword={showConfirmPassword}
                handleTogglePasswordVisibility={handleToggleConfirmPasswordVisibility}
              />
              {error.confirmPassword && (
                <p id="errorConfirmPassword" className="text-sm ms-2 text-red-500">
                  {error.confirmPassword}
                </p>
              )}
            </div>
            <div className="flex items-center justify-end">
              <PrimaryButton text={'Daftar'} type="submit" />
            </div>
            <p className="text-ternaryBlue text-sm text-center mt-2">Sudah punya akun? <span><Link to={'/login'} className="text-primaryBlue hover:text-ternaryBlue">Masuk</Link></span> </p>
          </form>
        </div>
      </div>
      <div className="w-7/12 relative">
        <div
          className="bg-primaryBlue w-[90%] h-[90%] rounded-br-full absolute top-0 right-0 z-0"
          style={{
            height: "90%",
            width: "90%",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transform: "scaleX(-1)",
          }}
        ></div>
        <div
          className="bg-ternaryBlue h-full rounded-bl-full rounded-br-full absolute top-0 z-0"
          style={{
            height: "40%",
            width: "40%",
            clipPath: "circle(40% at 40% 0)",
            right: "63%",
          }}
        ></div>
        <div
          className="h-full rounded-br-full absolute bottom-0 z-0"
          style={{
            height: "20%",
            width: "20%",
            backgroundColor: "#D7EAFB",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            right: "152%",
            transform: "scaleY(-1)",
          }}
        ></div>

        <Link
          to={"/"}
          className="bg-white w-fit rounded-md flex space-x-2 items-center px-4 py-2 relative top-5 z-10"
          style={{ left: "83%" }}
        >
          <ArrowBack className="text-primaryBlue" fontSize="medium" />
          <p className="text-primaryBlue">Kembali</p>
        </Link>
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-center ">
          <img
            className="object-cover"
            width={400}
            height={400}
            src="image/register.png"
            alt="Background Register"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
