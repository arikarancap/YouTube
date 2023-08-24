import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';
import Foundation from 'react-native-vector-icons/Foundation';

const ActionListItem = ({ iconName, color, likes ,Icon}) => {
    return (
        <View style={styles.actionListItem}>
            <Icon name={iconName} color={color} size={30} />
            <Text style={styles.actionText} >{likes}</Text>
        </View>


    )
}

export default ActionListItem;

const styles = StyleSheet.create({
    actionListContainer: {
        flexDirection: 'row'
    },
    actionListItem: {
        width: 70,
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        // flexDirection: 'row-reverse'
    },
    actionText: {
        color: COLORS.white
    }
})