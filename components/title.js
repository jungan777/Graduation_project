import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Title = ({children}) => {
  return <Text>{children}</Text>
};

const styles = StyleSheet.create({
  container: {
    width: '100',
  },
});

export default Title;
