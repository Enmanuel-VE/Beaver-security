import { MdEmail } from "react-icons/md";
import PropTypes from "prop-types";

const EmailInput = ({ isEdit, values, register, errors }) => {
  return (
    <div className="w-full gap-2">
      <label className="input input-primary flex items-center gap-2">
        <MdEmail className="opacity-50" />
        <input
          type="email"
          defaultValue={isEdit ? values.email : ""}
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
  );
};
EmailInput.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default EmailInput;
