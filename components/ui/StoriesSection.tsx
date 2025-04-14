// app/wardrobe/StoriesSection.tsx
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface Story {
  imageUri: string;
}

interface StoriesSectionProps {
  stories: Story[];
}

const StoriesSection: React.FC<StoriesSectionProps> = ({ stories }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`mb-4`}
      contentContainerStyle={tw`items-center`}
    >
      {/* Кнопка "Новый" */}
      <TouchableOpacity style={tw`flex items-center mr-4`}>
        <View style={tw`w-16 h-16 rounded-full bg-black justify-center items-center`}>
          <Text style={tw`text-white text-xs`}>Новый</Text>
        </View>
      </TouchableOpacity>
      {/* Если есть сгенерированные истории, они будут выведены здесь */}
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
  );
};

export default StoriesSection;
