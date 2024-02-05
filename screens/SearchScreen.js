import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { TextInput, Button } from 'react-native-paper';

import { icons} from '../constants'
import SearchBar from 'react-native-dynamic-search-bar';

import { useNavigation } from '@react-navigation/native';

const restaurantData = [
  {
      id: 1,
      name: "Rice",
      
  },
  {
      id: 2,
      name: "Noodles",
      
  },
  {
      id: 3,
      name: "Biryani",
   
  },
  
  {
      id: 4,
      name: "Burgers",
     
  },
  {
      id: 5,
      name: "Pizza",
   
  },
 
  {
      id: 6,
      name: "Sushi",
     
  },
  {
      id: 7,
      name: "Desserts",
  },   
  {
      id: 8,
      name: "Drinks",
 
  },

];


const Item = ({ name }) => {
  const navigation = useNavigation();


return (
	<View style={styles.item}>
	<Text>{name}</Text>
  <Button mode="contained" onPress={() => navigation.navigate('Home')} style={styles.button}>
            Search Restaurants
          </Button>
	</View>
);
};

const renderItem = ({ item }) => <Item name={item.name} />;
class SearchScreen extends Component {
constructor(props) {
	super(props);
	this.state = {
	loading: false,
	data: restaurantData,
	error: null,
	searchValue: "",
	};
	this.arrayholder = restaurantData;
}

searchFunction = (text) => {
	const updatedData = this.arrayholder.filter((item) => {
	const item_data = `${item.name.toUpperCase()})`;
	const text_data = text.toUpperCase();
	return item_data.indexOf(text_data) > -1;
	});
	this.setState({ data: updatedData, searchValue: text });
};

render() {
	return (
	<View style={styles.container}>
		<SearchBar
		placeholder="Search Here..."
		lightTheme
		round
		value={this.state.searchValue}
		onChangeText={(text) => this.searchFunction(text)}
		autoCorrect={false}
    
		/>
		<FlatList
		data={this.state.data}
		renderItem={renderItem}
		keyExtractor={(item) => item.id}
		/>
	</View>
	);
}
}



const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: "#ff8100",
  },
container: {
	marginTop: 30,
	padding: 2,
},
item: {
	backgroundColor: "#9d5ed7",
	padding: 30,
	marginVertical: 8,
	marginHorizontal: 16,
  alignItems: 'center',
  borderRadius:20,

},
});

export default SearchScreen;
