import React,{Component} from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchDataText : ''
		};
	}

	searchDataListener = (event) => {
		const {filterData} = this.props;

		var _searchText = event.target.value;
		this.setState({searchDataText : _searchText})
		filterData(_searchText);
	}

	render() {
		return (
			<div>
				<h4>Search Bar!</h4>
				<input type="text" size="30" name="searchData" value={this.state.searchDataText} onChange={this.searchDataListener}/>
			</div>
		);
	}
}