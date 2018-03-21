import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection , Input , Spinner } from './common';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            error: '',
            loading: false
        }
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress(){

        const { email, password } = this.state;

        this.setState({error: '' , loading: true});
        
        //this is a promise. so adding .catch catches an error signing the user in
        firebase.auth().signInWithEmailAndPassword(email,password)
            .catch(()=>
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(()=> {
                    this.setState({error: 'Authentication Failed'})
                })
            )
    }

    renderButton(){
        if (this.state.loading){
            return <Spinner size = "small" />;
        } else {
            return (
                <Button onPress={this.onButtonPress} >
                    Log In
                </Button>
            )
        }
    }


    render(){

        console.log('render is being run');
        
        return (
            <Card>
                <CardSection>
                    <Input
                    secureTextEntry = {false}
                    placeholder="yourname@email.com" 
                    label="Email"
                    value= {this.state.email}
                    onChangeText={email=> this.setState({email})}
                     />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry = { true }
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}

                    />
                </CardSection>

                <Text style = {styles.errorTextStyle}>
                    {this.state.error}
                </Text>


                <CardSection>
                   {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;