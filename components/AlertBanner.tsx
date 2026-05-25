import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

interface AlertBannerProps {
  message: string;
  type?: 'danger' | 'warning' | 'info';
}

const bannerColors = {
  danger: { bg: '#7c1a0a', text: '#ffddd6', border: '#a32d2d' },
  warning: { bg: '#7c4a00', text: '#ffecc9', border: '#a36200' },
  info: { bg: '#0a3d7c', text: '#d6eaff', border: '#1a62b3' },
};

export function AlertBanner({ message, type = 'danger' }: AlertBannerProps) {
  const [visible, setVisible] = useState(true);
  const colors = bannerColors[type];

  if (!visible) return null;

  return (
    <View style={[styles.banner, { backgroundColor: colors.bg, borderColor: colors.border }]}>
      <Text style={styles.warningIcon}>⚠️</Text>
      <Text style={[styles.message, { color: colors.text }]} numberOfLines={2}>
        {message}
      </Text>
      <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeBtn}>
        <Text style={[styles.closeText, { color: colors.text }]}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    gap: 8,
  },
  warningIcon: { fontSize: 14 },
  message: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '500',
  },
  closeBtn: {
    padding: 4,
  },
  closeText: {
    fontSize: 14,
    fontWeight: '600',
  },
});