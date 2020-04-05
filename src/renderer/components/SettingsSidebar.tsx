import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import { ContainerOutlined, LineChartOutlined, SettingOutlined, TrophyOutlined } from '@ant-design/icons';
import { SidebarWrapper } from './Sidebar';

export const SettingsSidebar: FunctionComponent = () =>
  <SidebarWrapper isRight>
    <Menu mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item>
        <ContainerOutlined />
        <span className="nav-text">Projects</span>
      </Menu.Item>
      <Menu.Item>
        <LineChartOutlined />
        <span className="nav-text">Progress</span>
      </Menu.Item>
      <Menu.Item>
        <TrophyOutlined />
        <span className="nav-text">Achievements</span>
      </Menu.Item>
      <Menu.Item>
        <SettingOutlined />
        <span className="nav-text">Settings</span>
      </Menu.Item>
    </Menu>
  </SidebarWrapper>;
