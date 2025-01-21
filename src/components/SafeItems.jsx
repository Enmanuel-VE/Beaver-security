import { IoIosArrowForward } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import PropTypes from "prop-types";

const SafeItem = ({ siteName, url }) => {
  return (
    <div className="rounded-md bg-base-100 w-full h-20 shadow-xl py-2 px-3 flex justify-between">
      <div className="flex gap-4 items-center">
        <div>
          <TbWorld className="w-6 h-6" />
        </div>
        <div className="text-xs ">
          <p className="font-semibold text-ellipsis">{siteName}</p>
          <p className="font-medium text-gray-400 text-ellipsis">{url}</p>
        </div>
      </div>
      <div className="w-6 flex items-center">
        <IoIosArrowForward className="w-6 h-6 hover:cursor-pointer" />
      </div>
    </div>
  );
};

SafeItem.propTypes = {
  siteName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SafeItem;
