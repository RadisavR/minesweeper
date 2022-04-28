import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import { useAppSelector } from '../../app/hooks/index';
import { ws } from '../../app/socket';
import { getBoardValues } from './boardSlice';
import { Table, TableWrapper, Cell } from 'react-native-table-component';

export const Board = () => {
  const board = useAppSelector(getBoardValues);

  const sendPosition = (index: number, cellIndex: number) => {
    ws.send(`open ${cellIndex} ${index}`);
  };

  const cell = (data: string, index: number, cellIndex: number) => (
    <TouchableOpacity onPress={() => sendPosition(index, cellIndex)}>
      <View style={styles.btn}>
        <Text>{data}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Table borderStyle={styles.border}>
        {board.map((rowData, rowIndex) => (
          <TableWrapper key={rowIndex} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cell(cellData, rowIndex, cellIndex)}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#ffffff',
  },
  HeadStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#ffe0f0',
  },
  border: {
    borderWidth: 1.5,
    borderColor: '#198a79',
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  btn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
