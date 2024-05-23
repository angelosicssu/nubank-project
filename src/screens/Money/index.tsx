import React, { useRef } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "../Money/styles";
import { Cards } from "../../components/Cards";
import { Modalize } from "react-native-modalize";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { OptionsModal } from "../OptionsModal";

export function Money() {
    const modalizeRef = useRef<Modalize>(null);

    function onOpen() {
        modalizeRef.current?.open()
    }

    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.account}>
                    <View style={styles.profile}>
                        <Icon name="account-outline" size={25} color={'#F0F1F5'} style={styles.iconProfile}/>
                        <View style={styles.profileIcons}>

                            <TouchableOpacity>
                                <Icon name="eye" size={25} color={'#F0F1F5'}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onOpen}>
                                <Icon name="information-outline" size={25} color={'#F0F1F5'}/>
                            </TouchableOpacity>
                                    
                            <TouchableOpacity>
                                <Icon name="email-plus-outline" size={25} color={'#F0F1F5'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.acompanheMoney}>
                        <Text style={styles.acompanheText}>Acompanhe seu dinheiro</Text>
                        <View style={styles.cards}>
                            <Cards iconName="storefront" text="Caixinhas" value="R$ 100,00"/>
                            <Cards iconName="signal-cellular-alt" text="Investimentos" value="R$ 317,94"/>
                            <Cards iconName="ssid-chart" text="Cripto" value="R$ 758,90"/>
                        </View>

                        <View style={styles.divider} />

                        <Text style={styles.acompanheText}>Seguros</Text>
                        <View style={styles.cards}>
                            <Cards iconName="health-and-safety" text="Seguro de Vida"/>
                            <Cards iconName="charging-station" text="Seguro de Celular"/>
                        </View>
                    </View>
                </ScrollView>

                <Modalize ref={modalizeRef} snapPoint={1500} adjustToContentHeight>
                    <OptionsModal />
                </Modalize>
                
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}
