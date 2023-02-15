import React, { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import ReadOnly from "./components/ReadOnly";
import EditTableRow from "./components/EditTableRow";
import "./index.css";

localStorage.setItem('students', JSON.stringify([]));

const Student = () => {
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students'))); // get from local storage
  const [studentId, setStudentId] = useState(null);
  const [studentEdit, setStudentEdit] = useState({
    id: "",
    fullName: "",
    age: ""
  })

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students)); // set to local storage
  },[students]); 

  const handleValidate = (event) => {
    event.preventDefault();
    if(event.target[0].value === "" && event.target[1].value !== ""){
      alert("name");
    }else if (event.target[0].value !== "" && event.target[1].value === ""){
      alert("age");
    }else if (event.target[0].value === "" && event.target[1].value === ""){
      alert("name");
      alert("age");
    }else{
      handleAddFormSubmit(event.target[0].value, event.target[1].value);
    }
  }

  const handleAddFormSubmit = (name, age) => {
    const newstudent = {
      id: nanoid(),
      fullName: name,
      age: age,
    };
    const newstudents = [...students, newstudent];
    setStudents(newstudents);
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
      fullName: event.target[0].value,
      age: event.target[1].value,
    };
    const newstudents = [...students];
    const index = students.findIndex((student) => student.id === studentId);
    newstudents[index] = editedstudent;
    setStudents(newstudents);
    setStudentId(null);
  };
  
  const handleCancelClick = () => {
    setStudentId(null);
  };

  const handleDeleteClick = (studentId) => {
    const newstudents = [...students];
    const index = students.findIndex((student) => student.id === studentId);
    newstudents.splice(index, 1);
    setStudents(newstudents);
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
      <form onSubmit={handleValidate}>
        <input
          type="text"
          placeholder="Enter a name..."
        />
        <input
          type="number"
          placeholder="Enter an age..."
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
