import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    account: {
        backgroundColor: '#6954DE',
        padding: '3%',
        paddingTop: '12%',
        paddingBottom: '5%',
        gap: 10,
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
    textMoney: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    carrossel: {
        paddingTop: '7%'
    },
    news: {
        paddingTop: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    cards: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F1F5',
        width: '90%',
        padding: '5%',
        borderRadius: 20,
        gap: 20
    },
    textCards: {
        fontWeight: 'bold'
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#F0F1F5'
    },
    containerCreditCard: {

    },
    creditCard: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})