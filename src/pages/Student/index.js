import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ReadOnly from "./ReadOnly";
import EditTableRow from "./EditTableRow";
import "./index.css";

const Student = () => {
  const [students, setstudents] = useState(JSON.parse(localStorage.getItem('students'))); // get from local storage
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    age: "",
    id: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    age: "",
    id: "",
  });
  const [editstudentId, setEditstudentId] = useState(null);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students)); // set to local storage
  },[students]); 

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = {...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newstudent = {
      id: nanoid(),
      fullName: addFormData.fullName,
      age: addFormData.age,
    };
    const newstudents = [...students, newstudent];
    setstudents(newstudents);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedstudent = {
      id: editstudentId,
      fullName: editFormData.fullName,
      age: editFormData.age,
    };
    const newstudents = [...students];
    const index = students.findIndex((student) => student.id === editstudentId);
    newstudents[index] = editedstudent;
    setstudents(newstudents);
    setEditstudentId(null);
  };

  const handleEditClick = (event, student) => {
    event.preventDefault();
    setEditstudentId(student.id);
    const formValues = {
      fullName: student.fullName,
      age: student.age,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditstudentId(null);
  };

  const handleDeleteClick = (studentId) => {
    const newstudents = [...students];
    const index = students.findIndex((student) => student.id === studentId);
    newstudents.splice(index, 1);
    setstudents(newstudents);
  };

  let average = (props) => {
    let sum = 0;
    if (props.length === 0) return 0;
    else {
      for (var number of props) {
        sum += parseInt(number.age);
      }
      return sum / props.length;
    }
  };

  return (
    <div>
      <h2>Add a Student</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="age"
          required="required"
          placeholder="Enter an age..."
          onChange={handleAddFormChange}
        />
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
            {students.map((student) => (
              <>
                {editstudentId === student.id ? (
                  <EditTableRow
                    student={student}
                    editFormData={editFormData}
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
              <td>{average(students)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Student;
