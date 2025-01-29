import { FaArrowsRotate } from "react-icons/fa6";
import { generateOTP } from "otp-agent";
import { useForm } from "react-hook-form";
import { client } from "../../services/supabase/client";
import { useNavigate } from "react-router-dom";
import NameInput from "../CreateItemForm/NameInput";
import PropTypes from "prop-types";
import UserNameInput from "../CreateItemForm/UserNameInput";
import EmailInput from "../CreateItemForm/EmailInput";
import SubmitButton from "../CreateItemForm/SubmitButton";
import DeleteOrCancelButton from "../CreateItemForm/DeleteOrCancelButton";
import PasswordInput from "../CreateItemForm/PasswordInput";
import LinkInput from "../CreateItemForm/LinkInput";
import NoteTextarea from "../CreateItemForm/NoteTextarea";
import { useCreateSafe, useDeleteSafe, useEditSafe } from "../../queries/safes";

const CreateItemForm = ({ isEdit, values }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const { mutate: createItem, isPending: isLoadingCreate } = useCreateSafe();

  const { mutate: editSafe, isPending: isLoadingEdit } = useEditSafe();

  const { mutate: deleteSafe, isPending: isLoadingDelete } = useDeleteSafe();

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
      const getIdUser = async () => {
        const {
          data: {
            user: { id },
          },
        } = await client.auth.getUser();
        return id;
      };

      const safe = {
        email,
        password,
        user_name: userName,
        link,
        note,
        name,
        user_id: await getIdUser(),
      };

      if (isEdit) {
        editSafe(
          { ...safe, id: values.id },
          {
            onSuccess: () => {
              navigate("/safe");
            },
          }
        );
      } else {
        createItem(safe, {
          onSuccess: () => {
            reset();
            navigate("/safe");
          },
        });
      }
    }
  );

  const handleDelete = async () => {
    if (isEdit) {
      deleteSafe(values.id, {
        onSuccess: () => {
          navigate("/safe");
        },
      });
    }
    navigate("/safe");
  };

  const isLoading = isLoadingEdit || isLoadingCreate || isLoadingDelete;

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

      <NoteTextarea isEdit={isEdit} values={values} register={register} />

      <div className="grid grid-cols-1 sm1:grid-cols-2 gap-2 w-full">
        <SubmitButton isEdit={isEdit} isDisabled={isLoading} />
        <DeleteOrCancelButton
          handleDelete={handleDelete}
          isEdit={isEdit}
          isDisabled={isLoading}
        />
      </div>
    </form>
  );
};

CreateItemForm.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
};

export default CreateItemForm;
