import { Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const CartoonPanel: FunctionComponent<Cartoon> = ({image, alt, notes}) =>
<CartoonRow>
  <Col span={12}>
    <img src={image} alt={alt} className="preview-image" />
  </Col>
  <Col span={12}>
    <section className="notes" contentEditable>
      {notes}
    </section>
  </Col>
</CartoonRow>;

// <CartoonRow>
//   <Col span={12}>
//     <img src={RunstrikeTowerDefense} alt="runstrike_tower_defense" className="preview-image" />
//   </Col>
//   <Col span={12}>
//     <section className="notes" contentEditable>This is my mockup that I got from Richard back in the day
//       to use for the tower defense game. I stayed pretty faithful to it.
//     </section>
//   </Col>
// </CartoonRow>;

// <CartoonRow>
// <Col span={12}>
//   <img src={RandomBuilding} alt="runstrike_tower_defense" className="preview-image" />
//   </Col>
//   <Col span={12}>
//   <section className="notes" contentEditable>A random building that he made for me for the map backgrounds.
// </section>
// </Col>
// </CartoonRow>

const CartoonRow = styled(Row)`
  background-color: #3c435e;
  margin: 10px 0
`;

