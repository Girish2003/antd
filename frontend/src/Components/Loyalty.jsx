import React from 'react';
import { Tabs } from 'antd';
import Promotions from '../Tabs/Promotions';
import Trials from '../Tabs/Trials';
import Rewards from '../Tabs/Rewards';
import Coupons from '../Tabs/Coupons';

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Promotions',
    children: <Promotions />,
  },
  {
    key: '2',
    label: 'Trials',
    children: <Trials />,
  },
  {
    key: '3',
    label: 'Rewards',
    children: <Rewards />,
  },
  {
    key: '4',
    label: 'Coupons',
    children: <Coupons />,
  },
];

const Loyalty = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabPosition="left" style={{ flexGrow: 1 }} />
  </div>
);

export default Loyalty;