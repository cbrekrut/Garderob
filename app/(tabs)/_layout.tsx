// app/_layout.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { WardrobeProvider } from '../context/WardrobeContext';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function RootLayout() {
  return (
    <WardrobeProvider>
      <View style={tw`flex-1`}>
        {/* Header с градиентом */}
        <LinearGradient
          colors={['#000000', '#333333']}
          style={tw`h-16 justify-center items-center`}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={tw`text-xl font-extrabold text-white`}>
            AI Stylist
          </Text>
        </LinearGradient>

        {/* Нижнее таб-меню */}
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: tw`bg-black border-t border-gray-800 h-16`,
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
                      tw`absolute -top-4 left-1/2 w-16 h-16 rounded-full bg-black flex justify-center items-center shadow-xl`,
                      { transform: [{ translateX: -32 }] },
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
