import React from 'react';
import ReactDom from 'react-dom';
import Scoreboard from './components/Scoreboard.jsx';
import Keypad from './components/Keypad.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
  }

  render() {
    return(
      <div>
        <h1>Bowling</h1>
        <div className='info'>
          <Keypad />
          <Scoreboard />
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))