import { ArrowBack, Close } from "@mui/icons-material";
import React, { useState } from "react";
import PrimaryButton from '../../components/Button/PrimaryButton';
import FloatingInput from '../../components/FloatingInput';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [asalInstansi, setAsalInstansi] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
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

    if (!nama) {
      errors.nama = "Nama harus diisi";
    }
    if (!email) {
      errors.email = "Email harus diisi";
    }
    if (!asalInstansi) {
      errors.asalInstansi = "Asal Instansi harus diisi";
    }
    if (!password) {
      errors.password = "Password harus diisi";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Konfirmasi Password harus diisi";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Password dan konfirmasi password tidak sesuai";
    }

    if (password.length > 0 && password.length < 8) {
      errors.password = "Minimal panjang password 8 karakter";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      setError({});
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setToast(true);
        setNama("");
        setEmail("");
        setAsalInstansi("");
        setPassword("");
        setConfirmPassword("");
      }, 2000);
    }
  };

  return (
     <div className="flex h-screen relative">
      <div className="w-full px-5 md:px-0 md:w-5/12 flex items-center justify-center z-10">
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
              <PrimaryButton text={loading ? (
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mx-auto text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
              ) : 'Daftar'} type="submit" disabled={loading} />
            </div>
            <p className="text-ternaryBlue text-sm text-center mt-2">Sudah punya akun? <span><Link to={'/login'} className="text-primaryBlue hover:text-ternaryBlue">Masuk</Link></span> </p>
          </form>
        </div>
      </div>
      <div className="hidden md:block w-7/12 relative">
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
          <p className="text-primaryBlue">Beranda</p>
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

      <div
        className="md:hidden bg-ternaryBlue h-full rounded-bl-full rounded-br-full absolute top-0 z-0"
        style={{
          height: "100%",
          width: "100%",
          clipPath: "circle(40% at 50% 0)",
        }}
      ></div>

      <AnimatePresence>
        {toast && (
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
              <div className="ms-3 text-sm font-normal">Pendaftaran berhasil</div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
                onClick={() => setToast(false)}
              >
                <Close />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Register;
