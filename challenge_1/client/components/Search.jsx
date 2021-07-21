import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchClick(this.state.query);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }
}

export default Search;