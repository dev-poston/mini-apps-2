import React from 'react';
import ReactDom from 'react-dom';
import API from './API.js';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      records: []
    }
    this.searchClick = this.searchClick.bind(this);
  }

  searchClick(query) {
    console.log('CLIENT QUERY: ', query);
    API.get(query, (data) => {
      this.setState({
        records: data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search searchClick={this.searchClick}/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))