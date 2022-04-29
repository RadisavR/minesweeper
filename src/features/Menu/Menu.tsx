import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { ws } from '../../app/socket';
import { useAppSelector } from '../../app/hooks/index';
import { getGameLevel, setGameLevel } from './gameLevelSlice';
import { useAppDispatch } from '../../app/hooks/index';
import { styles } from './menuStyles';

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
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.restartButton} onPress={restartTheGame}>
          <Text style={styles.btnText}>Restart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.btnText}>Level:</Text>
        <>{displayLevelButtons()}</>
      </View>
    </View>
  );
};
