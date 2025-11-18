import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AuthContextList } from "../../context/authContext_list";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { onOpen } = useContext<any>(AuthContextList);

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const goToRegister = () => {
    navigation.navigate("PatientRegister");
  };

  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
        <AntDesign
          name="bars"
          style={{
            opacity: state.index === 0 ? 1 : 0.4,
            color: "#fff",
            fontSize: 28,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItem} onPress={() => go("UsersList")}>
        <FontAwesome
          name="user"
          style={{
            opacity: state.index === 1 ? 1 : 0.4,
            fontSize: 28,
            color: "#fff",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItem} onPress={() => go("Agenda")}>
        <AntDesign
          name="calendar"
          style={{
            opacity: state.index === 2 ? 1 : 0.4,
            color: "#fff",
            fontSize: 28,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.tabItem}
        onPress={() => go("TherapistCalendar")}
      >
        <Feather
          name="calendar"
          style={{
            opacity: state.index === 3 ? 1 : 0.4,
            color: "#fff",
            fontSize: 28,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.tabItem}
        onPress={() => go("SessionsList")}
      >
        <AntDesign
          name="group"
          style={{
            opacity: state.index === 4 ? 1 : 0.4,
            color: "#fff",
            fontSize: 28,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
