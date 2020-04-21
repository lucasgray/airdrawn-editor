import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import { BookOutlined, SisternodeOutlined, TagsOutlined } from '@ant-design/icons';
import SubMenu from 'antd/es/menu/SubMenu';
import { SidebarWrapper, TopMenuClickable } from './Sidebar';

export const ProjectSidebar: FunctionComponent = () =>
  <SidebarWrapper isRight={false}>
    <TopMenuClickable />
    <Menu mode="inline" defaultOpenKeys={['chapters-sub']}>
      <SubMenu
        key="chapters-sub"
        title={
          <Menu.Item>
            <BookOutlined />
            <span className="nav-text">Chapters</span>
          </Menu.Item>
        }>
        <Menu.Item>
          <BookOutlined />
          <span className="nav-text">Chapter 1</span>
        </Menu.Item>
        <Menu.Item>
          <BookOutlined />
          <span className="nav-text">Chapter 2</span>
        </Menu.Item>
        <Menu.Item>
          <BookOutlined />
          <span className="nav-text">Chapter 3</span>
        </Menu.Item>
      </SubMenu>
      <Menu.Item>
        <SisternodeOutlined />
        <span className="nav-text">Versions</span>
      </Menu.Item>
      <Menu.Item>
        <TagsOutlined />
        <span className="nav-text">Tags</span>
      </Menu.Item>
    </Menu>
  </SidebarWrapper>;

