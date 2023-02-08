import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button from './components/UI/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button color='light' text='C' onPress={() => {}} />
        <Button color='light' text='+/-' onPress={() => {}} />
        <Button color='light' text='%' onPress={() => {}} />
        <Button color='accent' text='/' onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button text='7' onPress={() => {}} />
        <Button text='8' onPress={() => {}} />
        <Button text='9' onPress={() => {}} />
        <Button color='accent' text='x' onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button text='4' onPress={() => {}} />
        <Button text='5' onPress={() => {}} />
        <Button text='6' onPress={() => {}} />
        <Button color='accent' text='-' onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button text='1' onPress={() => {}} />
        <Button text='2' onPress={() => {}} />
        <Button text='3' onPress={() => {}} />
        <Button color='accent' text='+' onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button size='2' text='0' onPress={() => {}} />
        <Button text='.' onPress={() => {}} />
        <Button color='accent' text='=' onPress={() => {}} />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});
