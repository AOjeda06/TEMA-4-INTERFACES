import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  const [count, setCount] = useState(0);

  // ✅ Función única para manejar incremento o decremento
  const handleCountChange = (type: 'increment' | 'decrement') => {
    const newCount = type === 'increment' ? count + 1 : count - 1;
    setCount(newCount);

    if (newCount !== 0 && newCount % 10 === 0) {
      alert(`¡Has alcanzado ${newCount} clicks! 🎉`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>

      <Pressable onPress={() => handleCountChange('increment')} style={styles.button}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>

      <View style={{ height: 10 }} />

      <Pressable onPress={() => handleCountChange('decrement')} style={styles.button}>
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