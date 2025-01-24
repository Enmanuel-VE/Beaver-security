import { useEffect, useState } from "react";
import CreateButtonItem from "../components/CreateButtonItem";

import SafeItem from "../components/SafeItems";
import { client } from "../services/supabase/client";
import LoadPage from "./LoadPage";

const Safe = () => {
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

  if (loading) {
    return <LoadPage />;
  }

  return (
    <div className="my-5 flex flex-col gap-2">
      {items.length >= 1 ? (
        items.map((item) => (
          <SafeItem
            key={item.id}
            itemId={item.id}
            url={item.link}
            siteName={item.name}
          />
        ))
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-4xl font-bold">¡Aún no hay elementos!</h1>
            <p className="text-lg">
              ¡Crea tu primer elemento para comenzar a guardar tus credenciales!
            </p>
          </div>
        </div>
      )}
      <CreateButtonItem />
    </div>
  );
};

export default Safe;
