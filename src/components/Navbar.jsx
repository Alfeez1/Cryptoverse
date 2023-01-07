import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import icon from '../images/cryptocurrency.png';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/"> crypto</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/ ">Home</Link>
        </Menu.Item>{' '}
        <Menu.Item key="2" icon={<FundOutlined />}>
          <Link to="/cryptocurrency">CryptoCurrency</Link>
        </Menu.Item>{' '}
        <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">exchanges</Link>
        </Menu.Item>{' '}
        <Menu.Item key="4" icon={<BulbOutlined />}>
          <Link to="/new ">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
