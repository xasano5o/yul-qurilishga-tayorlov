import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

    return (
        <div>
            <nav class=" bg-blue-700 border-gray-200 dark:bg-gray-900">
                <div class="contet flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/home'}>
                        <h1 className='text-white  text-3xl  font-semibold'>Logo</h1>
                    </Link>
                    <div className='flex gap-4'>
                        <Link to={'/home'}>
                            <span className='font-medium cursor-pointer'>O'quvchilar</span>
                        </Link>
                        <Link to={'/certifcate'}>
                            <span className='font-medium cursor-pointer'>Bitiruvchilar</span>
                        </Link>
                        <Link to={'/setting'}>
                            <span className='font-medium cursor-pointer'>Sozlamalar</span>
                        </Link>
                    </div>
                    <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button onClick={() => navigate(-1)} type="button" class="flex items-center justify-center w-[120px] text-sm text-white bg-red-500 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            Chiqish
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar