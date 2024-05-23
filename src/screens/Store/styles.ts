import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        paddingBottom: 100
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
    containerOffers: {
        gap: 20
    },
    offers: {
        paddingHorizontal: '5%',
        paddingTop: '3%'
    },
    textOffers: {
        fontWeight: 'bold',
        fontSize: 18
    },
    containerStores: {
        gap: 20  
    },
    subContainerStores: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    store: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 20
    }
})