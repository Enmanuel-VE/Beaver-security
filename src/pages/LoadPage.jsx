import { FaGear } from "react-icons/fa6";

const LoadPage = () => {
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
};

export default LoadPage;
