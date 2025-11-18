import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import Logo from "../../assets/logo.png";
import { styles } from "./styles";
import { themes } from "../../global/themes";
import { log } from "console";

type User = {
  id: string;
  fullName: string;
  email: string;
};

export default function UsersList() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() =>
        Alert.alert("Erro", "Não foi possível carregar os usuários.")
      );
  }, []);

  function deleteUser(id: string) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
          Alert.alert("Sucesso", "Usuário deletado com sucesso.");
        } else {
          Alert.alert("Erro", "Não foi possível deletar o usuário.");
        }
      })
      .catch(() => {
        Alert.alert("Erro", "Erro na comunicação com o servidor.");
      });
  }

  function handleUserPress(user: User) {
    Alert.alert("Usuário selecionado", `${user.fullName}\n${user.email}`);
  }

  function handleUserDelete(item: User) {
    console.log(item);
    Alert.alert(
      "Confirmar exclusão",
      `Deseja realmente deletar o usuário ${item.fullName}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          style: "destructive",
          onPress: () => deleteUser(item.id),
        },
      ]
    );

    deleteUser(item.id);
  }

  function goBack() {
    navigation.goBack();
  }

  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      style={styles.userCard}
      onPress={() => handleUserPress(item)}
    >
      <View style={styles.userIconWrapper}>
        <AntDesign name="user" size={24} color={themes.colors.primary} />
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.fullName}</Text>
        <View style={styles.userEmailRow}>
          <MaterialIcons name="email" size={18} color="#555" />
          <Text style={styles.userEmail}>{item.email}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteButton}>
        <MaterialIcons
          name="delete"
          size={24}
          color="red"
          onPress={() => handleUserDelete(item)}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>

        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.texto}>Fisio App</Text>
        <Text style={[styles.subtitulo, { color: themes.colors.secundary }]}>
          Usuários cadastrados
        </Text>
      </View>

      <View style={styles.boxMid}>
        {users.length === 0 ? (
          <View style={styles.emptyWrapper}>
            <Text style={styles.emptyText}>
              Nenhum usuário cadastrado ainda.
            </Text>
          </View>
        ) : (
          <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>
    </View>
  );
}
