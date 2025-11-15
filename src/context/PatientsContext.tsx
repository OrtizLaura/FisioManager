import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type TreatmentType = "fisioterapia" | "pilates";
export type PresenceStatus = "none" | "present" | "absent";

export type Patient = {
  id: string;
  name: string;
  treatment: TreatmentType;
  observation?: string;
  status: PresenceStatus;
};

type PatientsContextData = {
  patients: Patient[];
  addPatient: (data: Omit<Patient, "id" | "status">) => void;
  removePatient: (id: string) => void;
  togglePresence: (id: string) => void;
};

const STORAGE_KEY = "@fisioapp:patients";

const PatientsContext = createContext<PatientsContextData>({} as PatientsContextData);

export function PatientsProvider({ children }: { children: ReactNode }) {
  const [patients, setPatients] = useState<Patient[]>([]);

  
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          setPatients(JSON.parse(stored));
        }
      } catch (err) {
        console.log("Erro ao carregar pacientes:", err);
      }
    })();
  }, []);

  
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
      } catch (err) {
        console.log("Erro ao salvar pacientes:", err);
      }
    })();
  }, [patients]);

  function addPatient(data: Omit<Patient, "id" | "status">) {
    const newPatient: Patient = {
      ...data,
      id: Date.now().toString(),
      status: "none",
    };
    setPatients((prev) => [...prev, newPatient]);
  }

  function removePatient(id: string) {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  }

  function togglePresence(id: string) {
    setPatients((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;

        let nextStatus: PresenceStatus;

        if (p.status === "none") nextStatus = "present";
        else if (p.status === "present") nextStatus = "absent";
        else nextStatus = "none";

        return { ...p, status: nextStatus };
      })
    );
  }

  return (
    <PatientsContext.Provider
      value={{ patients, addPatient, removePatient, togglePresence }}
    >
      {children}
    </PatientsContext.Provider>
  );
}

export function usePatients() {
  return useContext(PatientsContext);
}