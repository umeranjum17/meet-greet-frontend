import { Button, Form, InputNumber } from 'antd';
import React from 'react';
import { LoadSuppliersFn } from '../types/LoadSuppliersfn';
import { SupplierRequestPayload } from '../types/SupplierRequestPayload';

type SearchFormProps = {
  loadSuppliers: LoadSuppliersFn;
};
function SearchForm(props: SearchFormProps) {
  const { loadSuppliers } = props;
  const onFinish = (values: SupplierRequestPayload) => {
    loadSuppliers({ ...values });
    console.log('Success:', values);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="search__form">
      <h1>Nearby Suppliers</h1>
      <Form
        name="basic"
        layout="inline"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Latitude (degrees)"
          name="latitude"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Longitude (degrees)"
          name="longitude"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Distance"
          name="distance"
          rules={[{ required: true, message: 'Required' }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="form__button" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SearchForm;
