import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import CalendarGrid from './src/components/CalendarGrid';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CalendarGrid />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});