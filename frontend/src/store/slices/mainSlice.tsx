import { createSlice } from '@reduxjs/toolkit';


export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    value: 0,
  },
  reducers: {
  }
});


export const {
  
} = mainSlice.actions;

export default mainSlice.reducer