import React,{Component} from 'react';
import TableItem from './tableItem';

export default class TableList extends Component {

	constructor(props){
		super(props);
	}

	render() {
		return this.props.data.map((data,index) => <TableItem key={index} dataItem={data}/>)
	}
}