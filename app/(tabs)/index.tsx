import { AlertBanner } from '@/components/AlertBanner';
import { QuickCard } from '@/components/QuickCard';
import { SectionHeader } from '@/components/SectionHeader';
import { Colors } from '@/constants/Colors';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ─── Compliance Row ────────────────────────────────────────
interface ComplianceRowProps {
  label: string;
  status: string;
  statusType: 'success' | 'warning' | 'danger';
}

function ComplianceRow({ label, status, statusType }: ComplianceRowProps) {
  const statusColors = {
    success: Colors.success,
    warning: Colors.warning,
    danger: Colors.danger,
  };

  return (
    <View style={styles.complianceRow}>
      <Text style={styles.complianceLabel}>{label}</Text>
      <View style={[styles.badge, { backgroundColor: statusColors[statusType] + '22' }]}>
        <Text style={[styles.badgeText, { color: statusColors[statusType] }]}>
          {status}
        </Text>
      </View>
    </View>
  );
}

// ─── Driving Hours Bar ─────────────────────────────────────
function DrivingHoursBar() {
  const hoursToday = 5.67; // 5h 40m
  const maxHours = 10;
  const percentage = (hoursToday / maxHours) * 100;
  const barColor = percentage > 80 ? Colors.danger : percentage > 60 ? Colors.warning : Colors.success;

  return (
    <View style={styles.hoursBarContainer}>
      <View style={styles.hoursBarHeader}>
        <Text style={styles.hoursBarLabel}>Driving hours today</Text>
        <Text style={[styles.hoursBarValue, { color: barColor }]}>
          5h 40m / 10h
        </Text>
      </View>
      <View style={styles.hoursBarBg}>
        <View
          style={[
            styles.hoursBarFill,
            { width: `${percentage}%` as any, backgroundColor: barColor },
          ]}
        />
      </View>
      <Text style={styles.hoursBarSub}>4h 20m remaining before mandatory rest</Text>
    </View>
  );
}

// ─── Journey Card ──────────────────────────────────────────
function JourneyCard() {
  return (
    <View style={styles.journeyCard}>
      {/* Route */}
      <View style={styles.routeRow}>
        <View style={styles.routePoint}>
          <View style={[styles.routeDot, { backgroundColor: Colors.accent }]} />
          <Text style={styles.routeCity}>Mumbai</Text>
        </View>
        <View style={styles.routeLine}>
          <View style={styles.routeDash} />
          <Text style={styles.routeTruck}>🚛</Text>
          <View style={styles.routeDash} />
        </View>
        <View style={styles.routePoint}>
          <View style={[styles.routeDot, { backgroundColor: Colors.warning }]} />
          <Text style={styles.routeCity}>Delhi</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.journeyStats}>
        <View style={styles.journeyStat}>
          <Text style={styles.journeyStatValue}>1,421 km</Text>
          <Text style={styles.journeyStatLabel}>Total distance</Text>
        </View>
        <View style={styles.journeyStatDivider} />
        <View style={styles.journeyStat}>
          <Text style={styles.journeyStatValue}>309 km</Text>
          <Text style={styles.journeyStatLabel}>Covered</Text>
        </View>
        <View style={styles.journeyStatDivider} />
        <View style={styles.journeyStat}>
          <Text style={styles.journeyStatValue}>~18h</Text>
          <Text style={styles.journeyStatLabel}>Remaining</Text>
        </View>
      </View>
    </View>
  );
}

