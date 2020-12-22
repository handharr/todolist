export const SET_STATUS = "SET_STATUS";
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const EDIT_DATA = "EDIT_DATA";
export const SET_DATA = "SET_DATA";

export const setStatus = (id, status) => {
  return {
    type: SET_STATUS,
    payload: {
      id,
      status,
    },
  };
};

export const setData = (datas) => {
  return {
    type: SET_DATA,
    payload: {
      datas,
    },
  };
};

export const deleteData = (id) => {
  return {
    type: DELETE_DATA,
    payload: {
      id,
    },
  };
};

export const addData = (title, description) => {
  return {
    type: ADD_DATA,
    payload: {
      title,
      description,
    },
  };
};

export const editData = (id, title, description) => {
  return {
    type: EDIT_DATA,
    payload: {
      id,
      title,
      description,
    },
  };
};
