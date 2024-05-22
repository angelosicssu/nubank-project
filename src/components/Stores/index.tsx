import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Stores() {
    return(
        <View style={styles.containerMain}>
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Image style={styles.logo} source={require('../../assets/StoresImage/s.png')} />
                        <View>
                            <Text style={styles.title}>Shopee</Text>
                            <Text style={styles.text}>Cupom para compras acima de R$40.</Text>
                        </View>
                    </View>
                    <Text style={styles.oferta}>R$10 OFF</Text>    
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Image style={styles.logo} source={require('../../assets/StoresImage/maga.png')} />
                        <View>
                            <Text style={styles.title}>Magazine Luiza</Text>
                            <Text style={styles.text}>Cupom para compras acima de R$90.</Text>
                        </View>
                    </View>
                    <Text style={styles.oferta}>R$20 OFF</Text>    
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Image style={styles.logo} source={require('../../assets/StoresImage/am.png')} />
                        <View>
                            <Text style={styles.title}>Amazon</Text>
                            <Text style={styles.text}>Cupom para compras acima de R$20.</Text>
                        </View>
                    </View>
                    <Text style={styles.oferta}>R$50 OFF</Text>    
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Image style={styles.logo} source={require('../../assets/StoresImage/al.png')} />
                        <View>
                            <Text style={styles.title}>Aliexpress</Text>
                            <Text style={styles.text}>Cupom para compras acima de R$10.</Text>
                        </View>
                    </View>
                    <Text style={styles.oferta}>R$50 OFF</Text>    
                </View>
            </TouchableOpacity>

            
        </View>

        

        
        
    )
}