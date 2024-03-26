import React from 'react';
 import {SafeAreaView, StyleSheet, Platform, ScrollView, View, Text, FlatList} from 'react-native';
import PokemonCard from '../components/pokemonCard';
import pokemonList from '../data.json'
export function newApp(): React.JSX.Element {
  const charmanderData = {
    name: 'charmander',
    image: require('../assets/cat.jpg'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Fire', 'Growl'],
    weakness: ['water', 'rock'], // 'weaknesses'를 'weakness'로 변경
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={({item})=>{ 
          return(
            <View key={item.id}>
              <Text>{item.type}</Text>
              <Text>{item.name}</Text>
            </View>

          )
        }}
        keyExtractor={(item)=>item.id.toString()}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default newApp;
