import { Pressable, Text, StyleSheet, Dimensions } from 'react-native';

const Button = ({ text, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#414141',
    width: buttonWidth,
    height: Math.floor(buttonWidth - 10),
    borderRadius: Math.floor(buttonWidth),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    color: '#fff',
  },
});
