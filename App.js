import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import { firebaseConfig } from './config';
import Loading from './screens/Loading';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Switch = createSwitchNavigator({
  Loading: Loading,
  Login: Login,
  Dashboard: Dashboard
});

const Navigator = createAppContainer(Switch);

export default class App extends React.Component {
  render(){
    return (
      <Navigator />
    );
  }
}