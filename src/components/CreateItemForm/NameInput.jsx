import { FaBox } from "react-icons/fa";
import PropTypes from "prop-types";

const NameInput = ({ isEdit, values, register, errors }) => {
  return (
    <div className="w-full gap-2">
      <label className="input input-primary flex items-center gap-2">
        <FaBox className="opacity-[50%]" />
        <input
          type="text"
          defaultValue={isEdit ? values.name : ""}
          {...register("name", {
            required: {
              value: true,
              message: "Introduzca un nombre de elemento.",
            },
            maxLength: {
              value: 256,
              message: "El nombre debe tener menos de 256 caracteres.",
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
  );
};

NameInput.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  values: PropTypes.shape({ name: PropTypes.string }).isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.shape({ message: PropTypes.string }),
  }).isRequired,
};

export default NameInput;
