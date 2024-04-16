import React from 'react';
import { Form, Input, DatePicker, Button, InputNumber } from 'antd';
import moment from 'moment';

const CouponsForm = ({data,onClose}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onClose({...values,
        effectiveDate: new Date(values.effectiveDate).toDateString(),
        expiryDate: new Date(values.expiryDate).toDateString(),
    })
    
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
       ...data, 
        effectiveDate: moment(data.effectiveDate, 'YYYY-MM-DD'),
        expiryDate: moment(data.expiryDate, 'YYYY-MM-DD'),
      }}
    >
      <Form.Item label="Name" name="name">
        <Input  />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea  />
      </Form.Item>

      <Form.Item label="Effective Date" name="effectiveDate">
        <DatePicker  />
      </Form.Item>

      <Form.Item label="Expiry Date" name="expiryDate">
        <DatePicker  />
      </Form.Item>

      <Form.Item label="Coupon Code" name="couponCode">
        <Input  />
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Input  />
      </Form.Item>

      <Form.Item label="Discount" name="discount">
        <InputNumber />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {Object.keys(data).length?"Update":"Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CouponsForm;
