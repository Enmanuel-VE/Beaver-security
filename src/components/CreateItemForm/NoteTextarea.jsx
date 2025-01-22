import PropTypes from "prop-types";

const NoteTextarea = ({ isEdit, values, register }) => {
  return (
    <textarea
      defaultValue={isEdit ? values.note : ""}
      {...register("note", {
        maxLength: {
          value: 256,
          message: "La pista debe tener menos de 256 carácteres",
        },
      })}
      className="textarea textarea-primary flex items-center w-full "
      placeholder="Nota"
    />
  );
};

NoteTextarea.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default NoteTextarea;
