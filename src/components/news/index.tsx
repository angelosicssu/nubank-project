import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function News() {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 20, paddingRight: 50 }}>
            <View style={styles.news}>

                <TouchableOpacity style={styles.containerNews}>
                    <Text style={styles.textNews}>
                        <Text style={styles.textColor}>Novidade!</Text> Conheça a ferramenta de Controle de Gastos da 
                        Nubank
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerNews}>
                    <Text style={styles.textNews}>
                        Novidade! Conheça a ferramenta de Controle de Gastos da 
                        Nubank
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerNews}>
                    <Text style={styles.textNews}>
                        Novidade! Conheça a ferramenta de Controle de Gastos da 
                        Nubank
                    </Text>
                </TouchableOpacity>

            </View>
        
        </ScrollView>
    )
}