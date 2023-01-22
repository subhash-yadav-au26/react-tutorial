import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  name: "subh",
};

// First, create the thunk
export const fetchUser = createAsyncThunk("async/fetchuser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await res.json();
  return result.title;
});

// const asyncSlice = createSlice({
//   name: "async",
//   initialState,
//   extraReducers: {
//     [fetchUser.pending]: (state, action) => {
//       state.name = "loading";
//     },
//     [fetchUser.fulfilled]: (state, action) => {
//       state.name = action.payload;
//     },
//     [fetchUser.rejected]: (state, action) => {
//       state.name = "error";
//     },
//   },
// });

// another approach
const asyncSlice = createSlice({
  name: "async",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.name = "loading";
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.name = action.payload;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.name = "error";
    });
  },
});

export default asyncSlice.reducer;
