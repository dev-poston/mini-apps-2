import React from 'react';
import Frame from './Frame.jsx';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 1,
      total: 0,
      scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  render() {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Scoreboard</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Player 1</td>
              {this.state.scores.map((item, index) => (
                <Frame
                  key={index}
                  frame={this.state.frame}
                  total={this.state.total}
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Scoreboard;