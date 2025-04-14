// app/profile/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function ProfileScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-[#f5f5f5]`}>
      <Text style={tw`text-2xl font-bold text-gray-800`}>Профиль</Text>
      {/* Дополнительное содержимое можно добавить здесь */}
    </View>
  );
}
