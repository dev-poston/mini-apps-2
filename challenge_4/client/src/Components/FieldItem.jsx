import React from 'react';

class FieldItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.handleDig(this.props.idx, this.props.idy);
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if (!this.state.clicked) {
      return(
        <td className='unclicked' onClick={this.handleClick}>{this.props.item}</td>
      )
    } else {
      return(
        <td className='clicked' onClick={this.handleClick}>{this.props.item}</td>
      )
    }
  }
}

export default FieldItem;