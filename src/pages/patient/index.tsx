import React, { useState } from "react";
import { View, Text, Alert, Image, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { themes } from "../../global/themes";
import Logo from "../../assets/logo.png";

export default function PatientRegister() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState("");
  const [treatment, setTreatment] = useState("");
  const [observation, setObservation] = useState("");
  const [loading, setLoading] = useState(false);

  function onRegister() {
    if (!name || !treatment) {
      Alert.alert("Atenção", "Por favor, preencha os campos obrigatórios.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      Alert.alert("Sucesso", `Paciente ${name} cadastrado com sucesso!`);
     
      setLoading(false);
      navigation.goBack(); // volta para tela anterior
    }, 1200);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.texto}>Cadastro de Pacientes</Text>
      </View>

     
      <View style={styles.boxMid}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome do paciente</Text>
          <TextInput
            placeholder="Digite o nome completo"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Tipo de tratamento</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={treatment}
              onValueChange={(value) => setTreatment(value)}
              dropdownIconColor={themes.colors.primary}
              style={styles.picker}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Fisioterapia" value="fisioterapia" />
              <Picker.Item label="Pilates" value="pilates" />
            </Picker>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Observações</Text>
          <TextInput
            placeholder="Escreva observações, se desejar..."
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={observation}
            onChangeText={setObservation}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button text="Cadastrar Paciente" loading={loading} onPress={onRegister} />
        </View>
      </View>
    </View>
  );
}