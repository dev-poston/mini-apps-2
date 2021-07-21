import React from 'react';
import ReactDom from "react-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
    // func binds here
  }

  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}

// module.exports = App;
ReactDom.render(<App />, document.getElementById('app'))