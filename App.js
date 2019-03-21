import React from "react";
import { StyleSheet, Text, View,TouchableHighlight,TextInput } from "react-native";
import { f, auth, database } from "./config/config";
import { Facebook } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      loggedin:false
    };

    //this.registerUser('test@test.com','testtest');

    
    var that = this;
    console.log("constructor called");
    f.auth().onAuthStateChanged(user => {
      if (user) {
        //logged in
        that.setState({
          loggedin:true
        })
        console.log("logged in ", user);
      } else {
        //not logged in
        console.log("logged out");
      }
    });

  }

  loginUser = async(email,pass)=>{
    if(email!=''&& pass!=''){
      try{
        let user  = await auth.signInWithAndPassword(email,pass);
        console.log(user);

      }catch{err=>{
        console.log(err);
      }}
    }else{
      alert('Missing email or password');
    }

  }

  async loginWithFacebook() {
    
 
      try {
        const {
          type,
          token
        } = await Facebook.logInWithReadPermissionsAsync('2350407615241745', {
          permissions: ['email','public_profile'],
        });
        if (type === 'success') {
          const credentials = f.auth.FacebookAuthProvider.credential(token);
          f.auth().signInWithCredential(credentials)
            .catch(err=>{
              console.log(err);
            })
        } else {
          console.log("failure")
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    
  }

  registerUser = (email, password) => {
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => console.log(email, password, user))
      .catch(err => console.log(err));
  };
  signUserOut=()=>{
  auth.signOut()
      .then(()=>{
        console.log("logged out successfully")
      })
      .catch(err=>{
        console.log(err);
      })
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableHighlight
         onPress={()=>this.loginWithFacebook()}
         style={{backgroundColor:'green'}}>
          <Text style={{color:'white'}}>Login with Facebook</Text>
        </TouchableHighlight>
      </View>
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
