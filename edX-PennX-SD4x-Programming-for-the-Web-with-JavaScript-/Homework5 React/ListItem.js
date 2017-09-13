import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { color: 'black' };
    }

    handleClick() {
	// Implement this function!
	var color = this.state.color;
	if (color == 'black') {
		this.setState({color: 'gray'});
	} else {
		this.setState ({color: 'black'});
	}
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

