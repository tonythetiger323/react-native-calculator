import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import Button from './components/UI/Button';

export default function App() {
  const [currVal, setCurrVal] = useState(0);

  const handlePress = (type, val) => {
    if (type === 'clear') {
      setCurrVal(0);
    }

    if (type === 'opposite') {
      setCurrVal(currVal * -1);
    }

    if (type === 'percent') {
      setCurrVal(currVal * 0.01);
    }

    if (type === 'operator') {
    }

    if (type === 'number') {
      if (currVal === 0) {
        setCurrVal(val);
        return;
      }
      setCurrVal(+currVal.toString().concat(val.toString()));
    }

    if (type === 'dot') {
      if (!currVal.toString().includes('.')) {
        setCurrVal(+currVal.toString() + '.');
        return;
      }
      return;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <SafeAreaView>
        <Text style={styles.text}>{currVal}</Text>
        <View style={styles.row}>
          <Button
            color='light'
            text='C'
            onPress={handlePress.bind(this, 'clear')}
          />
          <Button
            color='light'
            text='+/-'
            onPress={handlePress.bind(this, 'opposite')}
          />
          <Button
            color='light'
            text='%'
            onPress={handlePress.bind(this, 'percent')}
          />
          <Button
            color='accent'
            text='/'
            onPress={handlePress.bind(this, 'operator', '/')}
          />
        </View>
        <View style={styles.row}>
          <Button text='7' onPress={handlePress.bind(this, 'number', 7)} />
          <Button text='8' onPress={handlePress.bind(this, 'number', 8)} />
          <Button text='9' onPress={handlePress.bind(this, 'number', 9)} />
          <Button
            color='accent'
            text='x'
            onPress={handlePress.bind(this, 'operator', 'x')}
          />
        </View>
        <View style={styles.row}>
          <Button text='4' onPress={handlePress.bind(this, 'number', 4)} />
          <Button text='5' onPress={handlePress.bind(this, 'number', 5)} />
          <Button text='6' onPress={handlePress.bind(this, 'number', 6)} />
          <Button
            color='accent'
            text='-'
            onPress={handlePress.bind(this, 'operator', '-')}
          />
        </View>
        <View style={styles.row}>
          <Button text='1' onPress={handlePress.bind(this, 'number', 1)} />
          <Button text='2' onPress={handlePress.bind(this, 'number', 2)} />
          <Button text='3' onPress={handlePress.bind(this, 'number', 3)} />
          <Button
            color='accent'
            text='+'
            onPress={handlePress.bind(this, 'operator', '+')}
          />
        </View>
        <View style={styles.row}>
          <Button
            size='2'
            text='0'
            onPress={handlePress.bind(this, 'number', 0)}
          />
          <Button text='.' onPress={handlePress.bind(this, 'dot')} />
          <Button
            color='accent'
            text='='
            onPress={handlePress.bind(this, 'operator', '=')}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 42,
    marginRight: 30,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
  },
});
