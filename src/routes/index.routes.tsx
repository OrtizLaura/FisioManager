import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./botton.routes";

export default function Routes(){
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#b1cebc' }
            }}
        >
            <Stack.Screen
              name="Login"
              component={Login}
            />

            <Stack.Screen
              name="BottomRoutes"
              component={BottomRoutes}
            />
        </Stack.Navigator>
    )
}