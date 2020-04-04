import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';

interface EditorProps {
  text: Chapter[]
}

interface Chapter {
  title: string,
  content: string
}

export const Editor: FunctionComponent<EditorProps> = ({text}) => {

  return (
    <div>
      <PageGutters>
        <EditorText contentEditable>
          {text.map(c =>
            <>
              <Divider>{c.title}</Divider>
              <section>{c.content}</section>
            </>
          )}
        </EditorText>
      </PageGutters>
    </div>
)
};

const PageGutters = styled.div`
  display: flex;
  justify-content: center;
  background-color: #202331;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(85vh + 50px);
  
  ::-webkit-scrollbar {
    width: 8px;
    /* This is more usable for users trying to click it. */
    background-color: rgba(0,0,0,0);
    -webkit-border-radius: 100px;
  }
  /* hover effect for both scrollbar area, and scrollbar 'thumb' */
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  
  /* The scrollbar 'thumb' ...that marque oval shape in a scrollbar */
  ::-webkit-scrollbar-thumb:vertical {
    background: rgba(0,0,0,0.5);
    -webkit-border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(0,0,0,0.61); 
    -webkit-border-radius: 100px;
  }
`;

const EditorText = styled.section`
  outline: 0 solid transparent;
  margin: 15px 0;
  max-width: 800px;
  
  section {
    padding: 5px 10px;
    background-color: #292D3E;
  }
  
  ::selection {
    background: #3C435E;
  }
  caret-color: #BC1457;
  

`;


