import 'effect'; // Notice this import, which fails without global text encoder/decoder
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Validating these encoders are available
console.log('Checking Text Encoder/Decoder', {
  TextDecoder: global.TextDecoder,
  TextEncoder: global.TextEncoder,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TextEncoder = {typeof TextEncoder}</Text>
      <Text>TextDecoder = {typeof TextDecoder}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
