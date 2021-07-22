import React from 'react';

const RecordItem = (props) => (
  <div className='recorditem'>
    <h4><b>Date: </b>{props.record.date}</h4>
    <h4><b>Location: </b>{props.record.category2}</h4>
    <h4><b>Description: </b>{props.record.description}</h4>
  </div>
);

export default RecordItem;