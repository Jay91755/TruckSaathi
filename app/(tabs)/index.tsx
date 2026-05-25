import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚛 TruckSaathi</Text>
      <Text style={styles.subtitle}>Truck Driver ka Saathi</Text>
      <Text style={styles.small}>App is working! Day 1 complete ✅</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a3a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#a8d5be',
    marginBottom: 16,
  },
  small: {
    fontSize: 14,
    color: '#6aab8a',
  },
});