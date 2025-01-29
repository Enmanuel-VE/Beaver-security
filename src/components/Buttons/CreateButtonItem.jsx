import { NavLink } from "react-router";
import { FaPlus } from "react-icons/fa";

const CreateButtonItem = () => {
  return (
    <div className="flex items-end justify-end h-full w-full">
      <NavLink to="/safe/create-item" end>
        <button className="btn btn-primary fixed bottom-20 right-5 px-4 py-2">
          <FaPlus className="w-5 h-5" />
        </button>
      </NavLink>
    </div>
  );
};

export default CreateButtonItem;
