import React from 'react';
import RecordItem from './RecordItem.jsx';

const Records = (props) => (
  <div>
    {props.records.map((item, index) => (
      <RecordItem
        key={index}
        record={item}
      />
    ))}
  </div>
);

export default Records;