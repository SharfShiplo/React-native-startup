import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
const ListItem = ({ title, onDelete }) => {
    return (
        <TouchableOpacity onPress={onDelete} >
            <View style={styles.listItem} >
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "rgba(62, 121, 247, .1)",
        borderColor: "rgba(62, 121, 247, .1)",
        borderWidth: 1,
    }
})