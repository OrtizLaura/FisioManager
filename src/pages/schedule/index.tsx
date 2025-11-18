import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { themes } from "../../global/themes";
import { log } from "console";

type User = { id: string; fullName: string };
type Patient = { id: string; name: string; treatment: string };
type AvailableDate = { id: string; date: string };

const availableTimes = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

export default function ScheduleSession() {
  const [users, setUsers] = useState<User[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([]);

  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [selectedPatientId, setSelectedPatientId] = useState<string>("");
  const [selectedAvailableDateId, setSelectedAvailableDateId] =
    useState<string>("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [treatment, setTreatment] = useState<string>("");
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => Alert.alert("Erro", "Não foi possível carregar usuários"));

    fetch("http://localhost:3000/patients")
      .then((res) => res.json())
      .then(setPatients)
      .catch(() => Alert.alert("Erro", "Não foi possível carregar pacientes"));

    fetch("http://localhost:3000/available-dates")
      .then((res) => res.json())
      .then(setAvailableDates)
      .catch(() =>
        Alert.alert("Erro", "Não foi possível carregar datas disponíveis")
      );
  }, []);

  function toggleTime(time: string) {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter((t) => t !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  }

  function handlePatientChange(patientId: string) {
    setSelectedPatientId(patientId);
    const patient = patients.find((p) => p.id === patientId);
    console.log(patient);
    if (patient) {
      setSelectedTreatment(patient.treatment);
    } else {
      setSelectedTreatment("");
    }
  }

  function submit() {
    if (
      !selectedUserId ||
      !selectedPatientId ||
      !selectedAvailableDateId ||
      selectedTimes.length === 0
    ) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos e selecione pelo menos um horário."
      );
      return;
    }

    setLoading(true);

    fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: selectedUserId,
        patientId: selectedPatientId,
        treatment: selectedTreatment,
        availableDateId: selectedAvailableDateId,
        times: selectedTimes,
        status: "NONE",
      }),
    })
      .then((res) => {
        if (res.ok) {
          Alert.alert("Sucesso", "Sessões agendadas com sucesso!");
          setSelectedTimes([]);
          setTreatment("");
          setSelectedUserId("");
          setSelectedPatientId("");
          setSelectedAvailableDateId("");
        } else {
          Alert.alert("Erro", "Falha ao agendar sessões.");
        }
      })
      .catch(() => Alert.alert("Erro", "Erro na comunicação com o servidor"))
      .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Usuário</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedUserId}
          onValueChange={setSelectedUserId}
          dropdownIconColor={themes.colors.primary}
          style={styles.picker}
        >
          <Picker.Item label="Selecione um usuário" value="" />
          {users.map((u) => (
            <Picker.Item key={u.id} label={u.fullName} value={u.id} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Paciente</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedPatientId}
          onValueChange={handlePatientChange}
          dropdownIconColor={themes.colors.primary}
          style={styles.picker}
        >
          <Picker.Item label="Selecione um paciente" value="" />
          {patients.map((p) => (
            <Picker.Item key={p.id} label={p.name} value={p.id} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Data Disponível</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedAvailableDateId}
          onValueChange={setSelectedAvailableDateId}
          dropdownIconColor={themes.colors.primary}
          style={styles.picker}
        >
          <Picker.Item label="Selecione uma data" value="" />
          {availableDates.map((d) => (
            <Picker.Item
              key={d.id}
              label={new Date(d.date).toLocaleDateString()}
              value={d.id}
            />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Horários</Text>
      {availableTimes.map((time) => {
        const selected = selectedTimes.includes(time);
        return (
          <TouchableOpacity
            key={time}
            onPress={() => toggleTime(time)}
            style={[styles.timeItem, selected && styles.timeItemSelected]}
          >
            <Text
              style={[
                styles.timeItemText,
                selected && styles.timeItemTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        );
      })}

      <View style={styles.buttonWrapper}>
        <Button title="Agendar" onPress={submit} disabled={loading} />
      </View>
    </View>
  );
}
