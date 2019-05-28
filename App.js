import React from 'react';

import Main from './app/Main';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import Details from './app/components/Details';


import {createStackNavigator, createAppContainer} from 'react-navigation';

const RootStack = createStackNavigator({

 Login : Login,
  Profile : Profile,
 Details : Details,
  Main: Main
 
})
const App = createAppContainer(RootStack);

export default App;

// export default class App extends React.Component {
// 	render() {
// 		return <RootStack />;
// 	}
// }