// ─── Main Home Screen ──────────────────────────────────────
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primaryDark} />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Namaskar, Ramesh bhai 🙏</Text>
          <Text style={styles.headerTitle}>TruckSaathi</Text>
          <Text style={styles.headerSub}>NH-44 · Mumbai → Delhi</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.vehicleNum}>DL 1G AA 0001</Text>
          <Text style={styles.vehicleModel}>Tata 3118</Text>
        </View>
      </View>

      {/* Alert Banner */}
      <AlertBanner
        message="Road closed: NH-44 near Nagpur (flooding). Detour via NH-47 — adds ~45 min"
        type="danger"
      />

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* Quick Access Cards */}
        <SectionHeader title="Quick Access" />
        <View style={styles.cardGrid}>
          <View style={styles.cardRow}>
            <QuickCard
              icon="⛽"
              label="Nearest Fuel"
              value="3.2 km"
              subValue="Indian Oil · ₹94.20/L"
              statusColor={Colors.success}
              onPress={() => {}}
              style={styles.cardHalf}
            />
            <View style={styles.cardGap} />
            <QuickCard
              icon="🅿️"
              label="Truck Parking"
              value="6.8 km"
              subValue="Sai Dhaba · ₹50/night"
              statusColor={Colors.warning}
              onPress={() => {}}
              style={styles.cardHalf}
            />
          </View>
          <View style={styles.cardRow}>
            <QuickCard
              icon="⏱️"
              label="Driving Today"
              value="5h 40m"
              subValue="Limit: 10 hours"
              statusColor={Colors.warning}
              onPress={() => {}}
              style={styles.cardHalf}
            />
            <View style={styles.cardGap} />
            <QuickCard
              icon="🔔"
              label="Active Alerts"
              value="3 New"
              subValue="1 road closure"
              statusColor={Colors.danger}
              onPress={() => {}}
              style={styles.cardHalf}
            />
          </View>
        </View>

        {/* Journey Card */}
        <SectionHeader title="Today's Journey" actionLabel="View map" onAction={() => {}} />
        <JourneyCard />

        {/* Driving Hours */}
        <SectionHeader title="Compliance Status" />
        <View style={styles.complianceCard}>
          <DrivingHoursBar />
          <View style={styles.divider} />
          <ComplianceRow label="e-Way Bill expiry" status="14h left" statusType="warning" />
          <ComplianceRow label="Vehicle fitness cert." status="Valid" statusType="success" />
          <ComplianceRow label="Insurance (GCV)" status="17 days" statusType="warning" />
          <ComplianceRow label="Pollution cert. (PUC)" status="Valid" statusType="success" />
        </View>

        {/* SOS Button */}
        <SectionHeader title="Emergency" />
        <TouchableOpacity style={styles.sosButton} activeOpacity={0.8}>
          <Text style={styles.sosIcon}>🆘</Text>
          <View>
            <Text style={styles.sosTitle}>SOS Emergency</Text>
            <Text style={styles.sosSub}>Call 108 · Share location with family</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Styles ────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0D1B2A',
  },
  header: {
    backgroundColor: '#1B2A3E',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#243548',
  },
  greeting: {
    fontSize: 13,
    color: '#94A3B8',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F8FAFC',
    letterSpacing: -0.5,
  },
  headerSub: {
    fontSize: 12,
    color: '#F97316',
    marginTop: 2,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  vehicleNum: {
    fontSize: 13,
    color: '#F8FAFC',
    fontWeight: '600',
  },
  vehicleModel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#0D1B2A',
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  cardGrid: { gap: 10 },
  cardRow: { flexDirection: 'row' },
  cardHalf: { flex: 1 },
  cardGap: { width: 10 },
  journeyCard: {
    backgroundColor: '#1B2A3E',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#243548',
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  routePoint: { alignItems: 'center', gap: 6 },
  routeDot: { width: 10, height: 10, borderRadius: 5 },
  routeCity: {
    fontSize: 13,
    color: '#F8FAFC',
    fontWeight: '600',
  },
  routeLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 4,
  },
  routeDash: {
    flex: 1,
    height: 1,
    backgroundColor: '#243548',
  },
  routeTruck: { fontSize: 18 },
  journeyStats: {
    flexDirection: 'row',
    backgroundColor: '#243548',
    borderRadius: 12,
    padding: 12,
  },
  journeyStat: { flex: 1, alignItems: 'center' },
  journeyStatValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  journeyStatLabel: {
    fontSize: 10,
    color: '#64748B',
    marginTop: 2,
  },
  journeyStatDivider: {
    width: 1,
    backgroundColor: '#334155',
    marginVertical: 2,
  },
  complianceCard: {
    backgroundColor: '#1B2A3E',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#243548',
  },
  hoursBarContainer: { marginBottom: 4 },
  hoursBarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  hoursBarLabel: {
    fontSize: 13,
    color: '#94A3B8',
  },
  hoursBarValue: {
    fontSize: 13,
    fontWeight: '600',
  },
  hoursBarBg: {
    height: 8,
    backgroundColor: '#243548',
    borderRadius: 4,
    overflow: 'hidden',
  },
  hoursBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  hoursBarSub: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#243548',
    marginVertical: 12,
  },
  complianceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },
  complianceLabel: {
    fontSize: 13,
    color: '#94A3B8',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 99,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  sosButton: {
    backgroundColor: '#7F1D1D',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  sosIcon: { fontSize: 28 },
  sosTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  sosSub: {
    fontSize: 12,
    color: '#FCA5A5',
    marginTop: 2,
  },
  bottomPadding: { height: 20 },
});