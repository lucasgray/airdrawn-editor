import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CloudSyncOutlined, SaveOutlined } from '@ant-design/icons';

export const Footer: FunctionComponent = () =>
  <FooterWrapper>
    <SaveOutlined />
    <CloudSyncOutlined />
  </FooterWrapper>;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #202331;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  padding: 2px 0;
  
  span {
    padding: 0 3px;
  }
`;
