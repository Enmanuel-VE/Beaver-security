import { FaBook } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  console.log(errors);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-center text-2xl font-bold">Beaver Security</h1>

        <p className="text-justify">
          El 85% de las personas en todo el mundo reutilizan las mismas
          contraseñas en varias cuentas. Esta práctica deja a las personas
          increíblemente vulnerables a los intentos de pirateo. Haz la
          prevención.
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
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
              <FaUserAlt />
              <input
                type="text"
                {...register("name", {
                  required: { value: true, message: "Introduzca un nombre." },
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 carácteres.",
                  },
                  maxLength: {
                    value: 20,
                    message: "El nombre debe tener menos de 50 carácteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s'-]+$/,
                    message:
                      "El nombre solo puede contener letras, espacios, apóstrofes y guiones",
                  },
                })}
                className="grow"
                placeholder="Nombre"
              />
            </label>
            {errors.name && <span>{errors.name.message}</span>}
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
                    message: "La contraseña debe tener al menos 5 caracteres.",
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

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <IoKeySharp className="bg-opacity-50" />
              <input
                type="password"
                {...register("confirmPassword", {
                  required: { value: true, message: "Repetir contraseña." },
                  validate: (value) => {
                    if (value === watch("password")) {
                      return true;
                    } else {
                      return "Las contraseñas no coinciden.";
                    }
                  },
                })}
                className="grow"
                placeholder="Repetir contraseña"
              />
            </label>
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <FaBook />
              <input
                type="text"
                {...register("passwordHint", {
                  required: {
                    value: true,
                    message:
                      "Introducir una pista para su contraseña en caso de olvido.",
                  },
                  maxLength: {
                    value: 128,
                    message: "La pista no puede tener más de 128 caracteres.",
                  },
                  validate: (value) => {
                    if (value === watch("password")) {
                      return "La pista no debe ser igual a la contraseña.";
                    } else {
                      return true;
                    }
                  },
                })}
                className="grow"
                placeholder="Pista de contraseña"
              />
            </label>
            {errors.passwordHint && <span>{errors.passwordHint.message}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-active text-center btn-primary"
          >
            Registrarce
          </button>
        </form>
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
  );
};
export default RegisterForm;
