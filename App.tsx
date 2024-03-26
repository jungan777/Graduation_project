import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import PokemonCard from './components/pokemonCard';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
