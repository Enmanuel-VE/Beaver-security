import PropTypes from "prop-types";
import { FaLink } from "react-icons/fa";

const LinkInput = ({ isEdit, register, values }) => {
  return (
    <label className="input input-primary gap-2 flex items-center ">
      <FaLink className="opacity-50" />
      <input
        defaultValue={isEdit ? values.link : ""}
        {...register("link", {
          pattern: {
            value: /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/,
            message: "Enlace no valido.",
          },
        })}
        type="text"
        className="grow"
        placeholder="Enlace"
      />
    </label>
  );
};

LinkInput.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default LinkInput;
