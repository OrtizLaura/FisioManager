import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { Flag } from "../../components/Flag";
import { themes } from "../../global/themes";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import PatientRegister from "../patient";

type PropCard = {
  item: number;
  title: string;
  description: string;
  flag: "Fisio" | "Pilates";
};

const data: Array<PropCard> = [
  {
    item: 0,
    title: "Fisioterapia Chloe",
    description: "Braço e coluna",
    flag: "Fisio",
  },
  {
    item: 1,
    title: "Pilates seu Tony",
    description: "Fortalecimento coluna",
    flag: "Pilates",
  },
  {
    item: 2,
    title: "Pilates Cidão",
    description: "Fortalecimento pélvico",
    flag: "Pilates",
  },
  {
    item: 3,
    title: "Fisioterapia Laura",
    description: "Tratar condocondrite",
    flag: "Fisio",
  },
];

// Deixa a bolinha clicável
const Ball = ({ color, onPress }: { color: string; onPress?: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: color,
      }}
    />
  );
};

export default function List() {
  const navigation = useNavigation<NavigationProp<any>>();

  const goToPatientRegister = () => {
    alert(123);
    navigation.getParent()?.navigate("PatientRegister");
  };

  const renderCard = (item: PropCard) => {
    return (
      <TouchableOpacity style={style.card} activeOpacity={0.8}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            {/* Ao clicar na bolinha, navega */}
            <Ball color="gray" onPress={goToPatientRegister} />
            <View>
              <Text style={style.titleCard}>{item.title}</Text>
              <Text style={style.descriptionCard}>{item.description}</Text>
            </View>
          </View>

          {item.flag === "Fisio" ? (
            <Flag caption="Fisio" color={themes.colors.red} />
          ) : (
            <Flag caption="Pilates" color={themes.colors.greenLigth} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.greeting}>Olá Renata!</Text>
        <View style={style.boxInput}>
          <Input IconLeft={MaterialIcons} IconLeftName="search" />
        </View>
      </View>

      <View style={style.boxList}>
        <FlatList
          data={data}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item) => item.item.toString()}
          renderItem={({ item }) => renderCard(item)}
        />
      </View>
    </View>
  );
}
