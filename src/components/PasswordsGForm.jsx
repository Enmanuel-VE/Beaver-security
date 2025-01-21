import { generateOTP } from "otp-agent";
import { ImSpinner11 } from "react-icons/im";
import { FaCopy } from "react-icons/fa";
import { useForm } from "react-hook-form";

const GPasswordsForm = () => {
  const { register, handleSubmit, watch, getValues, setValue } = useForm({
    defaultValues: {
      shiftIsActivated: false,
      numbersIsActivated: false,
      symbolIsActivated: false,
      passwordLength: 8,
      alphabetsIsActivated: true,
      PasswordGenerated: generateOTP({
        length: 8,
        numbers: false,
        alphabets: true,
        upperCaseAlphabets: false,
        specialChars: false,
      }),
    },
  });

  const generatePassword = () => {
    const {
      shiftIsActivated,
      numbersIsActivated,
      symbolIsActivated,
      passwordLength,
      alphabetsIsActivated,
    } = getValues();

    const newPassword = generateOTP({
      length: passwordLength,
      numbers: numbersIsActivated,
      upperCaseAlphabets: shiftIsActivated,
      specialChars: symbolIsActivated,
      alphabets: alphabetsIsActivated,
    });

    setValue("PasswordGenerated", newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(watch("PasswordGenerated"));
  };

  return (
    <form noValidate onSubmit={handleSubmit(copyToClipboard)}>
      <div className="flex justify-center space-x-1 pt-5 px-5">
        <input
          type="text"
          placeholder="Generar contraseña"
          disabled
          className="input input-primary w-full focus:outline-none"
          {...register("PasswordGenerated")}
        />
        <button type="submit" className="btn btn-active btn-primary">
          <FaCopy />
        </button>
        <button
          type="button"
          className="btn btn-active btn-primary"
          onClick={generatePassword}
        >
          <ImSpinner11 />
        </button>
      </div>

      <div className="flex flex-col justify-center pt-5 px-5">
        <div className="flex justify-center">
          <label htmlFor="password-length" className="mr-2">
            <p className="text-gray-400 font-semibold">Longitud</p>
          </label>
          <input
            type="range"
            id="password-length"
            name="password-length"
            min="5"
            max="32"
            className="range range-primary"
            {...register("passwordLength")}
          />
        </div>

        <div className="flex justify-between pt-5">
          <label className="text-gray-400 font-semibold">Letras</label>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            {...register("alphabetsIsActivated")}
          />
        </div>

        <div className="flex justify-between pt-5">
          <label className="text-gray-400 font-semibold">Mayúsculas</label>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            {...register("shiftIsActivated")}
          />
        </div>

        <div className="flex justify-between pt-5">
          <label className="text-gray-400 font-semibold">Números</label>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            {...register("numbersIsActivated")}
          />
        </div>

        <div className="flex justify-between pt-5">
          <label className="text-gray-400 font-semibold">Signos</label>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            {...register("symbolIsActivated")}
          />
        </div>
      </div>
    </form>
  );
};

export default GPasswordsForm;
