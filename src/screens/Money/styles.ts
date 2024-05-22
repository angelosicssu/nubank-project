import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    acompanheMoney: {
        paddingHorizontal: '5%',
        paddingTop: '5%',
        gap: 20
    },
    acompanheText: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    cards: {
        gap: 15
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#E1E2E6'
    },
})