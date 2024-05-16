import React from "react";
import { View } from 'react-native'
import { styles } from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type GreetProps = {
    name: string
}

export function Carrossel( props: GreetProps ){
    return(
        <View>
            <Icon name={props.name} size={30} style={styles.icon}/>
        </View>
    )
}