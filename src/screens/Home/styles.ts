import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        gap: 15
    },
    saldo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textSaldo: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    secretMoney: {
        flexDirection: 'row',
        gap: 5
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
        backgroundColor: '#E1E2E6',
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
        backgroundColor: '#E1E2E6'
    },
    containerCreditCard: {
        padding: '5%',
        gap: 10
    },
    creditCard: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textCreditCard: {
        fontWeight: 'bold',
        fontSize: 18
    },
    containerFatura: {
        gap: 10,
        paddingTop: '4%',
        paddingBottom: '3%'
    },
    fatura: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    textFatura: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16
    },
    moneyFatura: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonParcelar: {
        backgroundColor: '#E1E2E6',
        width: 170,
        padding: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textButtonParcelar: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
    containerPagamentos: {
        padding: '5%',
        gap: 20,
    },
    textPagamentos: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    buttonPagamentos: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E1E2E6',
        padding: '5%',
        borderRadius: 20,
        gap: 10
    },
    textButtonPagamentos: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})