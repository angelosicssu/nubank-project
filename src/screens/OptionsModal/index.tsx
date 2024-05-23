import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons'
import { styles } from "./styles";
import { useState } from "react";

export function OptionsModal() {

    const [inputText, setInputText] = useState("")
    const [value, setValue] = useState<boolean>(false);

    const handleValue = (text: string) => {
        setInputText(text); 
        setValue(text.length > 0);
    }

    const renderInformation = () => {
        const lowercasedInput = inputText.toLowerCase();
        if(lowercasedInput.includes("novidades")) {
            return(
                <View style={styles.containerInformations}> 
                    <View style={styles.informations}>
                        <View style={styles.texts}>
                            <Text style={styles.title}>Novidades</Text>
                            <Text style={styles.description}>Tudo sobre o Nubank e nossos produtos.</Text>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={20} color={'#A1A1A1'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        if(lowercasedInput.includes("conta")) {
            return(
                <View style={styles.containerInformations}> 
                    <View style={styles.informations}>
                        <View style={styles.texts}>
                            <Text style={styles.title}>Conta</Text>
                            <Text style={styles.description}>Conheça tudo sobre a sua conta digital.</Text>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={20} color={'#A1A1A1'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        if(lowercasedInput.includes("pagar fatura")) {
            return(
                <View style={styles.containerInformations}> 
                    <View style={styles.informations}>
                        <View style={styles.texts}>
                            <Text style={styles.title}>Pagar Fatura</Text>
                            <Text style={styles.description}>Descubra como e onde pagar a sua fatura.</Text>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-forward-ios" size={20} color={'#A1A1A1'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        else {
            return(
                <View style={styles.containerDefault}>
                    <Text style={styles.textDefault}>Nenhum resultado encontrado</Text>
                </View>
            )
        }
            
        }

    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Me Ajuda</Text>
            </View>
            
            <View style={styles.containerInput}>
                <TextInput
                placeholder="Qual é a sua dúvida?"
                value={inputText}
                onChangeText={handleValue}
                style={{ width: '70%' }}
                />
                <IconE name="magnifying-glass" size={30}/>
            </View>

            <View style={styles.meAjuda}>
                <Text style={styles.textMeAjuda}>Como você avalia o "Me Ajuda"?</Text>
                <View style={styles.containerMeAjuda}>
                    <TouchableOpacity style={styles.containerAvaliation}>
                        <View style={styles.containerIcon}>
                            <Octicons style={{ padding: '5%' }} name="alert" size={30} color={'#810AD0'}/>
                        </View>
                        <Text style={styles.text}>Péssimo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerAvaliation}>
                        <View style={styles.containerIcon}>
                            <IconE style={{ padding: '5%' }} name="emoji-sad" size={30} color={'#810AD0'}/>
                        </View>
                        <Text style={styles.text}>Ruim</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerAvaliation}>
                        <View style={styles.containerIcon}>
                            <IconE style={{ padding: '5%' }} name="emoji-happy" size={30} color={'#810AD0'}/>
                        </View>
                        <Text style={styles.text}>Bom</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerAvaliation}>
                        <View style={styles.containerIcon}>
                            <IconE style={{ padding: '5%' }} name="heart-outlined" size={30} color={'#810AD0'}/>
                        </View>
                        <Text style={styles.text}>Perfeito</Text>
                    </TouchableOpacity>

                </View>
            </View>


            { !value ? (
                <View style={styles.containerInformations}> 
                <View style={styles.informations}>
                    <View style={styles.texts}>
                        <Text style={styles.title}>Novidades</Text>
                        <Text style={styles.description}>Tudo sobre o Nubank e nossos produtos.</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="arrow-forward-ios" size={20} color={'#A1A1A1'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider}/>

                <View style={styles.informations}>
                    <View style={styles.texts}>
                        <Text style={styles.title}>Conta</Text>
                        <Text style={styles.description}>Conheça tudo sobre a sua conta digital.</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="arrow-forward-ios" size={20} color={'#A1A1A1'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider}/>

                <View style={styles.informations}>
                    <View style={styles.texts}>
                        <Text style={styles.title}>Pagar Fatura</Text>
                        <Text style={styles.description}>Descubra como e onde pagar a sua fatura.</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="arrow-forward-ios" size={20} color={'#A1A1A1'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider}/>
            </View>
            ): (
                <View>
                    {renderInformation()}
                </View>
            )
            }

            <View style={styles.buttons}>
                <TouchableOpacity>
                    <Text style={[styles.text, {fontSize: 18}]}>Email</Text>
                </TouchableOpacity>
                <View style={{ height: 30, width: 1, borderWidth: 1, borderColor: '#A1A1A1' }}/>
                <TouchableOpacity>
                    <Text style={[styles.text, {fontSize: 18}]}>Chat</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>

    )
}