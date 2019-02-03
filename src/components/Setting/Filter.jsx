import React, {Component} from 'react';

class Filter extends Component {
	constructor(props){
		super(props);
	}
	changeColor(color){
		this.props.activeColor(color);
		this.props.sidebarColor(color);
	}
	render(){
		return (
			<span className={this.props.active == this.props.color ? (this.props.className + " active") : this.props.className } onClick ={() =>this.changeColor(this.props.color)} data-color={this.props.color} />
			);
	}
}
export default Filter;