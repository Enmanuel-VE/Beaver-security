import Header from "../components/Header";
import PasswordsGForm from "../components/PasswordsGForm";

const PasswordsGenerator = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-[8%]">
      <Header
        title="Generador de contraseñas"
        description="Genera y copia tus contraseñas con las configuración que deses."
      />
      <PasswordsGForm />
    </div>
  );
};

export default PasswordsGenerator;
