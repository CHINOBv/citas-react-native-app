import React from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';

const Cita = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Mascota:</Text>
        <Text style={styles.text}>{item.ped}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.text}>{item.owner}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.text}>{item.symptoms}</Text>
      </View>
      <TouchableHighlight>
        <Text>Eliminar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomColor: '#111',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default Cita;
