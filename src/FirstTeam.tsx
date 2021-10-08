
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Redirect } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default class firstTeam extends React.Component {
  constructor(props) {
    super(props);

    this.clickStatus = this.clickStatus.bind(this);
    this.clickFirstTeam = this.clickFirstTeam.bind(this);
    this.clickSecondTeam = this.clickSecondTeam.bind(this);
  }

  state = {
    collapsed: false,
    statusRedirect: false,
    firstTeamRedirect: false,
    secondTeamRedirect: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  clickStatus() {
    this.setState({ statusRedirect: true });


  }
  clickFirstTeam() {
    this.setState({ firstTeamRedirect: true });

  }
  clickSecondTeam() {
    this.setState({ secondTeamRedirect: true });

  }
  render() {

    const { collapsed } = this.state;
    if (this.state.statusRedirect) {

      return <Redirect push to="/status" />;


    }
    if (this.state.firstTeamRedirect) {

      return <Redirect push to="/firstTeam" />;


    }
    if (this.state.secondTeamRedirect) {

      return <Redirect push to="/secondTeam" />;


    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={this.clickStatus} icon={<PieChartOutlined />}>
              Team Summary
                </Menu.Item>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team Details">
              <Menu.Item key="6" onClick={this.clickFirstTeam}>Team 1</Menu.Item>
              <Menu.Item key="8" onClick={this.clickSecondTeam}>Team 2</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <>

          <div id="container" style={{ padding: "44px" }}>


            <Avatar.Group>

              <Avatar
                style={{
                  backgroundColor: '#f56a00',
                }}
              >
                1
        </Avatar>


            </Avatar.Group>

          </div>
        </>

      </Layout>
    );
  }
}

