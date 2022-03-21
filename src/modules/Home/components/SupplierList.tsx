import React from 'react';
import { Grid, Table, Tag } from 'antd';
import { ListObject } from '../types/SupplierListObject';

const { useBreakpoint } = Grid;
const mobileColumns = [
  {
    title: 'Nearby SupplierList',
    render: (record: ListObject) => {
      const { location, coordinates, organisation, address } = record;
      return (
        <div>
          <span>
            <h4>Organisation:</h4>
            <p>{organisation}</p>
          </span>
          <span>
            <h4>Location:</h4>
            <p>{location}</p>
          </span>
          <span>
            <h4>Address:</h4>
            <p>{address}</p>
          </span>
          <span>
            <h4>Coordinates:</h4>
            <p>{coordinates}</p>
          </span>
        </div>
      );
    },
  },
];

const columns = [
  {
    title: 'Organisation',
    dataIndex: 'organisation',
    key: 'organisation',
    sorter: (a: ListObject, b: ListObject) => a.organisation.localeCompare(b.organisation),
  },
  {
    title: 'Office Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Coordinates',
    key: 'coordinates',
    dataIndex: 'coordinates',
    responsive: ['sm'],
    render: (tag: string) => (
      <Tag color="blue" key={tag}>
        {tag}
      </Tag>
    ),
  },
];

type Props = {
  list: ListObject[];
};
const SupplierList = (props: Props) => {
  const { list } = props;
  const breakpoints = useBreakpoint();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderColumn = (breakpoints.lg ? columns : mobileColumns) as any;
  return <Table columns={renderColumn} dataSource={list} />;
};

export default SupplierList;
