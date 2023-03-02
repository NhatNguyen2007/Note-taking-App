import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../misc/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HTMLView from "react-native-htmlview";

const Note = ({ item, onPress }) => {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    setUser(JSON.parse(result));
  };

  useEffect(() => {
    findUser();
  }, []);

  const { title, desc } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      {/* <Text style={styles.desc} numberOfLines={3}>
        {desc}
      </Text> */}
      <HTMLView value={desc} stylesheet={styles}/>
      <Text style={styles.credit}>{user.name}</Text>
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
    fontSize: 16,
    color: colors.LIGHT,
    marginBottom: 10,
  },
  desc: {
    color: colors.LIGHT,
    lineHeight: 20,
    marginBottom: 10,
  },
  credit: {
    color: colors.LIGHT,
    fontSize: 10,
    position: 'absolute',
    top: 0,
    right: 6,
    paddingTop: 6,
    alignSelf: 'flex-end',
  },
  div: {
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
  },
});

export default Note;