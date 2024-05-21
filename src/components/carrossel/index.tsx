import React from "react";
import { ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF6 from 'react-native-vector-icons/FontAwesome6';
import Icons from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';

export function Carrossel(){
    return(

        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={ {marginLeft: 20, paddingRight: 50} }>
            <View style={styles.scrollView}>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.containerIcon}>
                        <Icons name="pix" size={30}/>
                    </TouchableOpacity>         
                    <Text style={styles.textOption}>Pix</Text>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.containerIcon}>
                        <IconF name="money-bill-alt" size={30}/>
                    </TouchableOpacity>         
                    <Text style={styles.textOption}>Pagar</Text>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.containerIcon}>
                        <IconF6 name="money-bill-trend-up" size={30}/>
                    </TouchableOpacity>         
                    <Text style={styles.textOption}>Empréstimo</Text>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.containerIcon}>
                        <IconF name="people-arrows" size={35}/>
                    </TouchableOpacity>         
                    <Text style={styles.textOption}>Transferir</Text>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.containerIcon}>
                        <IconF6 name="inbox" size={35}/>
                    </TouchableOpacity>         
                    <Text style={styles.textOption}>Depositar</Text>
                </View>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.containerIcon}>
                        <Icon name="cellphone" size={35}/>
                    </TouchableOpacity>         
                    <Text style={styles.textOption}>Recarregar</Text>
                </View>
                
            </View>
        </ScrollView>
    )
}