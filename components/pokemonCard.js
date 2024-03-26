import {View, Text, StyleSheet, Platform, Image} from 'react-native';

export default function PokemonCard({name, image, type, hp, moves, weakness}) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
      </View>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={image}
        accessibilityLabel={`${name} pokemon`}
      />
      <View>
        <Text>{type}</Text>
      </View>
      <Text>Moves: {moves.join(', ')}</Text>
      <Text>Weakness: {weakness.join(', ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 2},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
});
