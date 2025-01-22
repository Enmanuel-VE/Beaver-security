import BackButton from "../components/BackButton";
import CreateItemForm from "../components/CreateItemForm/CreateItemForm";
import { useParams } from "react-router-dom";
import { client } from "../services/supabase/client";
import { useEffect, useState } from "react";
import { FaGear } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const ItemDetail = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    let { data, error } = await client.from("Safe").select("*");

    if (error) {
      console.error(error);
    }

    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const { itemId } = useParams();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <FaGear className="h-20 w-20 mx-auto mb-4 animate-spin" />
          <p className="text-lg">
            Por favor, espera mientras cargamos tus datos.
          </p>
        </div>
      </div>
    );
  }

  const selectedItem = items.find((element) => element.id === itemId);

  return (
    <div className="flex flex-col gap-4 mt-[8%]">
      <div className="flex flex-col items-start gap-2 ">
        <div className="flex flex-row items-center gap-2 hover:animate-pulse">
          <MdEditDocument className=" opacity-40 h-[20px] w-[20px]" />
          <h1 className="text-lg font-semibold text-gray-400 cursor-default ">
            Elemento
          </h1>
        </div>

        <div className="flex flex-row items-center gap-2">
          <IoIosArrowForward className="opacity-40 h-[16px] w-[20px]" />
          <p className="text-gray-400 text-xs cursor-default">
            Puedes ver o editar tu elemento.
          </p>
        </div>
      </div>

      <CreateItemForm isEdit={true} values={selectedItem} />
      <BackButton />
    </div>
  );
};

export default ItemDetail;
