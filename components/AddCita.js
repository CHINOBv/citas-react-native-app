import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

function AddCita({citas, setCitas, setShowForm}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [Time, setTime] = useState('');
  const [Date, setDate] = useState('');

  const [Ped, setPed] = useState('');
  const [Owner, setOwner] = useState('');
  const [Symptoms, setSymptoms] = useState('');
  const [Phone, setPhone] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const dateConfirm = (date) => {
    setDate(
      date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }),
    );
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const timeConfirm = (time) => {
    setTime(
      time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    );
    hideTimePicker();
  };

  const createNewQuote = () => {
    if (
      !Owner.trim() ||
      !Ped.trim() ||
      !Phone.trim() ||
      !Symptoms.trim() ||
      !Date.trim() ||
      !Time.trim()
    ) {
      showAlert();
      return;
    }
    const quote = {Owner, Ped, Phone, Symptoms, Date, Time};
    quote.id = shortid.generate();
    console.log(quote);
    const newQuotes = [...citas, quote];
    setCitas(newQuotes);
    setShowForm(false);
    setOwner('');
    setPed('');
    setPhone('');
    setSymptoms('');
    setDate('');
    setTime('');
  };
  const showAlert = () => {
    Alert.alert('Error', 'Todos los Campos son Obligatorios');
  };

  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Mascota: </Text>
          <TextInput style={styles.input} onChangeText={(ped) => setPed(ped)} />
        </View>
        <View>
          <Text style={styles.label}>Dueño: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(owner) => setOwner(owner)}
          />
        </View>
        <View>
          <Text style={styles.label}>Numero de Contacto: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(phone) => setPhone(phone)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Selecciona una Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={dateConfirm}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Selecciona una Fecha"
          />
          <Text>{Date}</Text>
        </View>
        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Selecciona una Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={timeConfirm}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Selecciona una Hora"
          />
          <Text>{Time}</Text>
        </View>
        <View>
          <Text style={styles.label}>Sintomas: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(symptoms) => setSymptoms(symptoms)}
            multiline
          />
        </View>
        <View>
          <TouchableHighlight
            style={styles.btnSubmit}
            onPress={() => createNewQuote()}>
            <Text style={styles.txtSubmit}>Agregar Cita</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    flex: 1,
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#01bd34',
    marginVertical: 10,
  },
  txtSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddCita;
