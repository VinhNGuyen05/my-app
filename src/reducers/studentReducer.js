import { combineReducers } from 'redux';

const ADD_STUDENT = 'ADD_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

const defaultStudents = [
  {
    id: "1",
    fullName: "a",
    age: 4,
  },
  {
    id: "2",
    fullName: "b",
    age: 4,
  },
];

function students(state = defaultStudents, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return [
        ...state,
        {
          id: action.student.id,
          fullName: action.student.fullName,
          age: action.student.age,
        },
      ];
    case EDIT_STUDENT:
      const indexEditStudent = state.findIndex(
        (student) => student.id === action.student.id
      );
      state[indexEditStudent] = action.student;
      return [...state];
    case REMOVE_STUDENT:
      state.splice(action, 1);
      return [...state];
    default:
      return state;
  }
}

const studentsApp = combineReducers({
  students,
});

export default studentsApp;
