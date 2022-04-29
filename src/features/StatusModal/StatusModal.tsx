import React from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';

import { getGameLevel } from '../Menu/gameLevelSlice';
import { useAppSelector } from '../../app/hooks/index';
import { ws } from '../../app/socket';
import { styles } from './statusModalStyles';

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
