import React, { useState } from 'react';
import {View,Text,TextInput,StyleSheet,ScrollView,SafeAreaView,TouchableOpacity,Alert} from 'react-native';

const UpdateCustomerScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdate = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    Alert.alert(
      'Información actualizada',
      `Nombre: ${name}\nDirección: ${address}\nTeléfono: ${phone}\nEmail: ${email}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>👤 Actualizar Cliente</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Escribe tu nombre completo"
          />

          <Text style={styles.label}>Dirección</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={address}
            onChangeText={setAddress}
            placeholder="Ingresa tu dirección"
            multiline
            numberOfLines={3}
          />

          <Text style={styles.label}>Número de teléfono</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Ingresa tu número de teléfono"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Ingresa tu email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Escribe tu contraseña"
            secureTextEntry
          />

          <Text style={styles.label}>Confirmar Contraseña</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Vuelve a escribir tu contraseña"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Actualizar información</Text>
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
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

export default UpdateCustomerScreen;
