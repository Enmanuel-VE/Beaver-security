import CreateButtonItem from "../components/Buttons/CreateButtonItem";
import SafeItem from "../components/Cards/SafeItems";
import { useGetSafes } from "../queries/safes";
import LoadPage from "./LoadPage";

const Safe = () => {
  const { data: items, isLoading } = useGetSafes();

  if (isLoading) {
    return <LoadPage />;
  }

  return (
    <div className="my-5 flex flex-col gap-2">
      {items?.data?.length >= 1 ? (
        items?.data?.map((item) => (
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
