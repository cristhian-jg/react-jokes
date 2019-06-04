    
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

export default class AxiosComponent extends React.Component {

	// 1.- initialize a list
	state = { itemsList: [] };

	componentWillMount() {
		axios.get('https://official-joke-api.appspot.com/jokes/programming/ten')
			// 2.- actualize list, our data is in response.data
			.then(response => this.setState({ itemsList: response.data }));
	}
	
	// 3.- Function to render each element (key is better to be an id instead of title)
	renderList() {
		return this.state.itemsList.map( item => 
			<Text key={item.setup}>{item.setup} {item.punchline}{`\n\n`}</Text> 
		);
	}
	render() {	
		return (
		  <View>
		    {this.renderList()}
		  </View>	
		);
	}
}
