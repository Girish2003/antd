import React from 'react';
import { Typography, Layout } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

function AppHeader() {
  return (
    <Header style={{ background: '#1890ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Title level={3} style={{ color: 'white' }}>LinkB</Title>
    </Header>
  );
}

export default AppHeader;
