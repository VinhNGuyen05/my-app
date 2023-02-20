const ADD_STUDENT = 'ADD_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

export const add = student => {
  return {
    type: ADD_STUDENT,
    student,
  };
};

export const edit = student => {
  return {
    type: EDIT_STUDENT,
    student,
  };
};

export const remove = student => {
  return {
    type: REMOVE_STUDENT,
    student,
  };
};
