import React, { useState, useMemo, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { Flag } from "../../components/Flag";
import { themes } from "../../global/themes";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { usePatients, Patient } from "../../context/PatientsContext";

const Ball = ({ color, onPress }: { color: string; onPress?: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: color,
      }}
    />
  );
};

export default function List() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { patients, togglePresence } = usePatients();

  const [search, setSearch] = useState("");
  const searchInputRef = useRef<TextInput | null>(null);

  const goToPatientRegister = () => {
    navigation.navigate("PatientRegister");
  };

  function getStatusColor(status: Patient["status"]) {
    switch (status) {
      case "present":
        return "green";
      case "absent":
        return "red";
      default:
        return "gray";
    }
  }

  const filteredPatients = useMemo(() => {
    const text = search.trim().toLowerCase();
    if (!text) return patients;
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(text) ||
        (p.observation || "").toLowerCase().includes(text)
    );
  }, [patients, search]);

  const renderCard = (item: Patient) => {
    const isFisio = item.treatment === "fisioterapia";

    return (
      <TouchableOpacity style={style.card} activeOpacity={0.8}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            <Ball
              color={getStatusColor(item.status)}
              onPress={() => togglePresence(item.id)}
            />

            <View>
              <Text style={style.titleCard}>{item.name}</Text>
              <Text style={style.descriptionCard}>
                {item.observation || "Sem observações"}
              </Text>
            </View>
          </View>

          {isFisio ? (
            <Flag caption="Fisio" color={themes.colors.red} />
          ) : (
            <Flag caption="Pilates" color={themes.colors.greenLigth} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.greeting}>Seja bem vinda (o)!</Text>
        <View style={style.boxInput}>
          <Input
            ref={searchInputRef}
            IconLeft={MaterialIcons}
            IconLeftName="search"
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar paciente..."
            onIconLeftPress={() => {
              searchInputRef.current?.focus();
              setSearch((prev) => prev.trim());
            }}
          />
        </View>
      </View>

      <View style={style.boxList}>
        <FlatList
          data={filteredPatients}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderCard(item)}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              {search
                ? "Nenhum paciente encontrado para essa busca."
                : "Nenhum paciente cadastrado ainda."}
            </Text>
          }
        />
      </View>

      <View style={style.footer}>
        <TouchableOpacity
          style={style.newPatientButton}
          onPress={goToPatientRegister}
          activeOpacity={0.8}
        >
          <Text style={style.newPatientButtonText}>Novo paciente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
