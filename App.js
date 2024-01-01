import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Let's Build NGL UI!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: Colors.PRIMARY_COLOR,
  }
});
