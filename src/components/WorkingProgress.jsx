import { NavLink } from "react-router-dom";

const WorkingProgress = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Próximamente.</h1>
          <p className="text-lg">¡Estén atentos para ver algo sorprendente!</p>
          <NavLink to="/login" end>
            <button className="btn btn-primary mt-4 hover:btn-error hover:text-white">
              Cerrar sesión
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default WorkingProgress;
