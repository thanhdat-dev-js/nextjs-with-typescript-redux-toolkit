import type { NextPage } from "next";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { addTodo, removeTodo, toggleTodo } from "../redux/slice/todoSlice";
import { increment, decrement } from "../redux/slice/counterSlice";
const TodoList = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<string>("");
  const todo = useAppSelector((state) => state.todo);
  return (
    <>
      <div className="d-flex">
        <input
          type="text"
          value={state}
          className="form-control"
          onChange={(e) => {
            setState(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(
                addTodo({
                  text: state,
                  done: false,
                })
              );
              setState("");
            }
          }}
        />
        <button
          onClick={() => {
            if (state) {
              dispatch(
                addTodo({
                  text: state,
                  done: false,
                })
              );
              setState("");
            }
          }}
          className="btn btn-outline-primary"
        >
          Add
        </button>
      </div>
      <ul>
        {todo.map((item, index) => (
          <li key={index} className="d-flex justify-content-between">
            <h4 className={item.done ? "text-decoration-line-through" : ""}>
              {item.text}
            </h4>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                dispatch(toggleTodo(index));
              }}
            >
              Done
            </button>
            <button
              className="ml-3 btn btn-outline-primary"
              onClick={() => {
                dispatch(removeTodo(index));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  const [state, setState] = useState<number>(1);
  return (
    <div className="container d-flex">
      <h1 className="text-align">Counter: {count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(increment(state));
        }}
      >
        +
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch(decrement(state));
        }}
      >
        -
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1 className="text-center">App ToDo</h1>
      <TodoList />
      <Counter />
    </div>
  );
};

export default Home;
