import { SupplierRequestPayload } from './SupplierRequestPayload';

export type LoadSuppliersFn = ({ latitude, longitude, distance }: SupplierRequestPayload) => void;
