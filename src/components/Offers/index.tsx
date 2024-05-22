import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Offers() {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={ {marginLeft: 20, paddingRight: 50} }>
            <View style={{ gap: 10, flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={styles.containerA}>
                        <View>
                            <Image style={styles.image} source={require('../../assets/OffersImage/realMadrid.jpg')} />
                        </View>
                        <View style={styles.subContainer}>
                            <View>
                                <View style={styles.detailsLogoAdidas}>
                                    <Image style={styles.logoAdidas} source={require('../../assets/OffersImage/logoAdidas.png')}/>
                                </View>
                                <Text style={styles.textOfert}>15% OFF</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.title}>Novidas no Nubank</Text>
                                <Text style={styles.textMain}>Lançamento dos tops esportivos do Real Madrid!</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={styles.containerP}>
                        <View>
                            <Image style={styles.image} source={require('../../assets/OffersImage/horizon.jpg')} />
                        </View>
                        <View style={styles.subContainer}>
                            <View>
                                <View style={styles.detailsLogoPlaystation}>
                                    <Image style={styles.logoPlaystation} source={require('../../assets/OffersImage/playstationOriginal.png')}/>
                                </View>
                                <Text style={styles.textOfert}>20% OFF</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.titlePlaystation}>Somente no nubank!</Text>
                                <Text style={styles.textMain}>Lançamento dos melhores jogos da Playstation</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={styles.containerX}>
                        <View>
                            <Image style={styles.image} source={require('../../assets/OffersImage/halo.jpg')} />
                        </View>
                        <View style={styles.subContainer}>
                            <View>
                                <View style={styles.detailsLogoXbox}>
                                    <Image style={styles.logoXbox} source={require('../../assets/OffersImage/xbox.png')}/>
                                </View>
                                <Text style={styles.textOfert}>15% OFF</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.titleXbox}>Novidas no Nubank</Text>
                                <Text style={styles.textMainXbox}>Lançamento dos tops esportivos do Real Madrid!</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </View>
            
        </ScrollView>

        

    )
}