import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

function TabIcon({ icon, label, focused }: {
  icon: string; label: string; focused: boolean;
}) {
  return (
    <View style={[styles.tabIcon, focused && styles.tabIconActive]}>
      <Text style={styles.iconText}>{icon}</Text>
      <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>
        {label}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBar,
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="🏠" label="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="nearby"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="📍" label="Nearby" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="logbook"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="📒" label="Logbook" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="🔔" label="Alerts" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="👤" label="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0D1B2A',
    borderTopColor: '#1B2A3E',
    borderTopWidth: 1,
    height: 70,
    paddingBottom: 8,
  },
  tabIcon: {
    alignItems: 'center',
    paddingTop: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    minWidth: 55,
  },
  tabIconActive: {
    backgroundColor: '#F9731622',
  },
  iconText: { fontSize: 22 },
  tabLabel: {
    fontSize: 10,
    color: '#64748B',
    marginTop: 2,
  },
  tabLabelActive: {
    color: '#F97316',
    fontWeight: '600',
  },
});