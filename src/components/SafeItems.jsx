import { IoIosArrowForward } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import PropTypes from "prop-types";

export default function SafeItem({ siteName, url }) {
  return (
    <div className="rounded-md bg-base-100 w-full h-20 shadow-xl py-2 px-3 flex justify-between">
      <div className="flex gap-4 items-center">
        <div>
          <TbWorld />
        </div>
        <div className="text-xs ">
          <p className="font-semibold text-ellipsis">{siteName}</p>
          <p className="font-medium text-gray-400 text-ellipsis">{url}</p>
        </div>
      </div>
      <div className="w-6 flex items-center">
        <IoIosArrowForward />
      </div>
    </div>
  );
}

SafeItem.propTypes = {
  siteName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
