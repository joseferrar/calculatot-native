import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calculator } from 'react-native-calculator'

const CalModal = (props) => {
    const {
        value,
        setValue,
        modal,
        setModal
    } = props;
    return (
        <View style={styles.modalContainer}>
            <View style={styles.closeText}>
                <Text style={{ fontSize: 30, color: '#fff', textAlign: "center" }} onPress={() => setModal(!modal)}>X</Text>
            </View>

            <Calculator style={{ width: 300, height: 400 }}
                value={value}
                onTextChange={(e) => setValue(e)}
                displayHeight={60}
                displayTextAlign="center"
                width={300}
                onCalc={() => setModal(!modal)}
            />
        </View>
    )
}

export default CalModal

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 50
    },
    closeText: {
        fontSize: 30,
        color: "#fff",
        backgroundColor: 'green',
        width: 50,
        marginLeft: "auto",
        borderRadius: 60,
        marginRight: -12,
        marginBottom: 4
    }
})