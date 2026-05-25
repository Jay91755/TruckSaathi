import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.emoji}>🚛</Text>
      <Text style={styles.title}>TruckSaathi</Text>
      <Text style={styles.sub}>Truck Driver ka Saathi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1a3a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  sub: { fontSize: 14, color: '#a8d5be', marginTop: 8 },
});