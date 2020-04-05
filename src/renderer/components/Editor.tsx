import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';

interface EditorProps {
  text: Chapter[];
  // onChange: (c: Chapter, idx: number) => void;
}

interface Chapter {
  title: string;
  content: string;
}
// onChange={e => onChange(e.currentTarget.nodeValue, i)}
export const Editor: FunctionComponent<EditorProps> = ({ text }) => {
  return (
    <div>
      <PageGutters>
        <EditorText>
          {text.map((c, i) => (
            <>
              <Divider>{c.title}</Divider>

              <section contentEditable>{c.content}</section>
            </>
          ))}
        </EditorText>
      </PageGutters>
    </div>
  );
};

const PageGutters = styled.div`
  display: flex;
  justify-content: center;
  background-color: #202331;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 70px);

  ::-webkit-scrollbar {
    width: 8px;
    /* This is more usable for users trying to click it. */
    background-color: rgba(0, 0, 0, 0);
    -webkit-border-radius: 100px;
  }
  /* hover effect for both scrollbar area, and scrollbar 'thumb' */
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  /* The scrollbar 'thumb' ...that marque oval shape in a scrollbar */
  ::-webkit-scrollbar-thumb:vertical {
    background: rgba(188,20,87, 0.7);
    -webkit-border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(188,20,87, 0.8);
    -webkit-border-radius: 100px;
  }
`;

const EditorText = styled.section`
  
  margin: 15px 0;
  max-width: 900px;

  section {
    padding: 5px 10px;
    margin: 0 20px;
    background-color: #292d3e;
    outline: 0 solid transparent;
  }

  ::selection {
    background: #3c435e;
  }
  caret-color: #bc1457;
  
  .ant-divider-inner-text {
    cursor: default;
  }

`;
