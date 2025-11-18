import React, { createContext, useContext, useEffect, useState } from "react";

type TherapistScheduleContextType = {
  availableDates: string[];
  toggleDateAvailability: (date: string) => Promise<void>;
  isDateAvailable: (date: string) => boolean;
};

const TherapistScheduleContext = createContext<TherapistScheduleContextType>({
  availableDates: [],
  toggleDateAvailability: async () => {},
  isDateAvailable: () => false,
});

export const TherapistScheduleProvider: React.FC = ({ children }) => {
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/available-dates")
      .then((res) => res.json())
      .then((dates) => {
        const activeDates = dates
          .filter((d: any) => d.isActive)
          .map((d: any) => d.date.slice(0, 10));
        setAvailableDates(activeDates);
      });
  }, []);

  const isDateAvailable = (date: string) => availableDates.includes(date);

  const toggleDateAvailability = async (date: string) => {
    try {
      if (isDateAvailable(date)) {
        const res = await fetch(
          `http://localhost:3000/available-dates/deactivate`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date }),
          }
        );
        if (!res.ok) throw new Error("Falha ao desativar data");
        setAvailableDates((prev) => prev.filter((d) => d !== date));
      } else {
        const res = await fetch("http://localhost:3000/available-dates", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date }),
        });
        if (!res.ok) throw new Error("Falha ao ativar data");
        setAvailableDates((prev) => [...prev, date]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TherapistScheduleContext.Provider
      value={{ availableDates, toggleDateAvailability, isDateAvailable }}
    >
      {children}
    </TherapistScheduleContext.Provider>
  );
};

export const useTherapistSchedule = () => useContext(TherapistScheduleContext);
