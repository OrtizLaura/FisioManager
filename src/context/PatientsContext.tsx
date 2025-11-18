import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type TreatmentType = "FISIOTERAPIA" | "PILATES";
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
  addPatient: (data: Omit<Patient, "id" | "status">) => Promise<void>;
  removePatient: (id: string) => Promise<void>;
  togglePresence: (id: string) => Promise<void>;
};

const PatientsContext = createContext<PatientsContextData>(
  {} as PatientsContextData
);

export function PatientsProvider({ children }: { children: ReactNode }) {
  const [patients, setPatients] = useState<Patient[]>([]);

  // Buscar pacientes do backend ao montar o componente
  useEffect(() => {
    fetch("http://localhost:3000/patients")
      .then((res) => res.json())
      .then(setPatients)
      .catch((err) => console.log("Erro ao carregar pacientes:", err));
  }, []);

  async function addPatient(data: Omit<Patient, "id" | "status">) {
    try {
      const res = await fetch("http://localhost:3000/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao adicionar paciente");
      const newPatient = await res.json();
      setPatients((prev) => [...prev, { ...newPatient, status: "none" }]);
    } catch (err) {
      console.log(err);
    }
  }

  async function removePatient(id: string) {
    try {
      const res = await fetch(`http://localhost:3000/patients/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Erro ao remover paciente");
      setPatients((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  // Se o status de presença estiver no backend, você pode criar uma rota para atualizar
  // Caso contrário, pode manter localmente ou implementar conforme necessidade
  async function togglePresence(id: string) {
    // Exemplo simples: alterna localmente
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
