import React,{Component} from 'react';
import TableList from './tablelist';
import SearchBar from './searchBar';
import AddItem from './addItem';

export default class App extends Component {

	constructor(props){
		super(props);
		this.state = { itemList : []};
	}

	filterData = (searchText) => {
		var _filteredData = [];

		for (let _obj of this.state.itemList) {
			_obj['display'] = false;

			if (_obj['name'].indexOf(searchText) >= 0 || _obj['age'].indexOf(searchText) >= 0) {
				_obj['display'] = true;
			} 
			_filteredData.push(_obj);
		}

		this.setState({itemList : _filteredData});
	}

	addItemToList = (_item) => {
		const _newList = this.state.itemList.concat(_item);
		this.setState({itemList: _newList});
	}

	render() {

		return (
			<div>
				<SearchBar filterData={this.filterData}/>

				{this.state.itemList.length > 0?  (<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Age</td>
						</tr>
					</thead>
					<tbody>
						<TableList data={this.state.itemList} />
					</tbody>
				</table>) : null}

				<AddItem addItemToList={this.addItemToList}/>
			</div>
		);
	}

}