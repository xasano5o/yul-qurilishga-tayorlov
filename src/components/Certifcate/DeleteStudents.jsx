import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../generic/Modal.jsx";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteCertifcatMutation } from "../../redux/slice/certifcat/index.js";

export default function DeleteCertifcate({ ID, }) {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(!isOpen);
    const [deleteTeacher, { isLoading }] = useDeleteCertifcatMutation();
    const handleDelete = async (id) => {
        try {
            await deleteTeacher({ id });
            toast.success("O'chirildi 🚀");
            setIsOpen(false);
        } catch (error) {
            if (error.response && error.response.status === 500) {
                toast.error("Serverda xatolik yuz berdi: serverda muammo bor.");
            } else {
                toast.error(`O'quvchi o'chirishda xatolik: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                title="Uchirish" type="button" class="focus:outline-none   focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                <MdDeleteOutline fontSize={30} />
            </button>
            {isOpen && (
                <Modal
                    addFunc={() => handleDelete(ID)}
                    closeModal={closeModal}
                    loader={isLoading}
                    actionType={"delete"}
                >
                    <div className="py-5 px-10">
                        <h1 className="text-2xl font-bold text-red-600">
                            Malumotni o'chirishga rozimisiz !!!
                        </h1>
                    </div>
                </Modal>
            )}
        </div>
    );
}
