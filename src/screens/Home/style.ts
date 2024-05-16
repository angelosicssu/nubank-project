import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    account: {
        backgroundColor: '#660EEB',
        padding: '3%',
        paddingTop: '10%',
        gap: 20
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2%'
    },
    iconProfile: {
        backgroundColor: '#6954DE',
        padding: '3%',
        borderRadius: 30
    },
    profileIcons: {
        flexDirection: 'row',
        gap: 15
    },
    textProfile: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    money: {
        paddingTop: '4%',
        paddingHorizontal: '5%',
        gap: 10
    },
    saldo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textSaldo: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    carrossel: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20
    }
})