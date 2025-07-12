// CrearClienteScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const CrearClienteScreen = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  const handleGuardar = async () => {
    try {
      const response = await axios.post('http://192.168.1.254:5000/clientes', {
        nombre,
        correo,
      });
      Alert.alert('Éxito', 'Cliente creado');
      setNombre('');
      setCorreo('');
    } catch (error) {
      Alert.alert('Error', 'No se pudo crear el cliente');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese el nombre"
      />
      <Text>Correo:</Text>
      <TextInput
        style={styles.input}
        value={correo}
        onChangeText={setCorreo}
        placeholder="Ingrese el correo"
        keyboardType="email-address"
      />
      <Button title="Guardar Cliente" onPress={handleGuardar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default CrearClienteScreen;
