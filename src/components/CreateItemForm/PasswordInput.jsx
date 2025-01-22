import PropTypes from "prop-types";
import { FaKey } from "react-icons/fa";

const PasswordInput = ({ isEdit, values, register }) => {
  return (
    <label className="input input-primary gap-2 flex items-center">
      <FaKey className="opacity-50" />
      <input
        type="text"
        defaultValue={isEdit ? values.password : ""}
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
  );
};

PasswordInput.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default PasswordInput;
