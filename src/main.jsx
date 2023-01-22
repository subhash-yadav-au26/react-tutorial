import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "./feature/counterSlice";
import testReducer from "./feature/testSlice";
import asyncReducer from "./feature/async_thunk";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    // test: testReducer,
    run: asyncReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
