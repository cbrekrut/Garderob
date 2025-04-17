// RootLayout.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import { WardrobeProvider } from '../context/WardrobeContext';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <WardrobeProvider>
      {/* Основной контейнер с белым фоном */}
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`h-10 bg-white flex-row items-center justify-left px-2 rounded-b-3xl`}>
          <Text style={tw`text-3xl font-semibold text-black`}>AI Stylist</Text>
        </View>

        {/* Контент с внешними закруглениями */}
        <View style={tw`flex-1 rounded-t-3xl overflow-hidden bg-white`}>
          <Tabs
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              // Изменили tabBarStyle: фон и граница теперь белые
              tabBarStyle: tw`mx-12 mt-1 mb-0 rounded-full bg-white h-14`,
            }}
          >
            <Tabs.Screen
              name="wardrobe"
              options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name={focused ? 'color-palette' : 'color-palette-outline'}
                    // Если белый фон, можно изменить цвет иконок для лучшего контраста.
                    size={28}
                    color={focused ? '#000' : '#555'}
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
                        // Камера-бутона оставляем с чёрным фоном для акцента
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
                    color={focused ? '#000' : '#555'}
                  />
                ),
              }}
            />
          </Tabs>
        </View>
      </View>
    </WardrobeProvider>
  );
}
