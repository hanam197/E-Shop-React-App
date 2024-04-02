import './App.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  DashboardOutlined,
  AreaChartOutlined,
  CameraOutlined,
  EditOutlined,
  CommentOutlined,
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,

} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button, theme } from 'antd';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >
          <img src="https://antd-admin.zuiidea.com/logo.svg" alt="logo" width="30" height="30" />
          <h1> AntD Admin</h1>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: (
                <Link to="products" relative="path">
                  Create Products
                </Link>
              ),
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Users',
            },
            {
              key: '3',
              icon: <CommentOutlined />,
              label: 'Posts',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Request',
            },
            {
              key: '5',
              icon: <CameraOutlined />,
              label: 'UI Element',
              children: [{
                key: "6",
                icon: <EditOutlined />,
                label: 'Editor',
              },
              ],
            },
            {
              key: '7',
              icon: <AreaChartOutlined />,
              label: 'Charts',
              children: [{
                key: "8",
                icon: <LineChartOutlined />,
                label: 'LineCharts',
              },
              {
                key: "9",
                icon: <BarChartOutlined />,
                label: 'BarCharts',
              },
              {
                key: "10",
                icon: <PieChartOutlined />,
                label: 'PieCharts',
              },]
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

        </Header>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[
              {
                title: 'Products',
              },
              {
                title: <a href="#">Users</a>,
              },
              {
                title: <a href="#">Posts</a>,
              },
              {
                title: 'Request',
              },
            ]}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>

      </Layout>
    </Layout>
  );
}

export default App;
