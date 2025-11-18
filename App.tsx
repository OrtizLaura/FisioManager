import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { PatientsProvider } from "./src/context/PatientsContext";
import { ScheduleProvider } from "./src/context/ScheduleContext";
import { TherapistScheduleProvider } from "./src/context/TherapistScheduleContext";

export default function App() {
  return (
    <NavigationContainer>
      <PatientsProvider>
        <ScheduleProvider>
          <TherapistScheduleProvider>
            <Routes />
          </TherapistScheduleProvider>
        </ScheduleProvider>
      </PatientsProvider>
    </NavigationContainer>
  );
}
