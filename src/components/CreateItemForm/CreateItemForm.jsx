import NameInput from "./NameInput";
import { generateOTP } from "otp-agent";
import { useForm } from "react-hook-form";
import { client } from "../../services/supabase/client";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowsRotate } from "react-icons/fa6";
import UserNameInput from "./UserNameInput";
import EmailInput from "./EmailInput";
import SubmitButton from "./SubmitButton";
import DeleteOrCancelButton from "./DeleteOrCancelButton";
import PasswordInput from "./PasswordInput";
import LinkInput from "./LinkInput";

const CreateItemForm = ({ isEdit, values }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const generatePassword = () => {
    const newPassword = generateOTP({
      length: 16,
      numbers: true,
      upperCaseAlphabets: true,
      specialChars: true,
      alphabets: true,
    });

    setValue("password", newPassword);
  };

  const onSubmit = handleSubmit(
    async ({ email, password, userName, link, note, name }) => {
      const safe = {
        email,
        password,
        user_name: userName,
        link,
        note,
        name,
      };

      if (isEdit) {
        const { data, error } = await client
          .from("Safe")
          .update(safe)
          .eq("id", values.id)
          .select()
          .then(() => {
            navigate("/safe");
          });
        console.log({ data, error });
        return;
      } else {
        const { data, error } = await client
          .from("Safe")
          .insert([safe])
          .select()
          .then(() => {
            navigate("/safe");
            reset();
          });
        console.log({ data, error });
        return;
      }
    }
  );

  const handleDelete = async () => {
    if (isEdit) {
      const { data, error } = await client
        .from("Safe")
        .delete()
        .eq("id", values.id);
      console.log({ data, error });
    }
    navigate("/safe");
  };

  return (
    <form
      onSubmit={onSubmit}
      className=" flex flex-col space-y-5 justify-start items-center min-h-screen"
      noValidate
    >
      <NameInput
        isEdit={isEdit}
        values={values}
        register={register}
        errors={errors}
      />

      <UserNameInput
        isEdit={isEdit}
        values={values}
        register={register}
        errors={errors}
      />

      <EmailInput
        isEdit={isEdit}
        values={values}
        register={register}
        errors={errors}
      />

      <div className="w-full">
        <div className="flex flex-col sm1:flex-row justify-between gap-2 ">
          <PasswordInput isEdit={isEdit} values={values} register={register} />

          <button
            type="button"
            className="btn btn-active btn-primary "
            onClick={generatePassword}
          >
            <FaArrowsRotate />
          </button>
        </div>

        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className="w-full">
        <LinkInput
          isEdit={isEdit}
          values={values}
          register={register}
          errors={errors}
        />

        {errors.link && (
          <span className="text-justify">{errors.link.message}</span>
        )}
      </div>
      <textarea
        defaultValue={isEdit ? values.note : ""}
        {...register("note", {
          maxLength: {
            value: 200,
            message: "La pista debe tener menos de 200 carácteres",
          },
        })}
        className="textarea textarea-primary flex items-center w-full "
        placeholder="Nota"
      />

      <div className="grid grid-cols-1 sm1:grid-cols-2 gap-2 w-full">
        <SubmitButton isEdit={isEdit} />
        <DeleteOrCancelButton handleDelete={handleDelete} isEdit={isEdit} />
      </div>
    </form>
  );
};

CreateItemForm.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
};

export default CreateItemForm;
