import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Index() {
  // Estado para almacenar el texto ingresado
  const [texto, setTexto] = useState(''); // Estado inicial vacío

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escribe algo:</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe aquí..."
        value={texto} // Guarda el valor del TextInput en el estado
        onChangeText={setTexto} // Actualiza el estado cuando el texto cambia
      />

      <Text style={styles.output}>Texto en vivo: {texto}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  output: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
