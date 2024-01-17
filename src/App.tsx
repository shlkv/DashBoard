import React from 'react';
import './index.css';
import { Layout,  } from 'antd';

import SideNav from './components/SideNav'
import SideMenu from './components/SideMenu'
import SearchBar from './components/SearchBar'
import DashBoard from './components/DashBoard'

const { Header, Sider, Content } = Layout;


const App = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <Layout>
      <Sider width={65} style={{ minHeight: '100vh', background: '#FFF', borderRight: '2px solid #F7F7F7'}}>
        <SideNav></SideNav>
      </Sider>
      <Sider width={300}  style={{ minHeight: '100vh', background: '#FFF', padding: '15px', borderRight: '2px solid #F7F7F7' }}>
        <SideMenu></SideMenu>
      </Sider>

      <Layout style={{ minHeight: '100vh'}}>
        <Header style={{ padding: '19px 24px', background: '#FFF', minHeight: '10vh', borderBottom: '2px solid #F7F7F7' }}>
          <SearchBar></SearchBar>
        </Header>
        <Content
          style={{
            minHeight: 280,
            background: '#F7F7F7',

          }}
        >
          <DashBoard></DashBoard>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;