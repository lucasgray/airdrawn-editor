import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { Cartoon } from '../../types/State';
import { CartoonPanel } from './CartoonPanel';

interface EditorProps {
  cartoons: Cartoon[];
  setCartoons: (c: Cartoon[]) => void;
}

// onChange={e => onChange(e.currentTarget.nodeValue, i)}

export class Editor extends React.PureComponent<EditorProps> {
  // a little function to help us with reordering the result
  reorder = (cartoons: Cartoon[], startIndex: number, endIndex: number): Cartoon[] => {
    const result = Array.from(cartoons);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  dragEnd = (dropResult: DropResult) => {
    // dropped outside the list
    if (!dropResult.destination) {
      return;
    }

    this.props.setCartoons(this.reorder(this.props.cartoons, dropResult.source.index, dropResult.destination.index));
  };

  render() {
    const { cartoons, setCartoons } = this.props;

    return (
      <div>
        <PageGutters>
          <EditorText>
            <DragDropContext onDragEnd={r => this.dragEnd(r)}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {cartoons.map((c, i) => (
                      <Draggable key={c.id} draggableId={`${c.id}`} index={i}>
                        {(draggableProvided, draggableSnapshot) => (
                          <div
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            {...draggableProvided.dragHandleProps}>
                            <CartoonPanel key={c.id} {...c} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </EditorText>
        </PageGutters>
      </div>
    );
  }
}

// style={getListStyle(snapshot.isDraggingOver)}

// style={getItemStyle(
//         snapshot.isDragging,
//     provided.draggableProps.style
// )}

// <div
//     ref={provided.innerRef}
//     {...provided.draggableProps}
//     {...provided.dragHandleProps}
//     style={getItemStyle(
//         snapshot.isDragging,
//         provided.draggableProps.style
//     )}
// >
//     <CartoonPanel key={c.id} {...c} />)}
// </div>

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
    background: rgba(188, 20, 87, 0.7);
    -webkit-border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(188, 20, 87, 0.8);
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
    max-width: 100%;
  }

  caret-color: #bc1457;

  .ant-divider-inner-text {
    cursor: default;
  }
`;
