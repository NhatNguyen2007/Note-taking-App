import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import RoundIconBtn from '../components/RoundIconBtn';
import colors from '../misc/colors';

const Intro = ({ onFinish }) => {
  const [name, setName] = useState('');
  const handleOnChangeText = text => setName(text);

  const handleSubmit = async () => {
    const user = { name: name };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    if (onFinish) onFinish();
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to MyNotes</Text>
        <Text style={styles.subtitle}>
          Please enter your name to continue
        </Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder='Enter Name'
          style={styles.textInput}
        />
        {name.trim().length >= 3 ? (
          <RoundIconBtn
            antIconName='arrowright'
            onPress={handleSubmit}
            style={styles.submitButton}
          />
        ) : null}
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.WHITE,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    color: colors.WHITE,
    opacity: 0.8,
    marginBottom: 40,
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.WHITE,
    color: colors.WHITE,
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: colors.WHITE,
  },
});

export default Intro;
