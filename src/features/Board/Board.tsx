import React from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useAppSelector } from '../../app/hooks/index';
import { ws } from '../../app/socket';
import { getBoardValues } from './fieldValuesSlice';
import { Table, TableWrapper, Cell } from 'react-native-table-component';
import { styles } from './boardStyle';

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
