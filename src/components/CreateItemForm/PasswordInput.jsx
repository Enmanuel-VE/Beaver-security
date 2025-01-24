import PropTypes from "prop-types";
import { FaKey } from "react-icons/fa";

const PasswordInput = ({ isEdit, values, register }) => {
  return (
    <label className="input input-primary gap-2 flex items-center">
      <FaKey className="opacity-50" />
      <input
        type="text"
        defaultValue={isEdit ? values.password : ""}
        {...register("password", {})}
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
};

export default PasswordInput;
