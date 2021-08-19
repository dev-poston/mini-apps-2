import React from 'react';
import Frame from './Frame.jsx';
import FrameScore from './FrameScore.jsx';

const Scoreboard = (props) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Scoreboard</th>
          <th colspan='2'>1</th>
          <th colspan='2'>2</th>
          <th colspan='2'>3</th>
          <th colspan='2'>4</th>
          <th colspan='2'>5</th>
          <th colspan='2'>6</th>
          <th colspan='2'>7</th>
          <th colspan='2'>8</th>
          <th colspan='2'>9</th>
          <th colspan='2'>10</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          {props.frameScore.map((item, index) => (
            <FrameScore
              key={index}
              scores={item}
            />
          ))}
        </tr>
        <tr>
          <td>Player 1</td>
          {props.scores.map((item, index) => (
            <Frame
              key={index}
              scores={item}
            />
          ))}
          <td>{props.total}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Scoreboard;