import {createSlice , PayloadAction} from"@reduxjs/toolkit";


interface Counter{
  count: number;
}

const initialState:Counter ={
  count: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers:{
    increment(state,action:PayloadAction<number>){
      state.count += action.payload;
    },
    decrement(state,action:PayloadAction<number>){
      state.count -= action.payload;
    }
  }
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;