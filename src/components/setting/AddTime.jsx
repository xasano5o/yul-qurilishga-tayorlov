import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../generic/Modal.jsx";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useCreateTimeMutation } from "../../redux/slice/time/index.js";

export default function AddTime({ ID, }) {
    const [soat,setState] =useState('')
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(!isOpen);
    const [createTime, { isLoading }] = useCreateTimeMutation();

    const handleDelete = async () => {
        try {
            await createTime({ soat });
            toast.success("Yunalish qushildi 🚀");
            setIsOpen(false);
        } catch (error) {
            if (error.response && error.response.status === 500) {
                toast.error("Serverda xatolik yuz berdi: serverda muammo bor.");
            } else {
                toast.error(`Yunalish qushishda xatolik: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                title="Uchirish" type="button"
                className="inline-flex gap-[5px] items-center bg-blue-500 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <AiOutlineUserAdd
                    className="-ml-0.5 mr-1.5 text-xl"
                    aria-hidden="true" />   Vaqt  kiritish
            </button>
            {isOpen && (
                <Modal
                    addFunc={() => handleDelete(ID)}
                    closeModal={closeModal}
                    loader={isLoading}
                    actionType={"add"}
                >
                    <div className="py-5 px-10">
                        <input
                         onChange={(e) => setState(e.target.value)}
                        placeholder='Vaqt...' type="text" class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </Modal>
            )}
        </div>
    );
}
