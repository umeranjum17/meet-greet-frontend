import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../../common/config';
import { SupplierRequestPayload } from '../types/SupplierRequestPayload';
import { SupplierListResponse } from '../types/SupplierListResponse';

const { BASE_URL: baseUrl } = config;

export const supplierApi = createApi({
  reducerPath: 'supplierApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prepareHeaders: (headers, _api) => {
      // JWT Token can be added in here
      return headers;
    },
  }),
  endpoints: (build) => ({
    getNearbySuppliers: build.mutation<SupplierListResponse, SupplierRequestPayload>({
      query: (body: SupplierRequestPayload) => {
        const url = `/supplier/nearbySuppliers`;
        return { url, body, method: 'POST' };
      },
    }),
  }),
});
export const { useGetNearbySuppliersMutation } = supplierApi;
export default supplierApi;
