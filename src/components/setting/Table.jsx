import React from 'react'
import { useGetTimeQuery } from '../../redux/slice/time';
import AddTime from './AddTime';
import DeleteTime from './DeleteTime';
import AddYunalish from './AddYunalish';
import { useGetDirectionQuery } from '../../redux/slice/direction';
import EditTime from './EditTime';
import EditYunalish from './EditYunalish';
import DeleteYunalish from './DeleteYunalish';

const SettingCom = () => {
    const { data,isLoading } = useGetTimeQuery()
    const { data: datas  ,isLoading:isLoadings} = useGetDirectionQuery()

  

    return (
        <div>
            <div className='grid grid-cols-2 h-[85vh] gap-[30px] m-[30px]'>
                <div>
                    <div className='flex justify-between'>
                        {/* <input placeholder='Qidirish...' type="text" class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> */}
                        <div></div>
                        
                        <AddTime />
                    </div>
                    <br />
                    <table class="w-full p-1 m-1 d2 text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-4">Vaqt </th>
                            </tr>
                        </thead>
                        <tbody className='p-[50px] max-w-full  overflow-x-auto overflow-y-auto'>
                            {
                            isLoading ? "Malumot Yuklanmoqda" : 
                            data?.map((value) => {
                                return (
                                    <tr class="border-b dark:border-gray-700 cursor-pointer">
                                        <td class="px-4 py-3 whitespace-nowrap">{value?.soat} soat</td>
                                        <td class="px-4 py-3 flex items-center justify-end">
                                            <td className='flex items-center gap-4'>
                                                <EditTime Object={value} />
                                                <DeleteTime ID={value.id} />
                                            </td>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>
                <div >
                    <div>
                        <div className='flex justify-between'>
                            {/* <input placeholder='Qidirish...' type="text" class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> */}
                         <div></div>
                            <AddYunalish />
                        </div>
                        <br />
                        <table class="w-full p-1 m-1 d2 text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-4 py-4">Yunalish </th>
                                </tr>
                            </thead>
                            <tbody className='p-[50px] max-w-full  overflow-x-auto overflow-y-auto'>
                                { 
                                isLoadings?  "Malumot Yuklanmoqda" :
                                datas?.map((value) => {
                                    return (
                                        <tr class="border-b dark:border-gray-700 cursor-pointer">
                                            <td class="px-4 py-3 whitespace-nowrap">{value?.name}</td>
                                            <td class="px-4 py-3 flex items-center justify-end">
                                                <td className='flex items-center gap-4'>
                                                    <EditYunalish Object={value} />
                                                    <DeleteYunalish ID={value.id} />
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
        </div>
    )
}

export default SettingCom