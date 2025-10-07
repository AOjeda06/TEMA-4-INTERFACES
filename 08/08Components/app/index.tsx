import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  RefreshControl,
  ScrollView,
  SectionList,
  StatusBar,
  Switch,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  VirtualizedList,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function DemoComponentes() {
  // Estados para manejar los componentes interactivos
  const [modalVisible, setModalVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  // Datos de ejemplo para SectionList y VirtualizedList
  const data = [{ key: 'Elemento 1' }, { key: 'Elemento 2' }];
  const sections = [{ title: 'Sección A', data: ['A1', 'A2'] }];

  return (
    <KeyboardAvoidingView style={styles.container}>

      <ScrollView // ScrollView con RefreshControl
        refreshControl={
          <RefreshControl // Permite refrescar el contenido deslizando hacia abajo
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              setTimeout(() => setIsRefreshing(false), 1000);
            }}
          />
        }
      >
        {/* SWITCH */}
        <Text style={styles.label}>🔘 Switch: Interruptor ON/OFF</Text>
        <Text style={styles.description}>
          Permite al usuario activar o desactivar una opción. Aquí puedes cambiar su estado.
        </Text>
        <Switch value={switchOn} onValueChange={setSwitchOn} />

        {/* MODAL */}
        <Text style={styles.label}>🪟 Modal: Ventana emergente</Text>
        <Text style={styles.description}>
          Se usa para mostrar contenido superpuesto, como mensajes o formularios. Pulsa para abrirlo.
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.link}>Abrir Modal</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} transparent>
          <View style={styles.modal}>
            <Text>Este es un Modal</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.link}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* IMAGE */}
        <Text style={styles.label}>🖼️ Image: Mostrar imagen</Text>
        <Text style={styles.description}>
          Muestra una imagen desde una URL o archivo local. Aquí se usa una imagen de ejemplo.
        </Text>
        <Image
          source={{ uri: 'https://guadarramistas.com/wp-content/uploads/2023/07/Correcaminos-shutterstock_481522-copia-2-copia-1080x675.jpg' }}
          style={styles.image}
        />

        {/* IMAGE BACKGROUND */}
        <Text style={styles.label}>🌄 ImageBackground: Imagen como fondo</Text>
        <Text style={styles.description}>
          Permite colocar contenido encima de una imagen de fondo.
        </Text>
        <ImageBackground
          source={{ uri: 'https://guadarramistas.com/wp-content/uploads/2023/07/Correcaminos-shutterstock_481522-copia-2-copia-1080x675.jpg' }}
          style={styles.image}
        >
          <Text style={styles.overlayText}>Fondo con imagen</Text>
        </ImageBackground>

        {/* SECTIONLIST */}
        <Text style={styles.label}>📚 SectionList: Lista con secciones</Text>
        <Text style={styles.description}>
          Lista optimizada que agrupa elementos por secciones con encabezados.
        </Text>
        <SectionList
          sections={sections}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.header}>{section.title}</Text>
          )}
        />

        {/* VIRTUALIZEDLIST */}
        <Text style={styles.label}>📦 VirtualizedList: Lista virtual</Text>
        <Text style={styles.description}>
          Lista eficiente para grandes volúmenes de datos. Renderiza solo lo visible.
        </Text>
        <VirtualizedList
          data={data}
          initialNumToRender={2}
          getItem={(data, index) => data[index]}
          getItemCount={() => data.length}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />

        {/* TOUCHABLE HIGHLIGHT */}
        <Text style={styles.label}>✨ TouchableHighlight</Text>
        <Text style={styles.description}>
          Botón que muestra un efecto de resaltado al pulsar.
        </Text>
        <TouchableHighlight onPress={() => { }}>
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>

        {/* TOUCHABLE OPACITY */}
        <Text style={styles.label}>🌫️ TouchableOpacity</Text>
        <Text style={styles.description}>
          Botón que reduce su opacidad al pulsar, dando feedback visual.
        </Text>
        <TouchableOpacity onPress={() => { }}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>

        {/* TOUCHABLE WITHOUT FEEDBACK */}
        <Text style={styles.label}>🕶️ TouchableWithoutFeedback</Text>
        <Text style={styles.description}>
          Botón invisible sin feedback visual. Útil para cerrar modales o quitar el teclado.
        </Text>
        <TouchableWithoutFeedback onPress={() => { }}>
          <View>
            <Text>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* STATUSBAR */}
        <Text style={styles.label}>📶 StatusBar: Barra de estado del sistema</Text>
        <Text style={styles.description}>
          Permite controlar el estilo de la barra superior del dispositivo, como el color de texto o el fondo.
          En este ejemplo se establece el estilo de texto en oscuro.
        </Text>
        <StatusBar barStyle="dark-content" />

        {/* SCROLLVIEW */}
        <Text style={styles.label}>📜 ScrollView: Contenedor con desplazamiento</Text>
        <Text style={styles.description}>
          Permite mostrar contenido que excede el tamaño de la pantalla, habilitando el desplazamiento vertical.
          Es útil cuando tienes muchos elementos en una sola vista.
        </Text>
        
        {/* REFRESHCONTROL */}
        <Text style={styles.label}>🔄 RefreshControl: Recarga por deslizamiento</Text>
        <Text style={styles.description}>
          Se usa junto con ScrollView para permitir que el usuario recargue el contenido al deslizar hacia abajo.
          Aquí simula una recarga de 1 segundo cuando se activa.
        </Text>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  overlayText: {
    color: 'white',
    backgroundColor: '#00000088',
    padding: 4,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffcc',
  },
  header: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  link: {
    color: 'blue',
    marginVertical: 10,
  },
});
