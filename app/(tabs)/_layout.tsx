// app/_layout.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { WardrobeProvider } from '../context/WardrobeContext';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <WardrobeProvider>
      <View style={tw`flex-1 bg-[#ffffff]`}>
        {/* Header с фоном #f5f5f5 и текстом слева */}
        <View style={tw`h-16 bg-[#ffffff] flex-row items-center px-4 border-b border-gray-300`}>
          <Text style={tw`text-2xl font-bold text-black`}>AI Stylist</Text>
        </View>

        {/* Нижнее таб-меню с отступами по краям и закруглением */}
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: tw`mx-12 mb-2 rounded-full bg-black border-t border-gray-800 h-14`,
          }}
        >
          <Tabs.Screen
            name="wardrobe"
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? 'color-palette' : 'color-palette-outline'}
                  size={28}
                  color={focused ? '#fff' : '#555'}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="camera"
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={tw`relative`}>
                  <View
                    style={[
                      tw`absolute -top-11 w-16 h-16 rounded-full bg-black flex justify-center items-center shadow-xl`,
                      { left: '50%', marginLeft: -40 },
                    ]}
                  >
                    <Ionicons name="camera" size={32} color="#fff" />
                  </View>
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={28}
                  color={focused ? '#fff' : '#555'}
                />
              ),
            }}
          />
        </Tabs>
      </View>
    </WardrobeProvider>
  );
}
