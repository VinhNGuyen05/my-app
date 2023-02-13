import React from "react";

const EditTableRow = ({
  student,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr key={student.id}>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter an age..."
          name="age"
          value={editFormData.age}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditTableRow;