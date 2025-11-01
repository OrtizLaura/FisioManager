import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";

import { styles } from "./style";
import Logo from "../../assets/logo.png";
import { MaterialIcons, AntDesign, Octicons } from "@expo/vector-icons";
import { themes } from "../../global/themes";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {useNavigation, NavigationProp} from '@react-navigation/native';
import Register from "../register";

export default function Login() {

  const navigation = useNavigation<NavigationProp<any>>();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        Alert.alert("Atenção", "Informe os campos obrigatórios");
        setLoading(false);
        return;
      }

      navigation.reset({
        routes: [{name: "BottomRoutes"}]
       })

      setTimeout(() => {
        Alert.alert("Logado com sucesso");
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.texto}>Fisio App</Text>
      </View>

      <View style={styles.boxMid}>
        <Input
          value={email}
          onChangeText={setEmail}
          title="Endereço de email" 
          IconRight={MaterialIcons}
          iconRightName="email"
        />
        
        <Input
          value={password}
          onChangeText={setPassword}
          title="Senha" 
          IconRight={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={!showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <View style={styles.boxBotton}>
        <Button 
          text="Entrar"
          loading={loading}
          onPress={getLogin}  
        />
        
        <Text style={styles.textButton}>
          Não tem uma conta?{" "}
          <Text
            style={styles.textButtonCreate}
            onPress={() => navigation.navigate("Register")}
  >
    Crie agora
  </Text>
</Text>
      </View>
    </View>
  );
}