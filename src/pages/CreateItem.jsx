import CreateItemForm from "../components/Forms/CreateItemForm";
import BackButton from "../components/Buttons/BackButton";
import Header from "../components/Header";

const CreateItem = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mt-[8%]">
        <Header
          title={"Elemento"}
          description={
            "Puedes crear un nuevo elemento para guardar tus credenciales."
          }
          isEdit={false}
        />
      </div>
      <CreateItemForm isEdit={false} values={{}} />
      <BackButton />
    </div>
  );
};
export default CreateItem;
