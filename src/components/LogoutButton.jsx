import { client } from "../services/supabase/client";
import { useNavigate } from "react-router";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await client.auth.signOut();
      localStorage.removeItem("authToken");
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="btn btn-primary mt-4 hover:btn-error hover:text-white"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
