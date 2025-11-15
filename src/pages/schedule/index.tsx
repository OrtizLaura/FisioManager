import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSchedule, Session } from "../../context/ScheduleContext";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";
import { themes } from "../../global/themes";
import { AntDesign } from "@expo/vector-icons";

type RootStackParamList = {
  Agenda: undefined;
  // se você criar uma tela específica de novo agendamento, adiciona aqui
};

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

export default function AgendaScreen() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { getSessionsByDate, toggleSessionStatus } = useSchedule();

  const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  const [selectedDate, setSelectedDate] = useState<string>(today);

  const sessions = getSessionsByDate(selectedDate);

  function getStatusColor(status: Session["status"]) {
    switch (status) {
      case "present":
        return "green";
      case "absent":
        return "red";
      default:
        return "gray";
    }
  }

  function changeDate(days: number) {
    const current = new Date(selectedDate);
    current.setDate(current.getDate() + days);
    const nextDate = current.toISOString().slice(0, 10);
    setSelectedDate(nextDate);
  }

  const renderItem = ({ item }: { item: Session }) => (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Ball
          color={getStatusColor(item.status)}
          onPress={() => toggleSessionStatus(item.id)}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.cardTitle}>{item.patientName}</Text>
          <Text style={styles.cardSubtitle}>
            {item.treatment === "fisioterapia" ? "Fisioterapia" : "Pilates"} •{" "}
            {item.time}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header com data e navegação dia anterior/próximo */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => changeDate(-1)}
          style={styles.arrowButton}
        >
          <AntDesign name="left" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={styles.dateWrapper}>
          <Text style={styles.dateLabel}>Agenda</Text>
          <Text style={styles.dateValue}>{selectedDate}</Text>
        </View>

        <TouchableOpacity
          onPress={() => changeDate(1)}
          style={styles.arrowButton}
        >
          <AntDesign name="right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Lista de sessões */}
      <View style={styles.listWrapper}>
        {sessions.length === 0 ? (
          <View style={styles.emptyWrapper}>
            <Text style={styles.emptyText}>
              Nenhum atendimento agendado para esta data.
            </Text>
          </View>
        ) : (
          <FlatList
            data={sessions}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: 12 }}
          />
        )}
      </View>

      {/* Botão para agendar nova sessão */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.newSessionButton}
          onPress={() => navigation.navigate("NewAppointment")}
        >
          <Text style={styles.newSessionButtonText}>Novo agendamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
