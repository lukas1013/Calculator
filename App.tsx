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
  const [result, setResult]: [string | number, any] = useState("");
  const [count, setCount] = useState("");

  const del = useCallback((eraseAll: true | false = false) => {
    if (eraseAll) {
      setCount("")
      return setResult("")
    }

    setCount(count.slice(0, count.length - 1))
  }, [count, setCount])

  const getCountResult = useCallback((count: string) => {
    let countResult = count.replace(/[\+×−÷]$/, "");

    //numb(.dec)(+|-|/|x)numb(.dec)
    while (String(countResult).match(/\d+(\.\d+)?(\+|−|×|÷){1}\d+(\.\d+)?/)) {
      const multDiv = countResult.match(/\d+(\.\d+)?(×|÷){1}\d+(\.\d+)?/)
      console.log(multDiv, countResult)
      if (!!multDiv) {
        const [n1, n2] = multDiv[0].split(/[×÷]/)
        const res = multDiv.includes('×') ? Number(n1) * Number(n2) : Number(n1) / Number(n2)
        // replace the count with the result
        countResult = countResult.replace(multDiv[0], String(res))
        //as long as there are multiplication or division operations
        continue
      }

      const addSub = countResult.match(/\d+(\.\d+)?(\+|−){1}\d+(\.\d+)?/)
      if (!!addSub) {
        const [num1, num2] = addSub[0].split(/[\+−]/)
        const res2 = addSub.includes('+') ? Number(num1) + Number(num2) : Number(num1) - Number(num2)
        countResult = countResult.replace(addSub[0], String(res2))
      }
    }

    return countResult
  }, [])

  const handleButtonPress = useCallback((value: string) => {
    const resultIsNumber =  !!result && !isNaN(Number(result)) && !/infinity/i.test(String(result))
    if (value.match(/[0-9\.]/)) {
      setCount(count + value)
    } else if (resultIsNumber && value.match(/[|\+×−÷]|DEL/) && !count.length) {
      if (value === 'DEL') {
        setCount(String(result).slice(0, String(result).length - 1))
        setResult("")
      } else {
        setCount(result + value)
        setResult("")
      }
    } else if (value.match(/(DEL|=)/)) {
      if (value === 'DEL') {
        return del(false)
      }
      const countRes = getCountResult(count)
      setResult(Number(countRes))
      setCount('')
    } else {
      // if it finds a sign at the end, replaces
      if (['+', '×', '−', '÷'].some(value => count[count.length - 1] === value)) {
        setCount(count.slice(0, count.length - 1) + value)
      } else if (count.length) {
        setCount(count + value)
      }
    }
  }, [count, setCount, result, setResult])

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
          numberOfLines={10}
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
                onPress={handleButtonPress}
                onLongPress={value === 'DEL' ? () => del(true) : null}
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
