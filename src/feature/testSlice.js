import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateAge } from "./testaction";
const initial = {
  name: "subhash",
  age: 20,
};

// export default createReducer(initial, (builder) => {
//   builder.addCase("update_name", (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase(updateAge, (state, action) => {
//     state.age = action.payload;
//   });
// });

// First, create the thunk
export const fetchUser = createAsyncThunk("users/fetchuser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await res.json();
  return result.title;
});

const testSlice = createSlice({
  name: "testing",
  initial,
  reducers: {},
  //   extraReducers: {
  //     [fetchUser.pending]: (state, action) => {
  //       state.name = "loading";
  //     },
  //     [fetchUser.fulfilled]: (state, action) => {
  //       state.name = action.payload;
  //     },
  //     [fetchUser.error]: (state, action) => {
  //       state.name = "error";
  //     },
  //   },
});

export default testSlice.reducer;
