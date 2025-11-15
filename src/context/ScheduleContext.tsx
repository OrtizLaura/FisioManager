import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type SessionStatus = "none" | "present" | "absent";

export type Session = {
  id: string;
  patientId: string;
  patientName: string;
  treatment: "fisioterapia" | "pilates";
  date: string;
  time: string;
  status: SessionStatus;
};

type ScheduleContextData = {
  sessions: Session[];
  getSessionsByDate: (date: string) => Session[];
  addSession: (data: Omit<Session, "id" | "status">) => void;
  toggleSessionStatus: (id: string) => void;
};

const STORAGE_KEY = "@fisioapp:sessions";

const ScheduleContext = createContext<ScheduleContextData>(
  {} as ScheduleContextData
);

export function ScheduleProvider({ children }: { children: ReactNode }) {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          setSessions(JSON.parse(stored));
        }
      } catch (err) {
        console.log("Erro ao carregar sessões:", err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
      } catch (err) {
        console.log("Erro ao salvar sessões:", err);
      }
    })();
  }, [sessions]);

  function getSessionsByDate(date: string) {
    return sessions.filter((s) => s.date === date);
  }

  function addSession(data: Omit<Session, "id" | "status">) {
    const newSession: Session = {
      ...data,
      id: Date.now().toString(),
      status: "none",
    };
    setSessions((prev) => [...prev, newSession]);
  }

  function toggleSessionStatus(id: string) {
    setSessions((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        let next: SessionStatus;
        if (s.status === "none") next = "present";
        else if (s.status === "present") next = "absent";
        else next = "none";
        return { ...s, status: next };
      })
    );
  }

  return (
    <ScheduleContext.Provider
      value={{ sessions, getSessionsByDate, addSession, toggleSessionStatus }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  return useContext(ScheduleContext);
}
