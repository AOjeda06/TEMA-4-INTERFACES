import { Text, View, FlatList, StyleSheet } from "react-native";

export default function Index() {
  const gente = [
    { id: "1", nombre: "Andres", apellido: "Ojeda" },
    { id: "2", nombre: "Juan", apellido: "Perez" },
    { id: "3", nombre: "Pedro", apellido: "Gomez" },
    { id: "4", nombre: "Maria", apellido: "Lopez" },
    { id: "5", nombre: "Luisa", apellido: "Martinez" },
    { id: "6", nombre: "Ana", apellido: "Garcia" },
    { id: "7", nombre: "Jose", apellido: "Rodriguez" },
    { id: "8", nombre: "Luis", apellido: "Hernandez" },
    { id: "9", nombre: "Carmen", apellido: "Sanchez" },
    { id: "10", nombre: "Marta", apellido: "Diaz" },
  ];


  return (
    <View style={styles.view}>
      <FlatList data={gente}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>
            {item.nombre} {item.apellido}
          </Text>
        )}
      />;
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
