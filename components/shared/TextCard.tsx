import * as React from 'react';
import { Stack } from 'react-bootstrap';
import './TextCard.scss';
export default function TextCard(props) {
  return (
    <div className="text-container" style={{ margin: `${props.margin || 0}` }}>
      <Stack>{props.children}</Stack>
    </div>
  );
}
