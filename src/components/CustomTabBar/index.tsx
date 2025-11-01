import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AuthContextList } from "../../context/authContext_list";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { onOpen } = useContext<any>(AuthContextList);

  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

 
  const goToRegister = () => {
    navigation.getParent()?.navigate("PatientRegister");
  };

  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
        <AntDesign
          name="bars"
          style={{ opacity: state.index === 0 ? 1 : 0.4, color: "#fff", fontSize: 32 }}
        />
      </TouchableOpacity>

     
      <TouchableOpacity style={style.tabCenter} onPress={goToRegister}>
        <MaterialIcons name="edit" size={40} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
        <FontAwesome
          name="user"
          style={{ opacity: state.index === 1 ? 1 : 0.2, fontSize: 32, color: "#fff" }}
        />
      </TouchableOpacity>
    </View>
  );
}