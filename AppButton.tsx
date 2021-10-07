import React, { memo } from 'react';
import {
  Text,
  Pressable,
} from 'react-native';
import styles from './styles';

interface Props {
  onPress: any,
  onLongPress: any | null,
  title: string,
  value: string
}

function AppButton(props: Props) {
  return (
    <Pressable
      onPress={() => props.onPress(props.value)}
      onLongPress={props.onLongPress}
      style={[{ flexBasis: props.value === '=' ? '80%' : '21%' }, styles.button]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  )
}

export default memo(AppButton)