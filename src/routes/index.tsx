// src/routes/index.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Register from "../pages/register";
import AppTabs from "./appTabs"; // ou BottomRoutes, se mantiver o nome

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#b1cebc" },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      
      <Stack.Screen name="BottomRoutes" component={AppTabs} />
    </Stack.Navigator>
  );
}