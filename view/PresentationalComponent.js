import React, { Component } from 'react';
import { Text, View } from 'react-native';

const PresentationalComponent = (props) => {
    return (
        <View>
            <Text onPress={props.updateStates}>
                {props.myStates}
            </Text>
            <Text onPress={props.updateState2}>
                {props.myState2}{props.myState2}
            </Text>
        </View>
    )
}
export default PresentationalComponent