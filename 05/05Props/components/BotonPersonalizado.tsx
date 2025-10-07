// BotonPersonalizado.tsx
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// Definimos las props que el componente recibirá
type Props = {
  label: string;
};

// Componente funcional que utiliza las props
const BotonPersonalizado = ({ label }: Props) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

// Estilos para el botón
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

// Exportamos el componente para usarlo en otras partes de la aplicación
export default BotonPersonalizado;
