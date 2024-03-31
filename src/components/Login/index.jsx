import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import BigImg from "../../assets/4.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router";
import { baseUrl } from "../../api";

const SiginCom = () => {
  // const { setProfile } = useContext(ThemeContext);
  const [state, setState] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/login/`, state);
      console.log(response.data,'response');
      if (response && response.data.access) {
        const token = response.data.access;
        sessionStorage.setItem("token", token);
        navigate("/home");

        // toast.success('Succes', {
        //   position: "top-center",
        //   autoClose: 1999,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   theme: "colored",
        //   transition: Zoom,
        //   });
    
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Kirishda xatolik Foydalanuvchi yoki Paroli xato!");
      }
      else if (error.response && error.response.status === 400) {
        toast.error("Forma to'liq to'ldirilmadi!");
      }

      else if (error.response && error.response.status >= 500) {
        toast.error("Tizim xatosi!");
      }
    }
  };




  


  // const handleEnter = (e) => {
  //   if (e.key === "Enter") {
  //     handleSubmit();
  //   }
  // };

  const handleSubmit = () => {
    if (state.username === "admin" && state.password === "1234") {
      navigate("/home"); // Navigate to '/home' upon successful sign-in
    } else {
      // Handle unsuccessful sign-in (e.g., display error message)
    }
  };
  return (
    <div className=" h-[95vh] bg-white-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12  flex justify-center items-center flex-col">
   
          <div>
            {/* <img src={Logo} className="w-[300px]" alt="logo" /> */}
            <h1 className=" text-center font-extrabold  text-gray-600    "> Kadrlarini qayta tayyorlash va malakasini oshirish institutining o‘quv kurslariga onlayn ro‘yxatdan o‘tish</h1>
          </div>
          <div className=" flex flex-col items-center justify-center">
            {/* <h1 className="text-2xl xl:text-3xl font-extrabold">Kirish</h1> */}
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs relative">
                {/* <CustomInput
                  placeholder="Telefon raqam"
                  maxLength={17}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  autoComplete="tel-national"
                  value={state.username}
                  onChange={(newValue) => handleInputChange(newValue, "username")}
                  onBlur={handleBlur}
                
                /> */}
                <input
                placeholder="login"
                  type="tel"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  maxLength={17}
                  autoComplete="number"
                  // value={state.username}
                  onChange={(e) => setState({...state,username:e.target.value})}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  placeholder="Parol"
                  autoComplete="current-password"
                  value={state.password}
                  onChange={(e) => setState({ ...state, password: e.target.value })}
                  // onKeyDown={handleEnter}
                />
                <p
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEye className="absolute top-[110px] text-xl right-7 cursor-pointer" />
                  ) : (
                    <AiOutlineEyeInvisible className="absolute top-[110px] text-xl right-7 cursor-pointer" />
                  )}
                </p>
                <button
                  onClick={()=>handleLogin()}
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span>Kirish</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center h-full flex justify-center items-center bg-no-repeat">
            <img src={BigImg} alt="BigImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiginCom;
