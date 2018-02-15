import React,{Component} from 'react';

export default class TableItem extends Component {
	
	constructor(props){
		super(props);
	}

	render() {
		const {name,age,place,display} = this.props.dataItem;

		return display  && (
			<tr>
				<td>{name}</td>
				<td>{age}</td>
				<td>{place}</td>
			</tr>
		);
	}
}