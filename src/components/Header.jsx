import { BiSolidFilePlus } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import { MdEditDocument } from "react-icons/md";
import { FaCog } from "react-icons/fa";

const Header = ({ title, description, isEdit }) => {
  return (
    <div className="flex flex-col items-start gap-2 ">
      <div className="flex flex-row items-center gap-2 hover:animate-pulse">
        {isEdit === true ? (
          <MdEditDocument className=" opacity-40 h-[20px] w-[20px]" />
        ) : isEdit === false ? (
          <BiSolidFilePlus className=" opacity-40 h-[20px] w-[20px]" />
        ) : (
          <FaCog className=" opacity-40 h-[20px] w-[20px]" />
        )}
        <h1 className="text-lg font-semibold text-gray-400 cursor-default ">
          {title}
        </h1>
      </div>

      <div className="flex flex-row items-center gap-2">
        <IoIosArrowForward className="opacity-40 h-[16px] w-[20px]" />
        <p className="text-gray-400 text-xs cursor-default">{description}</p>
      </div>
    </div>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isEdit: PropTypes.bool,
};

export default Header;
