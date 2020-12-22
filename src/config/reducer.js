import * as actions from "./action";

const initialstate = [];

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case actions.ADD_DATA:
      return [
        ...state,
        {
          id: state.length + 1,
          title: payload.title,
          description: payload.description,
          status: 0,
          createdAt: new Date().toLocaleString,
        },
      ];
    case actions.DELETE_DATA:
      return state.filter((val) => val.id !== payload.id);
    case actions.EDIT_DATA:
      return state.map((val) => {
        return val.id == payload.id
          ? {
              id: val.id,
              title: payload.title,
              status: val.status,
              description: payload.description,
              createdAt: val.createdAt,
            }
          : val;
      });
    case actions.SET_STATUS:
      return state.map((val) => {
        return val.id == payload.id
          ? {
              id: val.id,
              title: val.title,
              status: payload.status,
              description: val.description,
              createdAt: val.createdAt,
            }
          : val;
      });
    case actions.SET_DATA:
      return payload.datas;
    default:
      return state;
  }
};
