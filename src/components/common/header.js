

//Import libraries for making a component
import React from 'react';
import { Text , View } from 'react-native';
import axios from 'axios';

//define the styling


// Make a component
const Header = (props1) => {

    const { textStyle , viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props1.headerText} </Text>
        </View>
    );
}

//the styles is basically one big object

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        marginTop: 16,
        paddingBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
}



// Make the component available to other parts of the app

export default Header;