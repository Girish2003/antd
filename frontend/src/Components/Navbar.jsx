import React ,{useState}from 'react'
import { Layout, Menu,Typography } from 'antd';
import {
  HomeOutlined,
  BookOutlined
} from '@ant-design/icons';
import UserRoutes from '../Routes/UserRoutes';
import { Link } from 'react-router-dom';

function Navbar() {
    const { Header, Sider, Content } = Layout;
    const {Text}=Typography
    const [visible,setVisible]=useState(false)
  
    return (
      <Layout  style={{ minHeight: '100vh' }}>
        <Sider theme="light" trigger={null} breakpoint='sm' >
          <div className="logo">
          <Text strong  style={{ fontSize: '1.2rem' } }>LinkB</Text>
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/Loyalty">Loyalty</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
            <UserRoutes/>
        </Content>
      </Layout>
    );
}

export default Navbar