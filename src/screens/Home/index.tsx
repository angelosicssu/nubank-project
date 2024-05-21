import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Carrossel } from "../../components/carrossel";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { News } from "../../components/news";

export function Home() {

    const [clicked, setCliked] = useState(false);
    const [click, setClick] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.account}>
                    <View style={styles.profile}>
                        <Icon name="account-outline" size={25} color={'#F0F1F5'} style={styles.iconProfile}/>
                        <View style={styles.profileIcons}>
                            <TouchableOpacity onPress={() => setCliked(!clicked)}>
                                { clicked ? (
                                    <Icon name="eye" size={25} color={'#F0F1F5'}/>
                                ) : (
                                    <Icon name="eye-off" size={25} color={'#F0F1F5'}/>
                                )

                                }
                                
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
                                <MaterialIcons name="arrow-forward-ios" size={20} color={'#A1A1A1'} />
                            </TouchableOpacity>
                        </View>
                        { clicked ? (
                            <Text style={styles.textMoney}>R$ 1.356,98</Text>
                        ) : (
                            <View style={styles.secretMoney}>
                                <IconF name="circle" size={10} />
                                <IconF name="circle" size={10} />
                                <IconF name="circle" size={10} />
                                <IconF name="circle" size={10} />
                            </View>
                        )
                        }
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
                            <Text style={styles.textCreditCard}>Cartão de Crédito</Text>
                            <MaterialIcons name="arrow-forward-ios" size={20} color={'#A1A1A1'} />
                        </View>

                        <View style={styles.containerFatura}>
                            <View style={styles.fatura}>
                                <Text style={styles.textFatura}>Fatura Atual</Text>
                                <TouchableOpacity onPress={() => setClick(!click)}>
                                    { click ? (
                                        <Icon name="eye" size={20} color={'#A1A1A1'}/>
                                    ) : (
                                        <Icon name="eye-off" size={20} color={'#A1A1A1'}/>
                                    )
                                    }
                                </TouchableOpacity>
                            </View>
                            { click ? (
                                <Text style={styles.moneyFatura}>R$ 1300</Text>
                            ) : (
                                <View style={styles.secretMoney}>
                                    <IconF name="circle" size={10} />
                                    <IconF name="circle" size={10} />
                                    <IconF name="circle" size={10} />
                                    <IconF name="circle" size={10} />
                                </View>
                            )
                            }
                        </View>

                        <TouchableOpacity style={styles.buttonParcelar}>
                            <Text style={styles.textButtonParcelar}>Parcelar Compras</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.containerPagamentos}>
                        <Text style={styles.textPagamentos}>Acompanhe também</Text>
                        <TouchableOpacity style={styles.buttonPagamentos}>
                            <MaterialIcons name="attach-money" size={30}/>
                            <Text style={styles.textButtonPagamentos}>Assistente de Pagamentos</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}