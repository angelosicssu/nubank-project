import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from "./styles";

interface propsCards {
    iconName: string,
    text: string,
    value?: string
}

export function Cards( { iconName, text, value } : propsCards ) {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconText}>
                <Icon name={iconName} size={30}/>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Text style={styles.money}>{value}</Text>
        </TouchableOpacity>
    )
}