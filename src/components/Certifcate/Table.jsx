import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
// import AddStudent from './AddStudent';
import { useGetCategoryQuery } from '../../redux/slice/category';
import { useGetCertifcatQuery } from '../../redux/slice/certifcat';
import DeleteCertifcate from './DeleteStudents';
// import DeleteStudent from './DeleteStudents';
// import CertifcatCom from './Certifcat';
// import EditStudent from "./EditStudent"
function CertifcateCom() {

  const { data, isLoading } = useGetCertifcatQuery()
  const [search, setSearch] = useState()

  return (
    <div>
      <div class="  w-[100wv] overflow-auto h-[80vh] p-4 contet">
        <div className='flex justify-between  items-center'>
          <div>
            <input onChange={(e) => setSearch(e.target.value)} placeholder='Qidirish...' type="text" class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* <button className='bg-blue-500 text-white'>O'quvchi qushish</button> */}
          {/* <AddStudent /> */}
        </div>
        <br />
        <div class="">
          <table class="w-full p-1 m-1 d2 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" class="px-4 py-4">Qr-code</th>

                <th scope="col" class="px-4 py-4">Ismi</th>
                <th scope="col" class="px-4 py-3">Familyasi</th>
                <th scope="col" class="px-4 py-3 whitespace-nowrap">Otasini Ismi</th>
                <th scope="col" class="px-4 py-3 whitespace-nowrap">Telefon raqami</th>
                <th scope="col" class="px-4 py-3 whitespace-nowrap">Yashash Manzili</th>
                {/* <th scope="col" class="px-4 py-3 whitespace-nowrap">Yul soxasida qachondan ishlaydi</th>
                <th scope="col" class="px-4 py-3 whitespace-nowrap">Ishlaydigan korxona nomi</th>
                <th scope="col" class="px-4 py-3 whitespace-nowrap">Lavozimga tayinlangan yili va lavozimi</th>
                <th scope="col" class="px-4 py-3 whitespace-nowrap">Tugatgan o'quv muassasini nomi</th>*/}
                <th scope="col" class="px-4 py-3 whitespace-nowrap">Tug'ulgan kun yil</th>
                <th scope="col" class="px-4 py-3 whitespace-nowrap">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className='p-[50px] max-w-full  overflow-x-auto overflow-y-auto'>
              {
                isLoading ? 'Malumot Yuklanmoqda' :
                  data?.map((value) => {
                    return (
                      <tr class="border-b dark:border-gray-700 cursor-pointer">
                        <td class="px-4 py-3 whitespace-nowrap">
                          <img className='w-[100px] h-[100px]' src={value?.qr_image} alt="" />
                        </td>
                        <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <Link to={`/home/${value.id}`}>{value.first_name}</Link>
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap">{value.last_name}</td>
                        <td class="px-4 py-3 whitespace-nowrap">{value.surname}</td>
                        <td class="px-4 py-3 max-w-[12rem] truncate whitespace-nowrap">{value.phone}</td>
                        <td class="px-4 py-3 whitespace-nowrap">{value.address}</td>
                        {/* <td class="px-4 py-3 whitespace-nowrap">{value.years}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{value.company}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{value.position}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{value.otm_name}</td> */}
                        <td class="px-4 py-3 whitespace-nowrap">{value.birthday}</td>
                        <td class="px-4 py-3 flex items-center justify-end">
                          <td className='flex items-center gap-4'>
                            <div>
                              {/* <CertifcatID /> */}

                              {/* <CertifcatCom ID={value.id} /> */}

                            </div>
                            {/* <EditStudent Object={value} /> */}
                            <DeleteCertifcate ID={value.id} />
                          </td>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CertifcateCom