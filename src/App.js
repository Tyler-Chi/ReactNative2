import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {

    //should do the initialization of firebase before the whole app renders.

    componentWillMount(){
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBvgijlMmMqrA_vQKzkeDfzuhAqhXDDZFw",
            authDomain: "authentication-db817.firebaseapp.com",
            databaseURL: "https://authentication-db817.firebaseio.com",
            projectId: "authentication-db817",
            storageBucket: "authentication-db817.appspot.com",
            messagingSenderId: "291791366392"
        };
        firebase.initializeApp(config);
    }

  

    render(){
        return (
            <View>

                <Header headerText = "Authentication" />

                <LoginForm />
            </View>
        );
    }
}


export default App;