import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// services home
import { supplierApi } from '../modules/Home/services';

// slices home
import { supplierSlice } from '../modules/Home/slices';

const APIs = {
  [supplierApi.reducerPath]: supplierApi,
};

const apiReducers = Object.values(APIs).reduce(
  (acc, el, key) => ({ ...acc, [el.reducerPath]: el.reducer }),
  {}
);

const rootReducer = combineReducers({
  supplierSlice,
  ...apiReducers,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
