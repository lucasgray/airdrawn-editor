import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import {
  BookOutlined,
  LineChartOutlined,
  SettingOutlined,
  SisternodeOutlined,
  TagsOutlined,
  TrophyOutlined
} from '@ant-design/icons';

export const Sidebar: FunctionComponent = () => 
  <SidebarWrapper>
    <Menu mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item>
        <BookOutlined />
        <span className="nav-text">Projects</span>
      </Menu.Item>
      <Menu.Item>
        <SisternodeOutlined />
        <span className="nav-text">Versions</span>
      </Menu.Item>
      <Menu.Item>
        <TagsOutlined />
        <span className="nav-text">Tags</span>
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
  
  
const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 200px;
  background-color: #34324a;
  
  ul {
    height: 100vh;
  }
`;

const Nav = styled.div`
  padding-top: 20px;
`;
