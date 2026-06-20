import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { normalizeSize } from '../utils/responsive';

// Get the exact width of the screen to divide it into 7 columns
const { width } = Dimensions.get('window');
const CELL_WIDTH = width / 7;

export default function CalendarGrid() {
  // A temporary array of numbers 1-31 for testing the UI
  const dummyDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* Month Header */}
      <Text style={styles.monthHeader}>May 2026</Text>

      {/* The Grid */}
      <View style={styles.grid}>
        {dummyDays.map((day) => (
          <View key={day} style={styles.cell}>
            <Text style={styles.dayText}>{day}</Text>
            {/* Placeholder for Lunar Date in Phase 3 */}
            <Text style={styles.lunarText}>初一</Text> 
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Space for the iPhone notch
    backgroundColor: '#FFFFFF',
  },
  monthHeader: {
    fontSize: normalizeSize(36), // Massive font for Grandma
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // This is the magic that makes it a grid!
  },
  cell: {
    width: CELL_WIDTH,
    height: CELL_WIDTH * 1.2, // Make it slightly taller than it is wide
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: normalizeSize(24),
    fontWeight: 'bold',
    color: '#000000',
  },
  lunarText: {
    fontSize: normalizeSize(14),
    color: '#888888',
    marginTop: 4,
  },
});