import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutSimulado = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>

      {/* Cuerpo con margen izquierdo, contenido y margen derecho */}
      <View style={styles.body}>
        <View style={styles.side}>
          <Text style={styles.text}>Izquierda</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>Contenido</Text>
        </View>

        <View style={styles.side}>
          <Text style={styles.text}>Derecha</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 80,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  side: {
    width: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default LayoutSimulado;
