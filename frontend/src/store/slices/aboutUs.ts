import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AboutUs = {
  description: string;
  contacts: string[];
}
export interface AboutUsState {
  arr: AboutUs[];
}
const initialState: AboutUsState = {
  arr: [],
}


export const AboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {
    setAboutUs: (state, action: PayloadAction<AboutUs[]>) => {
      return {
        ...state, arr: action.payload
      }
    }
  }
});


export default AboutUsSlice.reducer;
export const { setAboutUs } = AboutUsSlice.actions;