import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../generic/Modal.jsx";
import { CiEdit } from "react-icons/ci";
import { useUpdateDirectionMutation } from "../../redux/slice/direction/index.js";

export default function EditYunalish({ Object, }) {
  const [soat, setState] = useState(Object.name)
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(!isOpen);
  const [updateTime, { isLoading }] = useUpdateDirectionMutation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addData = async () => {
    try {
      const response = await updateTime({ id: Object.id, name: soat }).unwrap(); // Assuming 'id' is available in 'Object'
      toast.success(`Yunalish o'zgartirildi  ${soat} 😊`);
      setIsOpen(false);
    } catch (error) {
      // Handle errors
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        type="button" class=" flex items-center gap-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <CiEdit title='Tahrirlash' fontSize={30} />
      </button>
      {isOpen && (
        <Modal
          addFunc={() => addData()}
          closeModal={closeModal}
          loader={isLoading}
          actionType={"add"}>
          <div className="py-5 px-10">
            <input
              value={soat}
              onChange={(e) => setState(e.target.value)}
              placeholder='Yunalish...' type="text" class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </Modal>
      )}
    </div>
  );
}
