import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from "react-native";
//import { f, auth, database } from "./config/config";
//import { Facebook } from "expo";

//navigation 
import feed from './app/screens/feed';
import upload from './app/screens/upload';
import profile from './app/screens/profile';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
const MainStack  = createBottomTabNavigator({
  Feed:{
    screen:feed
  },
  Upload:{
    screen:upload
  },
  Profile:{
    screen:profile
  }
})

 class App extends React.Component {

  render() {
    return (
      <MainStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

//const App = createAppContainer(MainStack)

export default createAppContainer(MainStack) ;
