import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Brand = {
  id: number;
  name: string;
  description: string;
  country: string;
  mainGif: string;
}
interface BrandsState {
  arr: Brand[];
}
const initialState: BrandsState = {
  arr: [],
}


export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<Brand[]>) => {
      return {
        ...state, arr: action.payload
      }
    },
  }
});


export default brandsSlice.reducer;
export const { setBrands } = brandsSlice.actions;