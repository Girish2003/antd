import React from 'react';
import { Tabs } from 'antd';
import Promotions from '../Tabs/Promotions';
import Trials from '../Tabs/Trials';
import Rewards from '../Tabs/Rewards';
import Coupons from '../Tabs/Coupons';

const { TabPane } = Tabs;

function Loyalty() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Tabs defaultActiveKey="1"  tabPosition="left" style={{ flexGrow: 1 }}>
        <TabPane tab="Promotions" key="1">
          <Promotions />
        </TabPane>
        <TabPane tab="Trials" key="2">
          <Trials />
        </TabPane>
        <TabPane tab="Rewards" key="3">
          <Rewards />
        </TabPane>
        <TabPane tab="Coupons" key="4">
          <Coupons />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Loyalty;
