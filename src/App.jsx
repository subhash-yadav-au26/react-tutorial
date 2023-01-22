import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increment,
  drecrement,
  incrementByValue,
} from "./feature/counterSlice";

import { updateAge, fetchName } from "./feature/testaction";
import { fetchUser } from "./feature/async_thunk";

function App() {
  const { value } = useSelector((state) => state.counter);
  // const { name, age } = useSelector((state) => state.test);
  const { name } = useSelector((state) => state.run);
  const dispatch = useDispatch();

  const change_name = () => {
    // dispatch({ type: "update_name", payload: data });
    // dispatch(fetchName());
    dispatch(fetchUser());
  };

  const change_age = (data) => {
    updateAge(data);
    // dispatch(updateAge(data));
  };

  return (
    <div className="App">
      <div className="card">
        <h1>count is {value}</h1>
        <h1>name is {name}</h1>
        {/*<h1>age is {age}</h1> */}
        <button onClick={change_name}>change name</button>
        <button onClick={() => change_age(12)}>change age</button>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(drecrement())}>drecrement</button>
        <button onClick={() => dispatch(incrementByValue(5))}>
          increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
