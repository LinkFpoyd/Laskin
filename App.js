import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState(0);

  function addNumbers(){
    setC(
    parseInt(a) + parseInt(b)
    );
  }

  function subtractNumbers(){
    setC(
      parseInt(a) - parseInt(b)
    );
  }

  return (
    <View style={styles.container}>
      <Text>Tulos: {c}</Text>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={input => setA(input)}></TextInput>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={input => setB(input)}></TextInput>
      <View style={styles.button}>
      <Button onPress={addNumbers} title='+'/>
      <Button onPress={subtractNumbers} title='-'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 40,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1,
    textAlign: 'center'
  },
  button: {
    flexDirection:"row"
  }
});
