import React from 'react'
import Logo from "../../../assets/download (1).png"
import { useNavigate } from 'react-router'
const Navbbar = () => {

   const navigate  = useNavigate()
    return (
        <div>
            <nav class=" bg-blue-500 border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <img className=' bordder w-[70px]  h-[70px] cursor-pointer' src={Logo} alt="" />
                    <div className=' font-semibold text-center gap-[20px]'>
                    <h3>Наманган йул курилищ хужалиги ходимларни</h3>
                    <h4>Малакацини ощирищ укув Маркази </h4>
                    </div>
                    <div className='flex gap-[20px] items-center' >
                        <select  className='  bg-inherit w-[60px] h-[40px] rounded-xl'>
                            <option value="uzb">uzb</option>
                            <option value="rus">rus</option>
                            <option value="eng">eng</option>
                        </select>
                        <button  onClick={() => navigate('/login')} className=' w-[190px] h-[40px] text-white bg-blue-700  rounded-xl' > Сертифкат руйхати</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbbar