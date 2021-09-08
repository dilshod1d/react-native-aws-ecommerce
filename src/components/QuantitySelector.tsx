import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const QuantitySelector = ({count, setCount}) => {
  const onMinus = () => {
    setCount(Math.max(1, count - 1));
  };
  const onPlus = () => {
    //should not exceed stock quantity
    //set Quantity
    setCount(count + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 120,
    justifyContent: 'space-between',
  },
  button: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1d1d1',
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
  },
});
