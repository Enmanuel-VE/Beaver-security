import { FaRegEdit, FaSave } from "react-icons/fa";
import PropTypes from "prop-types";

const SubmitButton = ({ isEdit }) => {
  return (
    <button type="submit" className="btn btn-primary w-full">
      {isEdit ? (
        <FaRegEdit className="w-5 h-5" />
      ) : (
        <FaSave className="w-5 h-5" />
      )}
    </button>
  );
};
SubmitButton.propTypes = {
  isEdit: PropTypes.bool.isRequired,
};

export default SubmitButton;
