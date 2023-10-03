import { configureStore, combineReducers } from "@reduxjs/toolkit";
import brandsReducer, { BrandsState } from './slices/brandsSlice';
import watchesReducer, { WatchesState } from './slices/watchesSlice';
import filterReducer, { Filter } from './slices/filterSlice';
import basketReducer, { BasketState } from './slices/basketSlice';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import aboutUsReducer, { AboutUsState } from "./slices/aboutUs";

export interface RootState {
  brands: BrandsState;
  watches: WatchesState;
  filter: Filter;
  basket: BasketState;
  aboutUs: AboutUsState;
}

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  brands: brandsReducer,
  watches: watchesReducer,
  filter: filterReducer,
  basket: basketReducer,
  aboutUs: aboutUsReducer,
}));

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;