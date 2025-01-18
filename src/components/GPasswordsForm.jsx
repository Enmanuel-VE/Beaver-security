import { ImSpinner11 } from "react-icons/im";
import { FaCopy } from "react-icons/fa";

const GPasswordsForm = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center space-x-1 pt-5 px-5">
          <input
            type="text"
            placeholder="Password generated"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-active btn-primary">
            <FaCopy />
          </button>
          <button className="btn btn-active btn-primary">
            <ImSpinner11 className="" />
          </button>
        </div>

        <div className="flex flex-col justify-center pt-5 px-5">
          <div className="flex justify-center">
            <label htmlFor="password-length" className="">
              Longitud (12)
            </label>
            <input
              type="range"
              id="password-length"
              name="password-length"
              min="5"
              max="32"
              className="range range-primary"
            />
          </div>

          <div className="flex justify-between pt-5">
            <label>Mayusculas</label>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
          <div className="flex justify-between pt-5">
            <label>Números</label>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
          <div className="flex justify-between pt-5">
            <label>Signos</label>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GPasswordsForm;
