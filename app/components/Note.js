import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../misc/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HTMLView from "react-native-htmlview";

const formatDate = ms => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();

  return `${day}/${month}/${year} - ${hrs}:${min}`;
};

const color = ['#876FB9', '#CC768F', '#C9706C', '#639F49', '#B674BD', '#6B85BB'];

const Note = ({ item, onPress, numb }) => {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    setUser(JSON.parse(result));
  };

  useEffect(() => {
    findUser();
  }, []);

  const { title, desc, time } = item;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: color[numb]}]}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>

        </View>

        <HTMLView value={desc} stylesheet={styles}/>
      </View>
      {/* <Text style={styles.credit}>{user.name}</Text> */}
      <View style={styles.footer}>
        <Text style={styles.time}>
          {formatDate(time)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 15,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.LIGHT,
  },
  time: {
    color: colors.LIGHT,
    bottom: 0,
    paddingTop: 10,
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
  footer:{

  },
  contentContainer: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#707070',
    marginBottom: 10,
    padding: 2,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
  },
});

export default Note;