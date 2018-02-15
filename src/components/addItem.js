import React,{Component} from 'react';

export default class AddItem extends Component {
	constructor(props){
		super(props);
				this.state = {
						addItemText : '',
						ageDataText : ''
	 				 };
	}

	addItemtoListHandler = (event) => {
		event.preventDefault();
		const {addItemToList} = this.props;
		const {addItemText,ageDataText} = this.state;

		var _obj = {
			name : addItemText,
			age : ageDataText,
			display: true
		}

		addItemToList(_obj);

		this.setState({
			addItemText : '',
			ageDataText : ''
		});
	}

	addItemTextChangeListener = (event) => {
		const {name,value} = event.target;

		const _obj = {};
		_obj[name] = value;
		this.setState(_obj);
	}

	render() {
		return (
				<div id="addItem">

					<div id="head>">
						<h4>Add Item to list</h4>
					</div>

					<form onSubmit={this.addItemtoListHandler}>
						<div>
							<label>Name</label>
							<input type="text" size="30" name="addItemText" value={this.state.addItemText} 
								onChange={this.addItemTextChangeListener} required/>
						</div>
						<div>
							<label>Age</label>
							<input type="number" name="ageDataText" value={this.state.ageDataText} 
								onChange={this.addItemTextChangeListener} required/>
						</div>
							<input type="submit" value="ADD ITEM" />
					</form>
				</div>
			);
	}
}