import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type SessionStatus = "none" | "present" | "absent";

export type TreatmentType = "FISIOTERAPIA" | "PILATES";

export type Session = {
  id: string;
  patientId: string;
  patientName: string;
  treatment: "FISIOTERAPIA" | "PILATES";
  date: string;
  time: string;
  status: SessionStatus;
};

type ScheduleContextData = {
  sessions: Session[];
  getSessionsByDate: (date: string) => Session[];
  addSession: (data: Omit<Session, "id" | "status">) => Promise<void>;
  toggleSessionStatus: (id: string) => Promise<void>;
};

const ScheduleContext = createContext<ScheduleContextData>(
  {} as ScheduleContextData
);

export function ScheduleProvider({ children }: { children: ReactNode }) {
  const [sessions, setSessions] = useState<Session[]>([]);

  // Buscar sessões do backend ao montar o componente
  useEffect(() => {
    fetch("http://localhost:3000/sessions")
      .then((res) => res.json())
      .then(setSessions)
      .catch((err) => console.log("Erro ao carregar sessões:", err));
  }, []);

  function getSessionsByDate(date: string) {
    return sessions.filter((s) => s.date === date);
  }

  async function addSession(data: Omit<Session, "id" | "status">) {
    try {
      const res = await fetch("http://localhost:3000/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao adicionar sessão");
      const newSessions = await res.json(); // pode ser array se criar múltiplas
      setSessions((prev) => [...prev, ...newSessions]);
    } catch (err) {
      console.log(err);
    }
  }

  async function toggleSessionStatus(id: string) {
    // Se o backend tiver rota para atualizar status, faça fetch aqui
    // Caso contrário, atualize localmente (exemplo abaixo)

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
