import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Platform,
  TouchableHighlight,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Cita from './components/Cita.js';
import AddCita from './components/AddCita';

function App() {
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const quotes = await AsyncStorage.getItem('quotes');
        quotes.trim() ? setCitas(JSON.parse(quotes)) : null;
      } catch (error) {
        console.log(error);
      }
    };
    getQuotes();
  }, [citas]);

  const [showForm, setShowForm] = useState(false);

  const saveQuotes = async (quotesJSON) => {
    try {
      await AsyncStorage.setItem('quotes', quotesJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Administrador de Citas</Text>
      <View>
        <TouchableHighlight
          style={styles.btnShow}
          onPress={() => (showForm ? setShowForm(false) : setShowForm(true))}>
          <Text style={styles.txtShow}>
            {showForm ? 'Cancelar Cita' : 'Crear Nueva Cita'}
          </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.content}>
        {showForm ? (
          <>
            <Text style={styles.tittle}>Agrega una Cita</Text>
            <AddCita
              citas={citas}
              setCitas={setCitas}
              setShowForm={setShowForm}
              saveQuotes={saveQuotes}
            />
          </>
        ) : (
          <>
            <Text style={styles.tittle}>
              {citas?.length > 0 ? 'Administra Tus Citas' : 'Agrega una Cita'}
            </Text>
            <FlatList
              style={styles.listQuotes}
              data={citas}
              renderItem={({item}) => (
                <Cita
                  item={item}
                  setCitas={setCitas}
                  citas={citas}
                  saveQuotes={saveQuotes}
                />
              )}
              keyExtractor={(cita) => cita.id.toString()}
            />
          </>
        )}
      </View>
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
    marginBottom: 10,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listQuotes: {
    flex: 1,
  },
  btnShow: {
    backgroundColor: '#0966e6',
    marginVertical: 10,
    padding: 10,
  },
  txtShow: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});

export default App;
