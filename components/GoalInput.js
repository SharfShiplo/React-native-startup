import { Button, Modal, StyleSheet, TextInput, Text, Pressable, View, } from 'react-native'
import React from 'react';
const GoalInput = (props) => {
    const { modalVisible, onTextChange, textValue, onAddToList, onModalClose } = props;

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput placeholder="Course Goal" style={styles.input} onChangeText={onTextChange} value={textValue} />
                    <View style={styles.buttonWrapper}>
                        <Pressable style={styles.cancelButton} onPress={onModalClose}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={onAddToList} >
                            <Text style={styles.textStyle}>Add</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        width: '90%',
        backgroundColor: "white",
        borderRadius: 8,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3
    },
    input: {
        width: "100%", borderColor: "rgba(62, 121, 247, .1)", borderWidth: 1, padding: 10,
    },
    buttonWrapper: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginHorizontal: 5,
        marginVertical: 10,
        textTransform: "capitalize",
        padding: 8,
        backgroundColor: "rgba(62, 121, 247, 1)",
        borderRadius: 4,
    },
    cancelButton: {
        marginVertical: 10,
        marginHorizontal: 5,
        textTransform: "capitalize",
        padding: 8,
        backgroundColor: "#111",
        borderRadius: 4,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})
