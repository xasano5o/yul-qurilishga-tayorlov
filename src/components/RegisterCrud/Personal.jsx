import React, { useState } from "react";
// import Modal from "../../generic/Modal";
import { AiOutlineEye } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";

export default function View() {

  const  user  = {
    name:'xasan',
    familyais:'abdurazakov',
    year:'2001 08 06',
    jobwork:'IT school Academy',
    jobworkYear:'3 yil',
    jobworkposition:'Muhandis',
  }
   return (
    <div>

          <div className="w-full p-4">
            <div className="flex w-full h-full md:items-stretch md:flex-row sm:flex-col sm:items-center sx:flex-col">
              <div className="md:w-1/3 sm:w-full sx:w-full p-2 h-full">
                {/* Left column for avatar, etc. */}
                <div className="bg-white rounded-lg shadow-lg border p-4 flex items-center flex-col justify-center">
                    <div className="w-40 h-40 rounded-full border bg-gray-200 flex justify-center items-center">
                      <FaUserTie className="text-7xl text-primary" />
                    </div>
                  <h2 className="mt-4 text-center font-bold truncate">
                    {/* {object?.user.first_name} */}
                  </h2>
                  <h2 className="mt-1.5 text-center font-bold truncate">
                    {/* {object.user.last_name} */}
                  </h2>
                </div>
              </div>
              <div className="d:w-2/3 sm:w-full sx:w-full p-2 h-full">
                <div className="bg-white rounded-lg shadow-lg border p-4">
                  <h2 className="text-xl mb-2">Barcha malumotlar</h2>
                  <p>
                    {/* <strong>Foydalanuvchi nomi:</strong> {object.user.username} */}
                  </p>
                  <p>
                    {/* <strong>Ismi:</strong> {object?.user?.first_name} */}
                  </p>
                  <p>
                    {/* <strong>Familiyasi:</strong> {object?.user.last_name} */}
                  </p>
                  <p>
                    {/* <strong>Otasini Ismi:</strong> {object.user.middle_name} */}
                  </p>
                  <p>
                    {/* <strong>Id card:</strong> {object.id_card} */}
                  </p>
                  <p>
                    {/* <strong>Klassi:</strong> {object.sinf?.name || 'Hali belgilanmadi'} */}
                  </p>
                  <p>
                    {/* <strong>Qushilganlik Vaqti</strong> {object.date_of_admission} */}
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
