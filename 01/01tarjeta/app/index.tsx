// index.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://images.ctfassets.net/denf86kkcx7r/206sKHHdoJovwu9AzcdCQ/2b7b64112272693f8c3eeb4b491626b9/gato_negro_1_.jpg?fm=webp&w=612' }}
        style={styles.image}
      />
      <Text style={styles.text}>Gatito  🐱</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default Card;
