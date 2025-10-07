import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  // Estados para manejar la carga y el éxito
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Función para simular la recarga
  const reload = () => {
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={reload} style={styles.button}>
        <Ionicons name="refresh" size={32} color="white" />
      </Pressable>

      {loading && <ActivityIndicator size="large" color="#6200ee" style={{ marginTop: 20 }} />}
      {success && <Text style={styles.successText}>Cargado con éxito</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 16,
    borderRadius: 50,
  },
  successText: {
    marginTop: 20,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
