// index.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotonPersonalizado from '../components/BotonPersonalizado';

export default function Index() {
  return (
    // Usamos el componente BotonPersonalizado con diferentes etiquetas
    <View style={styles.container}>
      <BotonPersonalizado label="Botón 1" />
      <BotonPersonalizado label="Botón 2" />
      <BotonPersonalizado label="Botón 3" />
      <BotonPersonalizado label="Botón 4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});
