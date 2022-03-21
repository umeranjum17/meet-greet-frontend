import React from 'react';
import SearchForm from './components/SearchForm';
import SupplierList from './components/SupplierList';
import useLoadNearbySuppliers from './hooks/useLoadNearbySuppliers';

function HomePage() {
  const [list, loadSuppliers] = useLoadNearbySuppliers();
  console.log(list, loadSuppliers);
  return (
    <div>
      <SearchForm {...{ loadSuppliers }} />
      <SupplierList {...{ list }} />
    </div>
  );
}

export default HomePage;
