import { LuSaveAll } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { ImSpinner11 } from "react-icons/im";
import { GiCardboardBoxClosed } from "react-icons/gi";
import BackButton from "./BackButton";

const CreateItemForm = () => {
  return (
    <div className="flex flex-col space-y-5 justify-start items-center min-h-screen pt-5">
      <label className="input input-primary gap-2 flex items-center w-full ">
        <GiCardboardBoxClosed className="opacity-[50%]" />

        <input type="text" className="grow" placeholder="Nombre" />
      </label>

      <label className="input input-primary gap-2 flex items-center w-full ">
        <FaUserAlt className="opacity-50" />
        <input type="text" className="grow" placeholder="Usuario" />
      </label>

      <label className="input input-primary gap-2 flex items-center w-full ">
        <MdEmail className="opacity-50" />
        <input type="text" className="grow" placeholder="Correo" />
      </label>

      <div className="flex flex-col sm:flex-row justify-between gap-2 w-full ">
        <label className="input input-primary gap-2 flex items-center">
          <IoKeySharp className="opacity-50" />
          <input type="text" className="grow" placeholder="Contraseña" />
        </label>

        <button className="btn btn-active btn-primary">
          <ImSpinner11 />
        </button>
      </div>
      <label className="input input-primary gap-2 flex items-center w-full ">
        <FaLink className="opacity-50" />
        <input type="text" className="grow" placeholder="Enlace" />
      </label>

      <textarea
        className="textarea textarea-primary flex items-center w-full "
        placeholder="Nota"
      />
      <div className="grid grid-cols-2 gap-2 w-full">
        <button className="btn btn-primary w-full">
          <LuSaveAll className="w-5 h-5" />
        </button>
        <button className="btn bg-gray-500 text-white hover:text-white hover:btn-error hover:border-0 w-full">
          <IoMdClose className="w-5 h-5" />
        </button>
      </div>

      <BackButton />
    </div>
  );
};

export default CreateItemForm;
