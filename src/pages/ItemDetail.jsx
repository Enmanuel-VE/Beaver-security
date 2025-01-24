import BackButton from "../components/BackButton";
import CreateItemForm from "../components/CreateItemForm/CreateItemForm";
import { useParams } from "react-router-dom";
import { client } from "../services/supabase/client";
import { useEffect, useState } from "react";
import { FaGear } from "react-icons/fa6";
import Header from "../components/Header";
import LoadPage from "./LoadPage";

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
    return <LoadPage />;
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
