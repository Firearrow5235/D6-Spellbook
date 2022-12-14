import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/Calculator';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#26408B',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px',
    paddingBottom: '40px'
  }
})