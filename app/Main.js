import React from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
	ActivityIndicator,
	ScrollView,
	AsyncStorage
} from 'react-native';
import { LinearGradient } from 'expo';
import uuid from 'uuid/v1';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import { primaryGradientArray } from './utils/Colors';
import Header from './components/Header.js';
import SubTitle from './components/SubTitle';
import Input from './components/Input';
import Input2 from './components/Input2';
import List from './components/List';
import Button from './components/Button';
import Details from './components/Details';

import { Alert,  TextInput, Text } from 'react-native';

const headerTitle = 'Calorie Manager';



export default class Main extends React.Component {
	state = {
		inputValue: '',
    inputValue2: '',
		loadingItems: false,
		allItems: {},
		isCompleted: false
	};

	componentDidMount = () => {
		this.loadingItems();
	};

	newInputValue = value => {
		this.setState({
			inputValue: value
		});
	};
  newInputValue2 = value2 => {
		this.setState({
			inputValue2: value2
		});
	};

	loadingItems = async () => {
		try {
			const allItems = await AsyncStorage.getItem('Todos');
			this.setState({
				loadingItems: true,
				allItems: JSON.parse(allItems) || {}
			});
		} catch (err) {
			console.log(err);
		}
	};


	onDoneAddItem = () => {
		const { inputValue } = this.state;
		if (inputValue !== '') {
			this.setState(prevState => {
				const id = uuid();
				const newItemObject = {
					[id]: {
						id,
						isCompleted: false,
						text: inputValue,
						createdAt: Date.now()
					}
				};
				const newState = {
					...prevState,
					inputValue: '',
					allItems: {
						...prevState.allItems,
						...newItemObject
					}
				};
				this.saveItems(newState.allItems);
				return { ...newState };
			});
		}
	};

  onDoneAddItem2 = () => {
		const { inputValue2 } = this.state;
		if (inputValue2 !== '') {
			this.setState(prevState => {
				const id1 = uuid();
				const newItemObject = {
					[id1]: {
						id1,
						isCompleted: false,
						text: inputValue2,
						createdAt: Date.now()
					}
				};


				const newState1 = {
					...prevState,
					inputValue: '',
					allItems: {
						...prevState.allItems,
						...newItemObject
					}
				};
				this.saveItems(newState1.allItems);
				return { ...newState1 };
			});
		}
	};

	deleteItem = id => {
		this.setState(prevState => {
			const allItems = prevState.allItems;
			delete allItems[id];
			const newState = {
				...prevState,
				...allItems
			};
			this.saveItems(newState.allItems);
			return { ...newState };
		});
	};

	completeItem = id => {
		this.setState(prevState => {
			const newState = {
				...prevState,
				allItems: {
					...prevState.allItems,
					[id]: {
						...prevState.allItems[id],
						isCompleted: true
					}
				}
			};
			this.saveItems(newState.allItems);
			return { ...newState };
		});
	};

	incompleteItem = id => {
		this.setState(prevState => {
			const newState = {
				...prevState,
				allItems: {
					...prevState.allItems,
					[id]: {
						...prevState.allItems[id],
						isCompleted: false
					}
				}
			};
			this.saveItems(newState.allItems);
			return { ...newState };
		});
	};

	deleteAllItems = async () => {
		try {
			await AsyncStorage.removeItem('Todos');
			this.setState({ allItems: {} });
		} catch (err) {
			console.log(err);
		}
	};

	saveItems = newItem => {
		const saveItem = AsyncStorage.setItem('Todos', JSON.stringify(newItem));
	};

	render(){
        const { inputValue, loadingItems, allItems } = this.state;
        let calorieLimit = this.props.navigation.getParam('calorieLimit');
        let calorie_cal = calorieLimit;
        calorie_cal = Number(calorie_cal - this.state.inputValue2);


		return (
			<LinearGradient colors={primaryGradientArray} style={styles.container}>
				<StatusBar barStyle="light-content" />
				<View style={styles.centered}>
					<Header title={headerTitle} />
				</View>
 <View style={styles.caloriebox}>

<Text style={styles.boxcalorielimit }> Calorie Limit :  
{calorieLimit}
</Text>


<Text style={styles.boxcalorieremain}> Calorie Remain : {calorie_cal} </Text>

</View>

				<View style={styles.inputContainer}>
					<SubTitle subtitle={"Enter New Food"} />
					<Input
						inputValue={inputValue}
						onChangeText={this.newInputValue}
						onDoneAddItem={this.onDoneAddItem}
					/>
          <SubTitle subtitle={"Enter Calorie"} />
					<Input2
						inputValue2={inputValue}
						onChangeText={this.newInputValue2}
						onDoneAddItem2={this.onDoneAddItem2}
					/>

				</View>
				<View style={styles.list}>
					<View style={styles.column}>
						<SubTitle subtitle={'Meals'} />
						<View style={styles.deleteAllButton}>
							<Button deleteAllItems={this.deleteAllItems} />
						</View>
					</View>

					{loadingItems ? (
						<ScrollView contentContainerStyle={styles.scrollableList}>
							{Object.values(allItems)
								.reverse()
								.map(item => (
									<List
										key={item.id}
										{...item}
										deleteItem={this.deleteItem}
										completeItem={this.completeItem}
										incompleteItem={this.incompleteItem}
									/>
								))}
						</ScrollView>
					) : (
						<ActivityIndicator size="large" color="white" />
					)}
				</View>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	centered: {
		alignItems: 'center'
	},
	inputContainer: {
		marginTop: 20,
		paddingLeft: 15
	},
	list: {
		flex: 1,
		marginTop: 70,
		paddingLeft: 15,
		marginBottom: 10
	},
	scrollableList: {
		marginTop: 15
	},
	column: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	deleteAllButton: {
		marginRight: 40
	},
  caloriebox:{
     flexDirection: 'row',
     justifyContent: 'center',
      margin: 20,
      
  },
boxcalorielimit:{
  textAlign: 'center',
  backgroundColor: 'grey',
  width: 200,
  height: 30
},
boxcalorieremain:{
  textAlign: 'center',
  backgroundColor: 'red',
   width: 200,
  height: 30
},

});

