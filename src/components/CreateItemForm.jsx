import { generateOTP } from "otp-agent";
import { LuSaveAll } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { ImSpinner11 } from "react-icons/im";
import { GiCardboardBoxClosed } from "react-icons/gi";
import BackButton from "./BackButton";
import { useForm } from "react-hook-form";

const CreateItemForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = useForm();

  const generatePassword = () => {
    const newPassword = generateOTP({
      length: 16,
      numbers: true,
      upperCaseAlphabets: true,
      specialChars: true,
      alphabets: true,
    });

    setValue("password", newPassword);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className=" flex flex-col space-y-5 justify-start items-center min-h-screen pt-5"
        noValidate
      >
        <div className="w-full gap-2">
          <label className="input input-primary flex items-center gap-2">
            <GiCardboardBoxClosed className="opacity-[50%] h-5 w-5" />
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Introduzca un nombre de elemento.",
                },
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

        <div className="w-full gap-2">
          <label className="input input-primary flex items-center gap-2">
            <FaUserAlt className="opacity-[50%]" />
            <input
              type="text"
              {...register("userName", {
                minLength: {
                  value: 2,
                  message: "El usuario debe tener al menos 2 carácteres.",
                },
                maxLength: {
                  value: 20,
                  message: "El usuario debe tener menos de 50 carácteres",
                },
                pattern: {
                  value: /^[a-zA-Z\s'-]+$/,
                  message:
                    "El usuario solo puede contener letras, espacios, apóstrofes y guiones",
                },
              })}
              className="grow"
              placeholder="Usuario"
            />
          </label>
          {errors.userName && <span>{errors.userName.message}</span>}
        </div>

        <div className="w-full gap-2">
          <label className="input input-primary flex items-center gap-2">
            <MdEmail className="opacity-50" />
            <input
              type="email"
              {...register("email", {
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

        <div className="w-full">
          <div className="flex flex-col sm1:flex-row justify-between gap-2 ">
            <label className="input input-primary gap-2 flex items-center">
              <IoKeySharp className="opacity-50" />
              <input
                type="text"
                {...register("password", {
                  minLength: {
                    value: 4,
                    message: "La contraseña debe tener al menos 4 caracteres.",
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

            <button
              type="button"
              className="btn btn-active btn-primary"
              onClick={generatePassword}
            >
              <ImSpinner11 />
            </button>
          </div>

          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="w-full">
          <label className="input input-primary gap-2 flex items-center ">
            <FaLink className="opacity-50" />
            <input
              {...register("url", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/,
                  message: "Enlace no valido.",
                },
              })}
              type="text"
              className="grow"
              placeholder="Enlace"
            />
          </label>
          {errors.url && (
            <span className="text-justify">{errors.url.message}</span>
          )}
        </div>
        <textarea
          className="textarea textarea-primary flex items-center w-full "
          placeholder="Nota"
        />
        <div className="grid grid-cols-1 sm1:grid-cols-2 gap-2 w-full">
          {/* sm1: break point 295px */}
          <button className="btn btn-primary w-full">
            <LuSaveAll className="w-5 h-5" />
          </button>
          <button className="btn bg-gray-500 text-white hover:text-white hover:btn-error hover:border-0 w-full">
            <IoMdClose className="w-5 h-5" />
          </button>
        </div>
      </form>
      <BackButton />
    </div>
  );
};

export default CreateItemForm;
