import React, { createContext, useContext, useState, ReactNode, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TherapistScheduleContextData = {
  availableDates: string[];
  toggleDateAvailability: (date: string) => void;
  isDateAvailable: (date: string) => boolean;
  getNextAvailableDate: (fromDate?: string) => string | null;
};

const STORAGE_KEY = "@fisioapp:therapist_schedule";

const TherapistScheduleContext = createContext<TherapistScheduleContextData>(
  {} as TherapistScheduleContextData
);

export function TherapistScheduleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          setAvailableDates(JSON.parse(stored));
        }
      } catch (err) {
        console.log("Erro ao carregar agenda do fisio:", err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(availableDates));
      } catch (err) {
        console.log("Erro ao salvar agenda do fisio:", err);
      }
    })();
  }, [availableDates]);

  function toggleDateAvailability(date: string) {
    setAvailableDates((prev) => {
      if (prev.includes(date)) {
        return prev.filter((d) => d !== date);
      }
      return [...prev, date];
    });
  }

  function isDateAvailable(date: string) {
    return availableDates.includes(date);
  }

  function getNextAvailableDate(fromDate?: string): string | null {
    if (availableDates.length === 0) return null;
    const sorted = [...availableDates].sort();
    if (!fromDate) return sorted[0];
    const next = sorted.find((d) => d >= fromDate);
    return next || null;
  }

  return (
    <TherapistScheduleContext.Provider
      value={{
        availableDates,
        toggleDateAvailability,
        isDateAvailable,
        getNextAvailableDate,
      }}
    >
      {children}
    </TherapistScheduleContext.Provider>
  );
}

export function useTherapistSchedule() {
  return useContext(TherapistScheduleContext);
}
