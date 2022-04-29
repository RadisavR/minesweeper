/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './headerStyles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Minesweeper</Text>
    </View>
  );
};
