import React from 'react'

function AboutCom() {
  return (
    <div>
      <div className=' grid-cols-3  gap-2  flex flex-wrap md:justify-center p-[50px]'>
        <div className=''>
          <a href="#" class="block h-[200px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Малака  ощирищ булими </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Автобил йул бощ бощкармаси. </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Техник назоратларни марказий ощирищ.</p>
          </a>
        </div>
        <div className=''>
          <a href="#" class="block h-[200px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ищлаб чикарищ булими </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Автомабил йулларини  диогностика килищ ищлари.</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Автомабил йулларини   паспортлащтирищ.</p>
          </a>
        </div>
        <div className=''>
          <a href="#" class="block h-[200px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Екиспэртиза булими </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Мащина-Механизм транспорт хизмати.</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">*Тан нархи капкуляцияси экиспэртиза хулоса.</p>
          </a>
        </div>
      </div>
    </div>

  )
}

export default AboutCom