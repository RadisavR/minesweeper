import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { ws } from '../../app/socket';
import { useAppSelector } from '../../app/hooks/index';
import { getGameLevel } from '../Board/boardSlice';
import { setGameLevel } from '../Board/boardSlice';
import { useAppDispatch } from '../../app/hooks/index';

export const Menu = () => {
  const gameLevel = useAppSelector(getGameLevel);
  const dispatch = useAppDispatch();

  const restartTheGame = () => {
    ws.send(`new ${gameLevel}`);
  };

  const changeGameLevel = (index: number) => {
    console.log('index', index);
    dispatch(setGameLevel(index));
    ws.send(`new ${index}`);
  };

  const displayLevelButtons = () => {
    const arr = [1, 2, 3, 4];
    return arr.map((element, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => changeGameLevel(element)}>
          <Text style={styles.btnText}>{element}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.toolBarContainer}>
      <View style={styles.buttonContainerNearMe}>
        <TouchableOpacity style={styles.restartButton} onPress={restartTheGame}>
          <Text style={styles.btnText}>Restart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainerNearMe}>
        <Text style={styles.btnText}>Level:</Text>
        <>{displayLevelButtons()}</>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toolBarContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#198a79',
    height: '30%',
  },
  buttonContainerNearMe: {
    margin: '2%',
    flexDirection: 'row',
  },
  restartButton: {
    width: 'auto',
    backgroundColor: '#126b5e',
    borderRadius: 10,
    marginLeft: '5%',
    paddingHorizontal: '1%',
  },
  button: {
    width: 'auto',
    backgroundColor: '#126b5e',
    borderRadius: 10,
    marginHorizontal: '2%',
    paddingHorizontal: '1%',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    padding: '2%',
  },
});
