import { createSlice } from '@reduxjs/toolkit';
import API from '../services/supplier';
import { SupplierListResponse } from '../types/SupplierListResponse';
import { message } from 'antd';
type SupplierStateType = {
  list: SupplierListResponse;
};

export const SupplierInitialState = {
  list: {},
} as SupplierStateType;

export const supplierSlice = createSlice({
  name: 'supplier',
  initialState: SupplierInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(API.endpoints.getNearbySuppliers.matchFulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addMatcher(API.endpoints.getNearbySuppliers.matchRejected, (state, action) => {
      const {
        data: { messages },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } = action.payload as any;
      message.error(messages.map((val: { message: string[] }) => val.message).join(','));
    });
  },
});
export default supplierSlice.reducer;
