import * as React from 'react';
import { Stack } from 'react-bootstrap';
import './TextCard.scss';
export default function TextCard(props) {

  const textLines = props.textLines.map((text) => (
    <p>
      {text}
    </p>
  ));

  return (
    <div className="text-container" style={{ margin: `${props.margin || 0}` }}>
      <Stack>
        {textLines}
      </Stack>
    </div>
  );
}
