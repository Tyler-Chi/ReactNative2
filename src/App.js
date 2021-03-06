import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header , Button, Spinner} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'


class App extends Component {

    state = {loggedIn : null}

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

        firebase.auth().onAuthStateChanged((user)=>{
            if (user){
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent(){

        switch(this.state.loggedIn){
            case true:
                return <Button
                    onPress = {()=> firebase.auth().signOut()}
                > Log Out </Button>
            case false:
                return <LoginForm />;
            default: 
                return <Spinner size="large" />
        }

       

    }
  

    render(){
        return (
            <View>

                <Header headerText = "Authentication" />

                {this.renderContent()}
            </View>
        );
    }
}


export default App;