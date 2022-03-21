import { ListObject } from './SupplierListObject';

export type SupplierListResponse = {
  [organisation: string]: Omit<ListObject, 'organisation'>[];
};
