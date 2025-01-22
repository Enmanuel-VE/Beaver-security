import { IoIosArrowForward } from "react-icons/io";
import CreateItemForm from "../components/CreateItemForm/CreateItemForm";
import { BiSolidFilePlus } from "react-icons/bi";
import BackButton from "../components/BackButton";

const CreateItem = () => {
  return (
    <div className="flex flex-col gap-4 mt-[8%]">
      <div className="flex flex-col items-start gap-2 ">
        <div className="flex flex-row items-center gap-2 hover:animate-pulse">
          <BiSolidFilePlus className=" opacity-40 h-[20px] w-[20px]" />
          <h1 className="text-lg font-semibold text-gray-400 cursor-default ">
            Elemento
          </h1>
        </div>

        <div className="flex flex-row items-center gap-2">
          <IoIosArrowForward className="opacity-40 h-[16px] w-[20px]" />
          <p className="text-gray-400 text-xs cursor-default">
            Puedes crear un nuevo elemento para guardar tus credenciales.
          </p>
        </div>
      </div>

      <CreateItemForm isEdit={false} values={{}} />
      <BackButton />
    </div>
  );
};
export default CreateItem;
