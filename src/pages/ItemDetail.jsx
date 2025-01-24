import BackButton from "../components/BackButton";
import CreateItemForm from "../components/CreateItemForm/CreateItemForm";
import { useParams } from "react-router-dom";
import { client } from "../services/supabase/client";
import { useEffect, useState } from "react";
import { FaGear } from "react-icons/fa6";
import Header from "../components/Header";

const ItemDetail = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    let { data, error } = await client.from("safe").select("*");

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
      <Header
        title={"Elemento"}
        description={"Puedes ver o editar tu elemento."}
        isEdit={true}
      />

      <CreateItemForm isEdit={true} values={selectedItem} />
      <BackButton />
    </div>
  );
};

export default ItemDetail;
