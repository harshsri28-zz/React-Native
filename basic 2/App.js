import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  // const [name, setName] = useState('Harsh');
  // const [age, setAge] = useState('20');

  const [people, setPeople] = useState([
    { name: 'Harsh', key: '1' },
    { name: 'Anuj', key: '2' },
    { name: 'Rihabh', key: '3' },
    { name: 'Hello', key: '4' },
    { name: 'Harsh', key: '5' },
    { name: 'Anuj', key: '6' },
    { name: 'Rihabh', key: '7' },
    { name: 'Hello', key: '8' },
  ]);

  return (
    // Text Input
    // <View style={styles.container}>
    //   <Text>Enter Name</Text>
    //   <TextInput
    //     multiline
    //     style={styles.input}
    //     placeholder='e.g. Harsh'
    //     onChangeText={(val) => setName(val)}
    //   />

    //   <Text>Enter Age</Text>
    //   <TextInput
    //     keyboardType='numeric'
    //     style={styles.input}
    //     placeholder='e.g 99'
    //     onChangeText={(val) => setAge(val)}
    //   />

    //   <Text>name: {name}, age: {age}</Text>
    // </View>

    // List & Scrollbar

    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#777",
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // },
});
