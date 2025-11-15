import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Alert, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import Logo from "../../assets/logo.png";
import { styles } from "./styles";
import { themes } from "../../global/themes";

type User = {
  id: string;
  fullName: string;
  email: string;
};

export default function UsersList() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    
    const mockUsers: User[] = [
      { id: "1", fullName: "Maria Silva", email: "maria@example.com" },
      { id: "2", fullName: "João Souza", email: "joao@example.com" },
      { id: "3", fullName: "Ana Lima", email: "ana@example.com" },
    ];
    setUsers(mockUsers);
  }, []);

  
  function handleUserPress(user: User) {
    Alert.alert("Usuário selecionado", `${user.fullName}\n${user.email}`);
    
  }

  function goBack() {
    navigation.goBack();
  }

  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity style={styles.userCard} onPress={() => handleUserPress(item)}>
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
            <Text style={styles.emptyText}>Nenhum usuário cadastrado ainda.</Text>
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