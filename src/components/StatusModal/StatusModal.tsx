import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';

import { getGameLevel } from '../Board/boardSlice';
import { useAppSelector } from '../../app/hooks/index';
import { ws } from '../../app/socket';

export const StatusModal = (props: any) => {
  const gameLevel = useAppSelector(getGameLevel);
  const { gameStatus } = props;
  const modalVisible = gameStatus !== 'In progress';

  const closeModal = () => {
    ws.send(`new ${gameLevel}`);
  };

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      statusBarTranslucent={true}>
      <View style={styles.container}>
        <Text style={styles.text}>{gameStatus}</Text>
        <TouchableOpacity onPress={closeModal}>
          <Text style={[styles.text, styles.newGameTextColor]}>
            Start the new game
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
  },
  newGameTextColor: {
    color: '#eb5e34',
  },
});
