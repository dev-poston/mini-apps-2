import React from 'react';
import FieldRow from './FieldRow.jsx';

const Field = (props) => (
  <div>
    <table>
      <tbody>
        {props.field.map((item, index) => (
          <FieldRow
            row={item}
            idx={index}
            handleDig={props.handleDig}
          />
        ))}
      </tbody>
    </table>
  </div>
)

export default Field;