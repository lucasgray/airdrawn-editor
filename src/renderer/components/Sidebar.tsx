import styled from 'styled-components';

export const SidebarWrapper = styled.div<{isRight: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 200px;
  background-color: #34324a;
  
  ul {
    height: 100vh;
    min-width: 200px;
    border-right: none;
  }
  
  .ant-menu-item::after {
    left: ${props => props.isRight ?  "auto" : "0px"};
    right: ${props => props.isRight ?  "0px" : "auto"};
    border-right: ${props => props.isRight ?  "4px" : "3px"} solid #BC1457;
  }
  .ant-menu-item-selected::after {
    left: ${props => props.isRight ?  "auto" : "0px"};
    right: ${props => props.isRight ?  "0px" : "auto"};
    border-right: ${props => props.isRight ?  "4px" : "3px"} solid #BC1457;
  }
  
  
`;

export const TopMenuClickable = styled.div`
  -webkit-app-region: drag;
  height: 20px;
  width: 100%;
`
