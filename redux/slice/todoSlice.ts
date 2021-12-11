import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  text: string;
  done: boolean;
}

const initialState:Item[] = [
  {
    text: "Thanh dat",
    done: true,
  },
  {
    text: "Thanh dat",
    done: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Item>) {
      state.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      state[action.payload].done = !state[action.payload].done;
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.splice(action.payload, 1);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
