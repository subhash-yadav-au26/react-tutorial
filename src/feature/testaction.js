// export const updateAge = (state) => {
//   return {
//     type: "update_age",
//     payload: state,
//   };
// };

import { createAction } from "@reduxjs/toolkit";

export const updateAge = createAction("update_age");
export const updateName = createAction("update_name");

// async operation using thunk ,thunk internal updated

export const fetchName = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await res.json();
    dispatch(updateName(result.title));
  };
};
