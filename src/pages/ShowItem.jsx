import BackButton from "../components/BackButton";
import CreateItemForm from "../components/CreateItemForm";

const item = {
  name: "Ejemplo de Sitio",
  user_name: "usuario123",
  email: "youremail@SiTeal.com",
  url: "https://ejemplo.com",
  password: "contraseña123",
  note: "Esta es una nota de ejemplo",
};

const ShowItem = () => {
  return (
    <div className="my-5">
      <CreateItemForm isEdit={true} values={item} />
      <BackButton />
    </div>
  );
};

export default ShowItem;
