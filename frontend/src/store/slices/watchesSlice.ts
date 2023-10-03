import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Watch = {
  id: number;
  name: string;
  description: string;
  price: string;
  mainPhoto: string;
  mechanism: string;
  material: string;
  color: string;
  waterProtection: string;
  size: string;
  brand: string;
}
export interface WatchesState {
  arr: Watch[];
}
const initialState: WatchesState = {
  arr: [],
}


export const watchesSlice = createSlice({
  name: 'watches',
  initialState,
  reducers: {
    setWatches: (state, action: PayloadAction<Watch[]>) => {
      return {
        ...state, arr: action.payload
      }
    }
  }
});


export default watchesSlice.reducer;
export const { setWatches } = watchesSlice.actions;