import { FaBook } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { NavLink } from "react-router";

const RegisterForm = () => {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-center text-2xl font-bold">Beaver Security</h1>
          <p className="">
            El 85% de las personas en todo el mundo reutilizan las mismas
            contraseñas en varias cuentas. Esta práctica deja a las personas
            increíblemente vulnerables a los intentos de pirateo. Haz la
            prevención.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail className="bg-opacity-50" />
            <input type="text" className="grow" placeholder="Email" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <FaUserAlt />
            <input type="text" className="grow" placeholder="Your name" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <IoKeySharp className="bg-opacity-50" />
            <input type="password" className="grow" placeholder="Password" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <IoKeySharp className="bg-opacity-50" />
            <input
              type="password"
              className="grow"
              placeholder="Repeat password"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <FaBook />
            <input type="text" className="grow" placeholder="Password hint" />
          </label>

          <button className="btn btn-active text-center btn-primary">
            Register
          </button>

          <p>
            ¿Ya tienes cuenta?{" "}
            <span>
              <NavLink className="link link-primary" to="/login" end>
                Acceder
              </NavLink>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
