// app/wardrobe/index.tsx
import React from 'react';
import { View, Text } from 'react-native';

export default function WardrobeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24 }}>Гардероб</Text>
      {/* Здесь можно размещать список вещей */}
    </View>
  );
}
