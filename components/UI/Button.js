import { Pressable, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth / 4;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#414141',
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
    fontSize: 36,
  },
  darkText: {
    color: '#333',
  },
  light: {
    backgroundColor: '#d3d3d3',
  },
  accent: {
    backgroundColor: '#f5a122',
  },
  doubleWidth: {
    width: buttonWidth * 2,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
});

const Button = ({ color, size, text, onPress }) => {
  let buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (color === 'light') {
    buttonStyles.push(styles.light);
    textStyles.push(styles.darkText);
  }

  if (color === 'accent') {
    buttonStyles.push(styles.accent);
  }

  if (size === '2') {
    buttonStyles.push(styles.doubleWidth);
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [buttonStyles, pressed && styles.pressed]}
    >
      <Text style={textStyles}>{text}</Text>
    </Pressable>
  );
};

export default Button;
