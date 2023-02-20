import React from 'react';

const ReadOnly = ({ student, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={student.id}>
      <td>{student.fullName}</td>
      <td>{student.age}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, student)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(student.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;
