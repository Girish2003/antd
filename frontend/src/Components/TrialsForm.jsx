import React ,{useEffect, useState}from 'react';
import { Form, Input, InputNumber,Select, Button } from 'antd';

const { Option } = Select;

const TrialsForm = ({data,onClose}) => {
  const [trial,setTrials]=useState(data)
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onClose(values)
    setTrials({})
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{...trial}}
    >
      <Form.Item label="Name" name="name">
        <Input  />
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Input  />
      </Form.Item>

      <Form.Item label="Attach" name="attach">
        <Input  />
      </Form.Item>

      <Form.Item label="Trial (days)" name="trial">
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
        {Object.keys(data).length?"Update":"Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TrialsForm;
