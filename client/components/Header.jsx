import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    // this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      // mode:"cors",
      credentials: 'include',
      // body: JSON.stringify({firstname, lastname, email, password, building}),
    };
    fetch('http://localhost:3000/homepage', requestOptions)
      //need to return in .then or console.log
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log('DATA', data);
        this.setState({ products: data });
      })
      .catch((err) => {
        console.log('failed to login');
      });
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">RentIt</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Manage Building</Menu.Item>
            <Menu.Item key="2">Manage Products</Menu.Item>
            <Menu.Item key="3" style={{ float: 'right' }}>
              Logout
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: '24px 0' }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="subnav 3"
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default MainHeader;
