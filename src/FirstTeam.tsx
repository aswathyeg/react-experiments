import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
const FirstTeam = () => (
    <>
     <div id="container" style={{padding: "44px" }}>
      <Avatar.Group>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar
          style={{
            backgroundColor: '#f56a00',
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: '#1890ff',
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
      <Divider />
      <Avatar.Group
        maxCount={2}
        maxStyle={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        }}
      >
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar
          style={{
            backgroundColor: '#f56a00',
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: '#1890ff',
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
      <Divider />
      <Avatar.Group
        maxCount={2}
        size="large"
        maxStyle={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        }}
      >
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar
          style={{
            backgroundColor: '#f56a00',
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: '#1890ff',
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
      </div>
    </>
  );
  export default FirstTeam;