import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const BlockCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/cat.jpg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default BlockCard;
