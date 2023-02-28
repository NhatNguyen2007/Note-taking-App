import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../misc/colors';

const Note = ({ item, onPress }) => {
  const { title, desc } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.desc} numberOfLines={3}>
        {desc}
      </Text>
      <Text style={styles.credit}>leduyuit</Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    width: width / 2 - 15,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.LIGHT,
    marginBottom: 10,
  },
  desc: {
    color: colors.LIGHT,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  credit: {
    color: colors.LIGHT,
    fontSize: 10,
    position: 'absolute',
    bottom: 0,
    left: 10,
  },
});

export default Note;
