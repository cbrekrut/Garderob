// app/profile/index.tsx
import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24 }}>Профиль</Text>
      {/* Здесь можно разместить информацию о пользователе */}
    </View>
  );
}
