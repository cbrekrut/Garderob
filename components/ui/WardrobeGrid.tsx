// app/wardrobe/WardrobeGrid.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

export interface WardrobeItem {
  imageUri: string;
  brand: string;
  category: string;
}

interface WardrobeGridProps {
  items: WardrobeItem[];
}

const WardrobeGrid: React.FC<WardrobeGridProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <Text style={tw`w-full text-center mt-8 text-lg text-gray-600`}>
        Нет сохраненной одежды :(
      </Text>
    );
  }

  return (
    <View style={tw`flex flex-row flex-wrap justify-between`}>
      {items.map((item, index) => (
        <View
          key={index}
          style={tw`w-[48%] mb-4 bg-[#ffffff] rounded-lg overflow-hidden shadow-lg`}
        >
          <View style={[tw`w-full`, { aspectRatio: 1 }]}>
            <Image
              source={{ uri: item.imageUri }}
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
          </View>
          <View style={tw`p-2`}>
            <Text style={tw`text-sm font-bold text-gray-800`}>
              {item.brand}
            </Text>
            <Text style={tw`text-sm font-semibold text-gray-700`}>
             {item.category}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default WardrobeGrid;
