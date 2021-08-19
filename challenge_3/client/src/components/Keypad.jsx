import React from 'react';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPins: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(Number(e.target.innerText));
    this.setState({
      numPins: Number(e.target.innerText)
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.roll(this.state.numPins);
  }

  render() {
    return (
      <div className='keypad'>
        <h3>Number of Pins</h3>
        <table>
          <tbody>
            <tr>
              <td onClick={this.handleChange}>1</td>
              <td onClick={this.handleChange}>2</td>
              <td onClick={this.handleChange}>3</td>
            </tr>
            <tr>
              <td onClick={this.handleChange}>4</td>
              <td onClick={this.handleChange}>5</td>
              <td onClick={this.handleChange}>6</td>
            </tr>
            <tr>
              <td onClick={this.handleChange}>7</td>
              <td onClick={this.handleChange}>8</td>
              <td onClick={this.handleChange}>9</td>
            </tr>
            <tr>
              <td onClick={this.handleChange}>10</td>
            </tr>
          </tbody>
        </table>
        <input value={this.state.numPins}></input>
        <br/>
        <br/>
        <button onClick={this.handleSubmit}>Roll the Ball</button>
      </div>
    )
  }
}

export default Keypad;