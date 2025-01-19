import { NavLink } from "react-router";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  return (
    <div className="flex items-end justify-end h-full w-full">
      <NavLink to="/safe" end>
        <button className="btn btn-primary fixed bottom-20 right-5 px-4 py-2 hidden sm:block">
          <IoArrowBack className="h-5 w-5" />
        </button>
      </NavLink>
    </div>
  );
};

export default BackButton;
