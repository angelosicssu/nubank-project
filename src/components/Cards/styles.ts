import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: '5%',
        backgroundColor: '#E1E2E6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20
    },
    iconText: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    money: {
        fontWeight: 'bold'
    }
})