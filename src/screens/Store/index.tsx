import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import { Offers } from "../../components/Offers";
import { Stores } from "../../components/Stores";

export function Store() {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>

                <View style={styles.account}>
                    <View style={styles.profile}>
                        <Icon name="account-outline" size={25} color={'#F0F1F5'} style={styles.iconProfile}/>
                        <View style={styles.profileIcons}>
                            <TouchableOpacity>
                                <Icon name="information-outline" size={25} color={'#F0F1F5'}/>
                            </TouchableOpacity>
                                    
                            <TouchableOpacity>
                                <Icon name="email-plus-outline" size={25} color={'#F0F1F5'}/>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View style={styles.containerOffers}>
                    <View style={styles.offers}>
                        <Text style={styles.textOffers}>Destaques</Text>
                    </View>
                    <View>
                        <Offers />
                    </View>
                </View>

                <View style={styles.containerStores}>
                    <Text style={styles.store}>Tem de tudo</Text>
                    <View style={styles.subContainerStores}>
                        <Stores />
                    </View>
                </View>

            </SafeAreaView>
        </ScrollView>
    )
}