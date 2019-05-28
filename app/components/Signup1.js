import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, Image} from 'react-native';
import Login from './components/Login';


export default class Signup1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

 
  
static navigationOptions = {
    title: 'Main Screen',
  };

  render() {

    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>SIGN UP</Text>
      <Image source={{uri: 'https://image.flaticon.com/icons/png/512/1350/1350032.png'}}
       style={{width: 200, height: 200}} />

      <Text>Username</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <Text> Email </Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email})}
          placeholder={'Email'}
          style={styles.input}
        />
        <Text>Password </Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
          <Button
          title={'Submit'}
          style={styles.input}
         //onPress={this.props.navigation.navigate('Main')}
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

