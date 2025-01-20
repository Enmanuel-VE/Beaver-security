import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { MdEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-center text-2xl font-bold">Beaver Security</h1>
          <p className="text-justify">
            Identificate o crea una nueva cuenta para acceder a tu caja fuerte.
          </p>

          <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <MdEmail className="bg-opacity-50" />
                <input
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "Introduzca un correo." },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Correo no válido.",
                    },
                  })}
                  className="grow"
                  placeholder="Correo"
                />
              </label>
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2">
                <IoKeySharp className="bg-opacity-50" />
                <input
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Introducir una contraseña.",
                    },
                    minLength: {
                      value: 5,
                      message:
                        "La contraseña debe tener al menos 5 caracteres.",
                    },
                    pattern: {
                      value: /^\S*$/,
                      message: "La contraseña no deben tener espacios.",
                    },
                  })}
                  className="grow"
                  placeholder="Contraseña"
                />
              </label>
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <label className="label cursor-pointer">
              <span className="label-text">Recordar usuario</span>
              <input
                type="checkbox"
                name="remember"
                className="checkbox checkbox-primary"
              />
            </label>

            <button
              type="submit"
              className="btn btn-active text-center btn-primary"
            >
              Iniciar sesión
            </button>
          </form>

          <p>
            ¿Nuevo por aquí?{" "}
            <span>
              <NavLink className="link link-primary" to="/sign-in" end>
                Crea una cuenta
              </NavLink>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
