import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {

    test(){
        console.log('hello world');
        
    }

    render(){
        return (
            <View style = {styles.try}>
                <Text onPress={this.test}> An app </Text>
            </View>
        );
    }
}

const styles = {
    try: {
        marginTop: 30
    }
}

export default App;