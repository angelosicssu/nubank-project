import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Carrossel } from "../../components/carrossel";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel';
import { News } from "../../components/news";

const data = [
    { name: 'bank' },
    { name: 'account' },
    { name: 'bank' },
    { name: 'account' },
]

export function Home() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.account}>
                <View style={styles.profile}>
                    <Icon name="account-outline" size={25} color={'#F0F1F5'} style={styles.iconProfile}/>
                    <View style={styles.profileIcons}>
                        <TouchableOpacity>
                            <Icon name="eye" size={25} color={'#F0F1F5'}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icon name="information-outline" size={25} color={'#F0F1F5'}/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Icon name="email-plus-outline" size={25} color={'#F0F1F5'}/>
                        </TouchableOpacity>
        
                    </View>
                </View>
                <Text style={styles.textProfile}>Olá, Ângelo</Text>
            </View>

            <View>
                <View style={styles.money}>
                    <View style={styles.saldo}>
                        <Text style={styles.textSaldo}>Conta</Text>
                        <TouchableOpacity>
                            <Icon name="arrow-right-thin" size={25} color={'#A1A1A1'}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textMoney}>R$ 1.356,98</Text>
                </View>

                
                <View style={styles.carrossel}>
                    <Carrossel/>
                </View>
                
                <View style={styles.news}>
                    <TouchableOpacity style={styles.cards}>
                        <IconF name="credit-card" size={30}/>
                        <Text style={styles.textCards}>Meus cartões</Text>
                    </TouchableOpacity>

                    <News/>      

                    <View style={styles.divider} />                  
                    
                </View>

                <View style={styles.containerCreditCard}>
                    <View style={styles.creditCard}>
                        <Text>Cartão de Crédito</Text>
                        <Icon name="arrow-right-thin" size={25} color={'#A1A1A1'}/>
                    </View>

                    <Text>Mais textos</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}