import React from 'react';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPins: 0
    }
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th width='90%'>Number of Pins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width='33%'>1</td>
              <td width='33%'>2</td>
              <td width='33%'>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Keypad;