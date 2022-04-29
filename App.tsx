/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Redux TypeScript template
 * https://github.com/rahsheen/react-native-template-redux-typescript
 *
 * @format
 */

import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

import { Header } from './src/features/Header/Header';
import { Board } from './src/features/Board/Board';
import { Menu } from './src/features/Menu/Menu';
import { useAppSelector } from './src/app/hooks/index';
import { getGameStatus } from './src/features/StatusModal/statusSlice';
import { StatusModal } from './src/features/StatusModal/StatusModal';

const App = () => {
  const gameStatus = useAppSelector(getGameStatus);

  return (
    <View>
      <StatusBar backgroundColor="#198a79" />
      {gameStatus !== 'In progress' && <StatusModal gameStatus={gameStatus} />}
      <Header />
      <ScrollView>
        <Board />
        <Menu />
      </ScrollView>
    </View>
  );
};

export default App;
