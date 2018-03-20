import React, { Component } from 'react';
import { Button, Card, CardSection , Input } from './common';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {text : ''}
    }


    render(){

        console.log('render is being run');
        
        return (
            <Card>
                <CardSection>
                    <Input 
                    label={'email'}
                    value= {this.state.text}
                    onChangeText={text=> this.setState({text})}
                     />
                </CardSection>

                <CardSection />


                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;