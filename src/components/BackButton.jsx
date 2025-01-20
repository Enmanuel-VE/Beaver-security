import { NavLink } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  return (
    <div className="flex items-end justify-end h-full w-full">
      <NavLink to="/safe" end>
        <button className="btn btn-primary fixed bottom-20 right-5 px-4 py-2 hidden sm:block">
          <IoMdArrowRoundBack className="h-5 w-5" />
        </button>
      </NavLink>
    </div>
  );
};

export default BackButton;
