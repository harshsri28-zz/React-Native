import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('Harsh');

  const [person, setPerson] = useState({name: "harsh", age: 20 });

  const clickHandler = () => {
    setName('Monu');
    setPerson({ name: "Harsh", age: 20 });
  }

    return (
    <View style={styles.container}>
      <Text>my name is {name} </Text>
      <Text>my name {person.name} and age is{person.age} </Text>
      <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler} />
      </View>
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello world</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20, 
  }
  // header: {
  //   backgroundColor: 'pink',
  //   padding: 20,
  // },
  // boldText: {
  //   fontWeight: 'bold',
  // }
});
