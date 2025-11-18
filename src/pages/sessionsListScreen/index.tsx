import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./styles";

type Session = {
  id: string;
  patient: { name: string };
  treatment: string;
  availableDate: { date: string };
  time: string;
  status: string;
};

export default function SessionsListScreen() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(data))
      .catch(() => alert("Erro ao carregar sessões"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (sessions.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Nenhum agendamento encontrado.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={sessions}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.sessionCard}>
          <Text style={styles.patientName}>{item.patient.name}</Text>
          <Text>{item.treatment}</Text>
          <Text>
            {new Date(item.availableDate.date).toLocaleDateString()} às{" "}
            {item.time}
          </Text>
          <Text>Status: {item.status}</Text>
        </View>
      )}
    />
  );
}
