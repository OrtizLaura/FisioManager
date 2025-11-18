import React, { useState, useEffect } from "react";
import { View, Text, Alert, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";
import { themes } from "../../global/themes";
import Logo from "../../assets/logo.png";
import { Button } from "../../components/Button";
import { usePatients } from "../../context/PatientsContext";
import { useSchedule, TreatmentType } from "../../context/ScheduleContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTherapistSchedule } from "../../context/TherapistScheduleContext";

function toISO(date: Date) {
  return date.toISOString().slice(0, 10);
}

export default function NewAppointmentScreen() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { patients } = usePatients();
  const { addSession } = useSchedule();
  const { isDateAvailable } = useTherapistSchedule();

  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    null
  );
  const [treatmentType, setTreatmentType] = useState<TreatmentType | "">("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onTimeChange = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  function handleAddAppointment() {
    console.log("asdasd");
    if (!selectedPatientId || !treatmentType) {
      Alert.alert(
        "Atenção",
        "Por favor, selecione o paciente e o tipo de tratamento."
      );
      return;
    }

    const patient = patients.find((p) => p.id === selectedPatientId);
    if (!patient) {
      Alert.alert("Erro", "Paciente não encontrado.");
      return;
    }

    const formattedDate = toISO(date);
    const formattedTime = time.toTimeString().slice(0, 5);

    setLoading(true);

    addSession({
      patientId: patient.id,
      patientName: patient.name,
      treatment: treatmentType as TreatmentType,
      date: formattedDate,
      time: formattedTime,
    });

    setTimeout(() => {
      Alert.alert("Sucesso", `Agendamento para ${patient.name} adicionado!`);
      setLoading(false);
      navigation.goBack();
    }, 800);
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.texto}>Novo Agendamento</Text>
      </View>

      <View style={styles.boxMid}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Paciente</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedPatientId}
              onValueChange={(itemValue) => setSelectedPatientId(itemValue)}
              dropdownIconColor={themes.colors.primary}
              style={styles.picker}
            >
              <Picker.Item label="Selecione um paciente" value={null} />
              {patients.map((p) => (
                <Picker.Item key={p.id} label={p.name} value={p.id} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Tipo de tratamento</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={treatmentType}
              onValueChange={(itemValue) =>
                setTreatmentType(itemValue as TreatmentType | "")
              }
              dropdownIconColor={themes.colors.primary}
              style={styles.picker}
            >
              <Picker.Item label="Selecione o tratamento" value="" />
              <Picker.Item label="Fisioterapia" value="fisioterapia" />
              <Picker.Item label="Pilates" value="pilates" />
            </Picker>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Data</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.dateInput}
          >
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Hora</Text>
          <TouchableOpacity
            onPress={() => setShowTimePicker(true)}
            style={styles.dateInput}
          >
            <Text>
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={onTimeChange}
            />
          )}
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            text="Agendar Sessão"
            loading={loading}
            onPress={handleAddAppointment}
          />
        </View>
      </View>
    </View>
  );
}
