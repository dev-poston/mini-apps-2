import React from 'react';
import FieldItem from './FieldItem.jsx';

const FieldRow = (props) => (
  <tr>
    {props.row.map((item, index) => (
      <FieldItem
        item={item}
        idy={index}
        idx={props.idx}
        handleDig={props.handleDig}
      />
    ))}
  </tr>
);

export default FieldRow;