import React from 'react';
import ReactDom from 'react-dom';
import ReactPaginate from 'react-paginate';
import API from './API.js';
import Search from './components/Search.jsx';
import Records from './components/Records.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      records: [],
      pageCount: 1
    }
    this.searchClick = this.searchClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  searchClick(query, pageNum = 0) {
    console.log('CLIENT QUERY: ', query);
    this.setState({
      search: query
    });
    API.get({query: query, pageNum: pageNum}, (data) => {
      this.setState({
        records: data.data,
        pageCount: Math.ceil(Number(data.headers['x-total-count']) / 10)
      })
    })
  }

  handlePageClick(e) {
    console.log('click: ', e.selected);
    this.searchClick(this.state.search, e.selected + 1);
  }

  render() {
    return (
      <div className='outer'>
        <h1>Historical Events Finder</h1>
        <Search searchClick={this.searchClick}/>
        <Records records={this.state.records}/>
        <ReactPaginate
          id='react-paginate'
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))