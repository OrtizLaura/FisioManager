import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { MaterialIcons, Octicons, AntDesign } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import Logo from "../../assets/logo.png";
import { styles } from "./styles";
import { themes } from "../../global/themes";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Register() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  function isValidEmail(value: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(value).toLowerCase());
  }

  async function onRegister() {
    try {
      setLoading(true);

      if (!fullName || !email || !password || !confirm) {
        Alert.alert("Atenção", "Preencha todos os campos obrigatórios.");
        return;
      }
      if (!isValidEmail(email)) {
        Alert.alert("Atenção", "Informe um e-mail válido.");
        return;
      }
      if (password.length < 6) {
        Alert.alert("Atenção", "A senha deve ter pelo menos 6 caracteres.");
        return;
      }
      if (password !== confirm) {
        Alert.alert("Atenção", "As senhas não coincidem.");
        return;
      }

      setTimeout(() => {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.reset({
          index: 0,
          routes: [{ name: "BottomRoutes" }],
        });
      }, 1500);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Ocorreu um erro ao realizar o cadastro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function goToLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.texto}>Fisio App</Text>
        <Text style={[styles.subtitulo, { color: themes.colors.secundary }]}>
          Crie sua conta
        </Text>
      </View>

      <View style={styles.boxMid}>
        <Input
          value={fullName}
          onChangeText={setFullName}
          title="Nome completo"
          IconRight={AntDesign}
          iconRightName="user"
        />

        <Input
          value={email}
          onChangeText={setEmail}
          title="Endereço de email"
          keyboardType="email-address"
          autoCapitalize="none"
          IconRight={MaterialIcons}
          iconRightName="email"
        />

        <Input
          value={password}
          onChangeText={setPassword}
          title="Senha"
          secureTextEntry={!showPassword}
          IconRight={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          onIconRightPress={() => setShowPassword((p) => !p)}
        />

        <Input
          value={confirm}
          onChangeText={setConfirm}
          title="Confirmar senha"
          secureTextEntry={!showConfirm}
          IconRight={Octicons}
          iconRightName={showConfirm ? "eye-closed" : "eye"}
          onIconRightPress={() => setShowConfirm((p) => !p)}
        />

        <View style={styles.buttonWrapper}>
          <Button text="Criar conta" loading={loading} onPress={onRegister} />
        </View>
      </View>
      
    </View>
  );
}