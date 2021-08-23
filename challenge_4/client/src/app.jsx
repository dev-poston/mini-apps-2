import React from 'react';
import ReactDom from 'react-dom';
import Field from './Components/Field.jsx';
import set from '../../helpers/addNums.js';
import uncover from '../../helpers/uncover.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]
    };
    this.handleDig = this.handleDig.bind(this);
    this.checkBoom = this.checkBoom.bind(this);
    this.setMines = this.setMines.bind(this);
  }

  componentDidMount() {
    this.setMines();
  }

  setMines() {
    let mineCount = 0;
    let newField = this.state.field;
    while (mineCount < 10) {
      let setRndMineX = Math.floor(Math.random() * 10);
      let setRndMineY = Math.floor(Math.random() * 10);
      newField[setRndMineX][setRndMineY] = '💣';
      mineCount++;
    }
    set.nums(newField);
    this.setState({
      field: newField
    });
  }

  handleDig(x, y) {
    if (this.checkBoom(x, y)) {
      return;
    }
    uncover.dig(x, y, this.state.field, (newField) => {
      this.setState({
        field: newField
      });
    });
  }

  checkBoom(x, y) {
    if (this.state.field[x][y] === '💣') {
      alert('BOOM!... Play Again?');
      window.location.reload(true);
    }
    return false;
  }

  render() {
    return (
      <div>
        <h1>💥 Minesweeper 💥</h1>
        <Field
          field={this.state.field}
          handleDig={this.handleDig}
        />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));