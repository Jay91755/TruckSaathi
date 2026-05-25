import { Colors } from '@/constants/Colors';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

interface QuickCardProps {
  icon: string;
  label: string;
  value: string;
  subValue?: string;
  statusColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export function QuickCard({
  icon,
  label,
  value,
  subValue,
  statusColor = Colors.accent,
  onPress,
  style,
}: QuickCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      {/* Top row — icon + status dot */}
      <View style={styles.topRow}>
        <Text style={styles.icon}>{icon}</Text>
        <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
      </View>

      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Value */}
      <Text style={[styles.value, { color: statusColor }]}>{value}</Text>

      {/* Sub value */}
      {subValue && (
        <Text style={styles.subValue}>{subValue}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1B2A3E',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#243548',
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 26,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: 11,
    color: Colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
  },
  subValue: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});