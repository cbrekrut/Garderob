// app/wardrobe/index.tsx
import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { WardrobeContext } from '../context/WardrobeContext';
import tw from 'twrnc';

export default function WardrobeScreen() {
  const { items } = useContext(WardrobeContext);
  // Пока массив историй пустой, поэтому отображается только кнопка "Новый".
  const stories: { imageUri: string }[] = [];

  return (
    <ScrollView contentContainerStyle={tw`p-4 bg-[#f5f5f5]`} showsVerticalScrollIndicator={false}>
      {/* Горизонтальная лента "историй" */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mb-4`} contentContainerStyle={tw`items-center`}>
        {/* Первый кружок – кнопка "Новый" */}
        <TouchableOpacity style={tw`flex items-center mr-4`}>
          <View style={tw`w-16 h-16 rounded-full bg-black justify-center items-center`}>
            <Text style={tw`text-white text-xs`}>Новый</Text>
          </View>
        </TouchableOpacity>
        {stories.map((story, index) => (
          <TouchableOpacity key={index} style={tw`flex items-center mr-4`}>
            <View style={tw`w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300`}>
              <Image
                source={{ uri: story.imageUri }}
                style={tw`w-full h-full`}
                resizeMode="cover"
              />
            </View>
            <Text style={tw`mt-1 text-xs text-gray-700`}>Образ {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Сетка карточек одежды */}
      {items.length === 0 ? (
        <Text style={tw`w-full text-center mt-8 text-lg text-gray-600`}>
          Нет сохраненных образов
        </Text>
      ) : (
        <View style={tw`flex flex-row flex-wrap justify-between`}>
          {items.map((item, index) => (
            <View
              key={index}
              style={tw`w-[48%] mb-4 bg-gray-100 rounded-lg overflow-hidden shadow-lg`}
            >
              {/* Квадратное изображение */}
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
