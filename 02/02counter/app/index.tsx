import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  const [count, setCount] = useState(0);

  // Alerta cuando el contador alcanza 10
  useEffect(() => {
    if (count === 10) {
      alert('¡Has alcanzado 10! 🎉');
    }
  }, [count]);

  // Incrementar el contador
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrementar el contador
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>

      <Pressable onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>

      <View style={{ height: 10 }} />

      <Pressable onPress={handleDecrement} style={styles.button}>
        <Text style={styles.buttonText}>Decrementar</Text>
        <Ionicons name="remove-circle" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});

export default Index;
