// app/wardrobe/index.tsx
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { WardrobeContext } from '../context/WardrobeContext';
import tw from 'twrnc';
import StoriesSection from '../../components/ui/StoriesSection';
import WardrobeGrid from '../../components/ui/WardrobeGrid';

export default function WardrobeScreen() {
  const { items } = useContext(WardrobeContext);
  // Пока что массив историй пустой, его можно заполнить, когда появятся сгенерированные образы.
  const stories: { imageUri: string }[] = [];

  return (
    <ScrollView
      contentContainerStyle={tw`p-4 bg-[#ffffff]`}
      showsVerticalScrollIndicator={false}
    >
      {/* Горизонтальная лента "историй" */}
      <StoriesSection stories={stories} />
      {/* Сетка карточек одежды */}
      <WardrobeGrid items={items} />
    </ScrollView>
  );
}
