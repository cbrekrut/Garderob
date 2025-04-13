// app/wardrobe/index.tsx
import React, { useContext } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { WardrobeContext } from '../context/WardrobeContext';
import tw from 'twrnc';

export default function WardrobeScreen() {
  const { items } = useContext(WardrobeContext);

  return (
    <ScrollView contentContainerStyle={tw`p-4 bg-white`}>
      {items.length === 0 ? (
        <Text style={tw`w-full text-center mt-8 text-lg text-gray-600`}>
          Нет сохраненных вещей
        </Text>
      ) : (
        <View style={tw`flex flex-row flex-wrap justify-between`}>
          {items.map((item, index) => (
            <View
              key={index}
              style={tw`w-[48%] mb-4 bg-gray-100 rounded-lg overflow-hidden shadow-lg`}
            >
              {/* Контейнер для квадратного изображения */}
              <View style={[tw`w-full`, { aspectRatio: 1 }]}>
                <Image
                  source={{ uri: item.imageUri }}
                  style={tw`w-full h-full`}
                  resizeMode="cover"
                />
              </View>
              {/* Описание */}
              <View style={tw`p-2`}>
                <Text style={tw`text-sm font-semibold text-gray-800`}>
                  Бренд: {item.brand}
                </Text>
                <Text style={tw`text-sm text-gray-700`}>
                  Категория: {item.category}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
