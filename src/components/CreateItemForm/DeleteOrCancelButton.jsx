import { FaRegTrashCan } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const DeleteOrCancelButton = ({ isEdit, handleDelete }) => {
  return (
    <NavLink to="/safe" end>
      <button
        type="button"
        onClick={handleDelete}
        className="btn bg-gray-500 text-white hover:text-white hover:btn-error hover:border-0 w-full"
      >
        {isEdit ? (
          <FaRegTrashCan className="w-5 h-5" />
        ) : (
          <IoCloseSharp className="w-5 h-5" />
        )}
      </button>
    </NavLink>
  );
};
DeleteOrCancelButton.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteOrCancelButton;
