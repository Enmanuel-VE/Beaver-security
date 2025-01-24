import { generateOTP } from "otp-agent";
import { ImSpinner11 } from "react-icons/im";
import { FaCopy } from "react-icons/fa";
import { useForm } from "react-hook-form";

const GPasswordsForm = () => {
  const { register, handleSubmit, watch, getValues, setValue } = useForm({
    defaultValues: {
      shiftIsActivated: true,
      numbersIsActivated: true,
      symbolIsActivated: true,
      passwordLength: 16,
      alphabetsIsActivated: true,
      PasswordGenerated: generateOTP({
        length: 16,
        numbers: true,
        alphabets: true,
        upperCaseAlphabets: true,
        specialChars: true,
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
      <div className="flex justify-center space-x-1 pt-5">
        <input
          type="text"
          placeholder="Generar contraseña"
          className="input input-primary w-full focus:outline-none  cursor-default"
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

      <div className="flex flex-col justify-center pt-5">
        <div className="flex justify-between items-center">
          <label htmlFor="password-length" className="flex flex-col">
            <p className="text-gray-400 font-semibold items-center">Longitud</p>
          </label>
          <input
            type="number"
            id="password-length"
            name="password-length"
            className="input input-primary focus:outline-none border-none bg-slate-200 text-end appearance-none custom-number-input max-w-[31%]"
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
