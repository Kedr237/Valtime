import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from './slices/brandsSlice';
import watchesReducer from './slices/watchesSlice'


const store = configureStore({
  reducer: {
    brands: brandsReducer,
    watches: watchesReducer,
  }
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;