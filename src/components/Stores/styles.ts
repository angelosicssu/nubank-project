import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerMain: {
        gap: 10
    },
    container: {
        borderRadius: 20,
        padding: '2.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        width: '80%',
    },
    oferta: {
        fontWeight: 'bold'
    }
})