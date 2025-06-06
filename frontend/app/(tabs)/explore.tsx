import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const CustomerView = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    Alert.alert('Información guardada', `Nombre: ${name}\nDirección: ${address}\nTeléfono: ${phone}`);
    // Aquí puedes agregar lógica para enviar los datos a una base de datos o API.
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>👤 Información del Cliente</Text>

          <Text style={styles.label}>Nombre completo</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nombre completo"
          />

          <Text style={styles.label}>Dirección completa</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Dirección"
          />

          <Text style={styles.label}>Número de teléfono</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Teléfono"
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Guardar información</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#214569',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#214569',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CustomerView;
