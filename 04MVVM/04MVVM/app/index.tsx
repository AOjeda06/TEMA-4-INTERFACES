import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, Pressable } from "react-native";
import { IndexVM } from "../app/viewModels/indexVM";

export default function Index() {
  const viewModel = new IndexVM(); // Instancia del ViewModel
  const personas = viewModel.obtenerPersonas(); // Obtener la lista de personas desde el ViewModel
  const [personaSeleccionadaId, setPersonaSeleccionadaId] = useState<string | null>(null); // Se guarda solo el id de la persona seleccionada, por defecto es null

  const renderItem = ({ item }: { item: { id: string; nombreCompleto: string } }) => ( // Renderiza cada item de la lista
    <Pressable // Usamos Pressable para manejar la selección
      onPress={() => setPersonaSeleccionadaId(item.id)} // Actualiza el estado con el ID de la persona seleccionada
      style={({ pressed }) => [ // Cambia el estilo si está presionado
        styles.item, // Estilo base del item
        pressed && styles.itemPressed // Estilo cuando está presionado
      ]}
    >
      <Text>{item.nombreCompleto}</Text>
    </Pressable>
  );

  const datos = personaSeleccionadaId ? viewModel.obtenerDatosPersona(personaSeleccionadaId) : null; // Obtener los datos de la persona seleccionada

  return (
    <View style={styles.container}>
      <FlatList
        data={personas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.detalle}>
        {datos ? (
          <Text style={styles.textoDetalle}>
            ID: {datos.id}{"\n"}
            Nombre: {datos.nombre}{"\n"}
            Apellido: {datos.apellido}
          </Text>
        ) : (
          <Text style={styles.textoDetalle}>Selecciona una persona</Text> // Mensaje por defecto (placeholder)
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemPressed: {
    backgroundColor: "#a3a3a3ff",
  },
  detalle: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  textoDetalle: {
    fontSize: 16,
  },
});
