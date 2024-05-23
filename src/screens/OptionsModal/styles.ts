import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 900, 
        flex: 1, 
        padding: '5%',
        gap: 30,
        paddingBottom: '20%'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader: {
        color: '#6F6F6F',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    containerInput: {
        borderColor: '#E1E2E6',
        borderWidth: 1,
        borderRadius: 10,
        padding: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    meAjuda: {
        gap: 30
    },
    textMeAjuda: {
        fontWeight: 'bold',
        fontSize: 17
    },
    containerMeAjuda: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    containerAvaliation: {
        alignItems: 'center',
        gap: 10
    },
    containerIcon: {
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#E1E2E6'
    },
    text: {
        color: '#810AD0',
        fontWeight: 'bold'
    },
    containerInformations: {
        justifyContent: 'center',
        paddingTop: '10%',
        gap: 20
    },
    informations: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    texts: {
        gap: 5
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    description: {
        color: '#A1A1A1'
    },
    divider: {
        height: 1,
        borderWidth: 1,
        borderColor: '#E1E2E6'
    },
    containerDefault: {
        paddingTop: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDefault: {
        fontWeight: 'bold',
        fontSize: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

})