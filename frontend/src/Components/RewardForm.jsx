import React ,{useEffect, useState} from 'react'
import { Form, Input, InputNumber, Select, Button } from 'antd';

function RewardForm({data,onClose}) {
  const [initialState,setInitial]=useState(data);
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = (values) => {
      onClose(values)
  };
  return (
    <Form
    form={form}
    layout="vertical"
    onFinish={onFinish}
    initialValues={data}
  >
    <Form.Item label="Name" name="name">
      <Input />
    </Form.Item>

    <Form.Item label="Earn">
      <Form.Item
        label="Purchase Amount"
        name={['earn', 'purchaseAmount']}
        rules={[{ required: true, message: 'Please input purchase amount!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="Points"
        name={['earn', 'points']}
        rules={[{ required: true, message: 'Please input points!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="Referral Points"
        name={['earn', 'referralPoints']}
        rules={[{ required: true, message: 'Please input referral points!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
    </Form.Item>

    <Form.Item label="Redeem">
      <Form.Item
        label="Redeem Points"
        name={['redeem', 'redeemPoints']}
        rules={[{ required: true, message: 'Please input redeem points!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="Cash Value"
        name={['redeem', 'cashValue']}
        rules={[{ required: true, message: 'Please input cash value!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="Minimum Points"
        name={['redeem', 'minPoints']}
        rules={[{ required: true, message: 'Please input minimum points!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="Display Mode"
        name={['redeem', 'displayMode']}
        rules={[{ required: true, message: 'Please select display mode!' }]}
      >
        <Select>
          <Option value="Percentage">Percentage</Option>
          <Option value="Fixed">Fixed</Option>
        </Select>
      </Form.Item>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        {Object.keys(data).length?"Update":"Submit"}
      </Button>
    </Form.Item>
  </Form>
    
  )
}

export default RewardForm