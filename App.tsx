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

import Header from './src/components/Header/Header';
import { Board } from './src/components/Board/Board';
import { Menu } from './src/components/Menu/Menu';
import { useAppSelector } from './src/app/hooks/index';
import { getGameStatus } from './src/components/Board/boardSlice';
import { StatusModal } from './src/components/StatusModal/StatusModal';

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
