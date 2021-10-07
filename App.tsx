import React, { useCallback, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native';

import styles from './styles';
import AppButton from './AppButton';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.resultContainer}>
        <Text style={styles.result} selectable={true}>
          {
            result
          }
        </Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContentContainer}>
        <TextInput style={styles.input}
          scrollEnabled={true}
          multiline={true}
          numberOfLines={3}
          editable={false}
          defaultValue={"0"}
          keyboardType={"numeric"}
          value={count.toString()}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        {
          [1, 2, 3, '+', 4, 5, 6, '−', 7, 8, 9, '×', 'DEL', 0, '.', '÷', '='].map((value, index) => {
            return (
              <AppButton
                title={value.toString()}
                key={index}
                value={value.toString()} />
            )
          })
        }
      </View>
    </View>
  );
};

export default App;
