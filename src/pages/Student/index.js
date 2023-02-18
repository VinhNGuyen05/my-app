import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, edit, remove } from "../../actions/studentActions";
import { nanoid } from "nanoid";
import ReadOnly from "./components/ReadOnly";
import EditTableRow from "./components/EditTableRow";
import "./index.css";

const Student = () => {
  const list = useSelector((state) => state.students);
  const [studentId, setStudentId] = useState(null);
  const [studentEdit, setStudentEdit] = useState({
    id: "",
    fullName: "",
    age: 0,
  });
  const dispatch = useDispatch();

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      id: nanoid(),
      fullName: event.target[0].value,
      age: event.target[1].value,
    };
    dispatch(add(newStudent));
  };

  const handleEditClick = (event, student) => {
    event.preventDefault();
    setStudentId(student.id);
    const formValues = {
      fullName: student.fullName,
      age: student.age,
    };
    setStudentEdit(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...studentEdit };
    newFormData[fieldName] = fieldValue;
    setStudentEdit(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedstudent = {
      id: studentId,
      fullName: studentEdit.fullName,
      age: studentEdit.age,
    };
    dispatch(edit(editedstudent));
    setStudentId(null);
  };

  const handleCancelClick = () => {
    setStudentId(null);
  };

  const handleDeleteClick = (studentId) => {
    dispatch(remove(studentId));
  };

  const sum = list.reduce((accumulator, object) => {
    return accumulator + parseInt(object.age);
  }, 0);

  return (
    <div>
      <h2>Add a Student</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" placeholder="Enter a name..." />
        <input type="number" placeholder="Enter an age..." />
        <button type="submit">Add</button>
      </form>
      <br />

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {list.map((student) => (
              <>
                {studentId === student.id ? (
                  <EditTableRow
                    student={student}
                    formEditData={studentEdit}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                    student={student}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
            <tr>
              <td>Averae age</td>
              <td>{sum / list.length}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Student;
