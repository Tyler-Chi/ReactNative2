import React from 'react';
import { Text , TouchableOpacity } from 'react-native';

const Button = (props) => {

    const { buttonStyle , textStyle } = styles;

    console.log('button information is', props.info);
    

    return (
        <TouchableOpacity 
            style={buttonStyle}
            onPress={props.onPress}
            >
            <Text 
                style={textStyle}
            > 
                {props.info.title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderCOlor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export { Button };