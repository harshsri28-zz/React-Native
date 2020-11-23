import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Harsh', id: '1' },
    { name: 'Harsh', id: '2' },
    { name: 'Harsh', id: '3' },
    { name: 'Harsh', id: '4' },
    { name: 'Harsh', id: '5' },
    { name: 'Harsh', id: '6' },
    { name: 'Harsh', id: '7' },
    { name: 'Harsh', id: '8' },

  ]);

  const  pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
