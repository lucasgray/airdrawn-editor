import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CartoonPanel } from './CartoonPanel';
import { Cartoon } from '../../types/State';

interface EditorProps {
  cartoons: Cartoon[];
  // onChange: (c: Chapter, idx: number) => void;
}


// onChange={e => onChange(e.currentTarget.nodeValue, i)}
export const Editor: FunctionComponent<EditorProps> = ({ cartoons }) => {
  return (
    <div>
      <PageGutters>
        <EditorText>
          {cartoons.map((c) => <CartoonPanel key={c.id} {...c} />)}
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

// TODO break me up
const EditorText = styled.section`
  
  margin: 15px 0;
  max-width: 900px;

  .notes {
    padding: 5px 10px;
    margin: 0 20px;
    background-color: #292d3e;
    outline: 0 solid transparent;
  }
  
  .preview-image {
    max-width: 100%
  }

  caret-color: #bc1457;
  
  .ant-divider-inner-text {
    cursor: default;
  }

`;