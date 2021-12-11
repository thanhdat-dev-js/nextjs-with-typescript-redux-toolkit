import {configureStore } from "@reduxjs/toolkit";
import todo from "./slice/todoSlice";
import counter from "./slice/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`


const store = configureStore({
  reducer:{
    todo,
    counter
  }
})

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;