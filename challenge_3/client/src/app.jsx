import React from 'react';
import ReactDom from 'react-dom';
import Scoreboard from './components/Scoreboard.jsx';
import Keypad from './components/Keypad.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0,
      frameScore: [],
      rolls: 0,
      total: 0,
      scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    this.handleRoll = this.handleRoll.bind(this);
    this.handleNextFrame = this.handleNextFrame.bind(this);
    this.handleEndgame = this.handleEndgame.bind(this);
  }

  handleRoll(num) {
    // this.handleEndgame(this.state.rolls);
    let fs = this.state.frameScore;
    fs[this.state.rolls] = num;
    let totals = 0;
    for (let i = 0; i < this.state.frameScore.length; i++) {
      totals += this.state.frameScore[i];
    }
    let frameTotal = this.state.scores;
    frameTotal[this.state.frame] = totals;
    this.setState({
      rolls: this.state.rolls + 1,
      frameScore: fs,
      total: totals,
      scores: frameTotal
    }, () => {
      if (this.state.rolls === 21) {
        this.handleEndgame(this.state.rolls);
      } else {
        this.handleNextFrame(this.state.rolls);
      }
    })
  }

  handleNextFrame(roll) {
    if (roll % 2 === 0) {
      this.setState({
        frame: this.state.frame + 1
      })
    }
  }

  handleEndgame(rolls) {

      this.setState({
        frame: 0,
        frameScore: [],
        rolls: 0,
        total: 0,
        scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, () => alert('Great Job! Play Again?'))

  }

  render() {
    return (
      <div>
        <h1>Bowling</h1>
        <div className='info'>
          <Keypad roll={this.handleRoll} />
          <Scoreboard
            frame={this.state.frame}
            frameScore={this.state.frameScore}
            scores={this.state.scores}
            total={this.state.total} />
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));