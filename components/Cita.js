import React from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';

const Cita = ({item, setCitas, citas, saveQuotes}) => {
  const deleteQuote = (id) => {
    const quotesFiltered = citas.filter((cita) => cita.id !== id);
    saveQuotes(JSON.stringify(quotesFiltered));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Mascota:</Text>
        <Text style={styles.text}>{item.Ped}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.text}>{item.Owner}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.text}>{item.Symptoms}</Text>
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
    borderBottomColor: '#f1f1f1',
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
