import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Sidebar: FunctionComponent = () => 
  <SidebarWrapper>
    <Nav>
      <div>Thing One</div>
      <div>Thing Two</div>
      <div>Thing Three</div>
    </Nav>
  </SidebarWrapper>;
  
  
const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 200px;
  height: 100vh;
  background-color: #34324a;
`;

const Nav = styled.div`
  padding-top: 20px;
`;
