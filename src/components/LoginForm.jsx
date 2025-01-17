import { MdEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";

export default function LoginForm() {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-center text-2xl font-bold">Beaver Security</h1>
          <p className="">
            Identificate o crea una nueva cuenta para acceder a tu caja fuerte.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail className="bg-opacity-50" />
            <input type="text" className="grow" placeholder="Email" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <IoKeySharp className="bg-opacity-50" />
            <input type="password" className="grow" placeholder="Password" />
          </label>

          <label className="label cursor-pointer">
            <span className="label-text">Recordar usuario</span>
            <input
              type="checkbox"
              name="remember"
              className="checkbox checkbox-primary"
            />
          </label>

          <button className="btn btn-active text-center btn-primary">
            Login
          </button>

          <p>
            ¿Nuevo por aquí?{" "}
            <span>
              <a href="#" className="link link-primary">
                Crea una cuenta
              </a>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}
