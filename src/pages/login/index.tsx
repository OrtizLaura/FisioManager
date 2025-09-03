import React, { useState } from "react";
import {Text, View, Image, TextInput, Touchable, TouchableOpacity, Alert, ActivityIndicatorComponent, ActivityIndicator} from 'react-native'

import { styles } from "./style";
import Logo from '../../assets/logo.png'
import {MaterialIcons, AntDesign} from '@expo/vector-icons';
import { themes } from "../../global/themes";



export default function Login () {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)


    async function getLogin() {
          try {
            setLoading(true);

            if (!email || !password) {
            Alert.alert('Atenção', 'Informe os campos obrigatórios');
            alert('Informe os campos obrigatórios')
            setLoading(false);
            return;
            }

            setTimeout(() => {
            Alert.alert('Logado com sucesso');
            alert('Logado com sucesso')
            setLoading(false);
            }, 3000);

        } catch (error) {
            console.log(error);
            setLoading(false); // só cai aqui se der erro
        }
        }



    return (
        <View style = {styles.container}>
            <View style = {styles.boxTop}>
                <Image source={Logo}
                style = {styles.logo}
                resizeMode="contain"/>
                    <Text style = {styles.texto}>Fisio App</Text>
                
            </View>


            <View style = {styles.boxMid}>
                <Text style={styles.titleInput}>Endereço de E-mail</Text>
                <View style={styles.boxInput}>
                <TextInput style={styles.input} value={email} onChangeText={(e)=>setEmail(e)}/>
                <MaterialIcons 
                    name='email'
                    size={20}
                    color={'gray'}/>
                </View>
                <Text style={styles.titleInput}>Senha</Text>
                    <View style={styles.boxInput}>
               <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
                <MaterialIcons 
                    name='remove-red-eye'
                    size={20}
                    color={'gray'}/>
                </View>

            </View>


            <View style = {styles.boxBotton}>
                <TouchableOpacity style={styles.botton} onPress={()=>getLogin()}>
                    {loading?<ActivityIndicator color={'#fff'} size={"small"}/>:< Text style ={styles.textBotton}>Entrar</Text>}

                </TouchableOpacity>
            <Text style={styles.textButon}>Não possui conta? <Text style ={{color:themes.colors.secundary}}>Crie agora!</Text></Text>

            </View>

        </View>
    )
}