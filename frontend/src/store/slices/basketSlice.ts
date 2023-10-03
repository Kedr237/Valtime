import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BasketState {
  arr: Number[];
}
const initialState: BasketState = {
  arr: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state, action: PayloadAction<Number[]>) => {
      return {
        ...state, arr: action.payload
      }
    }
  }
});

export default basketSlice.reducer;
export const { setBasket } = basketSlice.actions;