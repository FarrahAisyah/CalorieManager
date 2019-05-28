import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      height: '',
      weight: '',
      calorielimit: ''
    };
  }

  

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>DETAILS</Text>

      <Text>Height in (CM) </Text>
        <TextInput
          value={this.state.height}
          onChangeText={(height) => this.setState({ height })}
          placeholder={'Height'}
          style={styles.input}
        />
        <Text> Weight in (KG) </Text>
        <TextInput
          value={this.state.weight}
          onChangeText={(weight) => this.setState({ weight })}
          placeholder={'Weight'}
          style={styles.input}
        />
        <Text>Calorie Limit </Text>
        <TextInput
          value={this.state.calorielimit}
          onChangeText={(calorielimit) => this.setState({ calorielimit })}
          placeholder={'Calorie limit'}
          style={styles.input}
        />

       <Button
          title={'Submit'}
          style={styles.input}
       onPress={
         () => this.props.navigation.navigate('Main', {
           calorieLimit : this.state.calorielimit
         })
         }
        />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
    fontWeight: 'bold',
  },
});
