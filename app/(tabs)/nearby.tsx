import { StyleSheet, Text, View } from 'react-native';

export default function NearbyScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.emoji}>📍</Text>
      <Text style={styles.title}>Nearby</Text>
      <Text style={styles.sub}>Fuel & Parking coming Day 9</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#1a3a2a', alignItems: 'center', justifyContent: 'center' },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  sub: { fontSize: 14, color: '#a8d5be', marginTop: 8 },
});