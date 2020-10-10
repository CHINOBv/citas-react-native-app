import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

import Cita from './components/Cita.js';

function App() {
  const [citas, setCitas] = useState([
    {id: 1, ped: 'David', owner: 'Karla', symptoms: 'no come el hdsp xd'},
    {id: 2, ped: 'Enrique', owner: 'Arely', symptoms: 'no se duerme'},
    {id: 3, ped: 'Luis', owner: 'Pamela', symptoms: 'Esta bien pendejo jsjs'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Administrador de Citas</Text>
      <FlatList
        data={citas}
        renderItem={({item}) => <Cita item={item} />}
        keyExtractor={(cita) => cita.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0575e6',
  },
  tittle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
