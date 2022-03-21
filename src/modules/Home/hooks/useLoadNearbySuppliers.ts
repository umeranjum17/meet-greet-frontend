import { useTypedSelector } from '../../../store';
import { useGetNearbySuppliersMutation } from '../services/supplier';
import { LoadSuppliersFn } from '../types/LoadSuppliersfn';
import { Office } from '../types/Office';
import { ListObject } from '../types/SupplierListObject';
import { SupplierListResponse } from '../types/SupplierListResponse';

const useLoadNearbySuppliers = (): [ListObject[], LoadSuppliersFn] => {
  const [loadSuppliers] = useGetNearbySuppliersMutation();
  const { list } = useTypedSelector((state) => state.supplierSlice) as {
    list: SupplierListResponse;
  };
  const restructredList = [] as ListObject[];
  Object.keys(list).map((organisation: string) => {
    list[organisation].map((office: Office) => {
      restructredList.push({ organisation, ...office });
    });
  });
  return [restructredList, loadSuppliers];
};
export default useLoadNearbySuppliers;
