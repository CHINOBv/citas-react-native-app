import React from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';

const Cita = ({item, setCitas}) => {
  const deleteQuote = (id) => {
    console.log('delete...');
    setCitas((citaActual) => {
      return citaActual.filter((cita) => cita.id !== id);
    });
  };
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
      <View>
        <TouchableHighlight
          style={styles.btnDelete}
          onPress={() => deleteQuote(item.id)}>
          <Text style={styles.txtDelete}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
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
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  txtDelete: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cita;
