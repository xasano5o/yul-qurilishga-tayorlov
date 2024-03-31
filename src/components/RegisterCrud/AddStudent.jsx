import React, { useState } from "react";
// import { toast } from "react-toastify";
import Modal from "../generic/Modal.jsx";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useCreateCategoriaMutation } from "../../redux/slice/category/index.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGetDirectionQuery } from "../../redux/slice/direction/index.js";
import { useGetTimeQuery } from "../../redux/slice/time/index.js";

export function AddStudent() {

  // const [ ] =useCreateRegisterMutation()
  const [open, setOpen] = useState(false);
  const [createCategoria, { isLoading }] = useCreateCategoriaMutation()
  const { data } = useGetDirectionQuery({open})
  const { data:datas } =  useGetTimeQuery({open})
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    first_name: "",
    last_name: "",
    surname: "",
    phone: "",
    address: '',
    otm_name: '',
    years: '',
    company: '',
    position: '',
    birthday: '',
    yonalish:'',
    soat:'',
  });

  const addData = async () => {
    try {
      const response = await createCategoria(inputValue).unwrap();
      toast.success(`O'quvchi qabul qilindi ${inputValue.first_name} 😊`);
      setInputValue({
        first_name: "",
        last_name: "",
        surname: "",
        phone: "",
        address: '',
        otm_name: '',
        years: '',
        company: '',
        position: '',
        birthday: '',
      })
      setOpen(false);
    } catch (error) {
      if (error.status == 401) {
        toast.warn(`Ro'yxatdan O'tmagansiz foydalanish xuqiga ega emasiz 🚀`);
        localStorage.clear()
        navigate('/login')
      }
      else if (error.status == 403) {
        toast.warn(`Siz`);
        localStorage.clear()
        navigate('/login')
      }
      else if (error.status == 400) {
        toast.warn(`Forma tuliq to'ldiring 🧐`);
      }


    }
  }
  const onClose = () => {
    setOpen(false);
    setInputValue('')
  };


  return (
    <div className="col-span-4">
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="inline-flex items-center bg-blue-500 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <AiOutlineUserAdd
          className="-ml-0.5 mr-1.5 text-xl"
          aria-hidden="true"
        />
        O'quvchi Qo'shish
      </button>
      {open && (
        <Modal
          loader={isLoading}
          closeModal={onClose}

          addFunc={() => addData()}>
          <div className="  grid grid-rows-6 grid-cols-4 gap-2">

            <div className="col-span-1 row-span-1">
              <label
                htmlFor="username"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72"
              >
                Ismi
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="user.username"
                  type="text"
                  autoComplete="username"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, first_name: e.target.value })
                  }
                  className="block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <label
                htmlFor="password"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72"
              >
                Familyasi
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="user.password"
                  type="text"
                  autoComplete="password"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, last_name: e.target.value })
                  }
                  className="block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <label
                htmlFor="salary"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72"
              >
                Otasini Ismi
              </label>
              <div className="mt-2">
                <input
                  id="salary"
                  name="sallery"
                  type="text"
                  autoComplete="salary"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, surname: e.target.value })
                  }
                  className="block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72"
              >
                Telefon raqami
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, phone: e.target.value })
                  }
                  className="block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72"
              >
                Yashash Manzili
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, address: e.target.value })
                  }
                  className="block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72" >
                Yul soxasida qachondan ishlaydi
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, years: e.target.value })
                  }
                  className="block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72" >
                Ishlaydigan korxona nomi
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, company: e.target.value })
                  }
                  className="block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72" >
                Lavozimga tayinlangan yili va lavozimi
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, position: e.target.value })
                  }
                  className="block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72" >
                Tugatgan o'quv muassasini nomi
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, otm_name: e.target.value })
                  }
                  className=" block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            </div>

            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72" >
                Tug'ulgan kun yil
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="date"
                  autoComplete="description"
                  required
                  onChange={(e) =>
                    setInputValue({ ...inputValue, birthday: e.target.value })
                  }
                  className=" block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72" >
                Yunalish
              </label>
              <div className="mt-2">
                <select  onChange={(e) =>setInputValue({...inputValue,yonalish:e.target.value})}
                  className=" block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="" id="">
                  <option value="">Hech biri</option>
                  {isLoading ? 'Yuklanmoqda' :
                    data?.map((value) => {
                      return (<option value={value.id}>{value?.name}</option>)
                    })}
                </select>
              </div>
            </div>
            <div className="col-span-1 row-span-1">
              <label
                htmlFor="description"
                className="block px-[10px] text-sm font-medium leading-6 text-gray-900 w-72" >
                Soat
              </label>
              <div className="mt-2">
                <select  onChange={(e) =>setInputValue({...inputValue,soat:e.target.value})}
                  className=" block px-[10px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="" id="">
                  <option value="">Hech biri</option>
                  {isLoading ? 'Yuklanmoqda' :
                    datas?.map((value) => {
                      return (<option value={value.id}>{value?.soat}</option>)
                    })}
                </select>
              </div>
            </div>


          </div>
        </Modal>
      )}
    </div>
  );
}

export default AddStudent