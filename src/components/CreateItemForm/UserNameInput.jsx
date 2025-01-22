import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

const UserNameInput = ({ isEdit, values, register, errors }) => {
  return (
    <div className="w-full gap-2">
      <label className="input input-primary flex items-center gap-2">
        <FaUser className="opacity-[50%]" />
        <input
          type="text"
          defaultValue={isEdit ? values.user_name : ""}
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
  );
};
UserNameInput.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default UserNameInput;
