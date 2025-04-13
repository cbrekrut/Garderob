// app/(tabs)/_layout.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Общий header на всех экранах табов */}
      <View
        style={{
          height: 60,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#d1d1d1',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>AI Stylist</Text>
      </View>

      {/* Само таб-меню */}
      <Tabs
        screenOptions={{
          headerShown: false, // наш header выше, поэтому скрываем встроенный заголовок
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#d1d1d1',
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="wardrobe"
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 24 }}>
                {focused ? '👗' : '👗'}
              </Text>
            ),
          }}
        />

        <Tabs.Screen
          name="camera"
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  position: 'absolute',
                  bottom: 15,
                  alignSelf: 'center',
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#007bff',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 30, color: '#fff' }}>📷</Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 24 }}>
                {focused ? '👤' : '👤'}
              </Text>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
