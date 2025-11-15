import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useTherapistSchedule } from "../../context/TherapistScheduleContext";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10); // "YYYY-MM-DD"
}

function getMonthDays(baseDate: Date) {
 
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const nextMonth = new Date(year, month + 1, 1);
  const days: Date[] = [];

  for (let d = firstDay; d < nextMonth; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  return days;
}

export default function TherapistCalendarScreen() {
  const { availableDates, toggleDateAvailability, isDateAvailable } =
    useTherapistSchedule();

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = useMemo(
    () => getMonthDays(new Date(currentMonth)),
    [currentMonth]
  );

  function changeMonth(offset: number) {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentMonth(newDate);
  }

  const renderDay = ({ item }: { item: Date }) => {
    const dateString = formatDate(item);
    const available = isDateAvailable(dateString);

    return (
      <TouchableOpacity
        style={[
          styles.dayCard,
          available && styles.dayCardAvailable,
        ]}
        onPress={() => toggleDateAvailability(dateString)}
      >
        <Text style={styles.dayNumber}>{item.getDate()}</Text>
        <Text style={styles.dayLabel}>
          {available ? "Atende" : "Não atende"}
        </Text>
      </TouchableOpacity>
    );
  };

  const monthLabel = currentMonth.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => changeMonth(-1)}
        >
          <AntDesign name="left" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.monthTitle}>{monthLabel}</Text>

        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => changeMonth(1)}
        >
          <AntDesign name="right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={daysInMonth}
        keyExtractor={(item) => formatDate(item)}
        numColumns={4} // 7 seria mais próximo de calendário, mas 4 pode ficar mais legível em mobile
        contentContainerStyle={styles.daysList}
        renderItem={renderDay}
      />

      
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Dias em que você atende:</Text>
        {availableDates.length === 0 ? (
          <Text style={styles.footerEmpty}>Nenhum dia selecionado ainda.</Text>
        ) : (
          availableDates.map((d) => (
            <Text key={d} style={styles.footerDate}>
              {d}
            </Text>
          ))
        )}
      </View>
    </View>
  );
}