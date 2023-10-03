import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface Filter {
  name: string;
  priceSort: 'ascending' | 'descending';
  priceFrom: number;
  priceUpTo: number;
  brands: string[];
}
const initialState: Filter = {
  name: '',
  priceSort: 'descending',
  priceFrom: 0,
  priceUpTo: 0,
  brands: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<Filter>>) => {
      return {
        ...state, ...action.payload
      }
    }
  }
});


export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;