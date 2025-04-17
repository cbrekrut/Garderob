// WardrobeScreen.tsx
import React, { useContext } from 'react';
import { ScrollView, View, Image, Dimensions } from 'react-native';
import { WardrobeContext } from '../context/WardrobeContext';
import tw from 'twrnc';
import WardrobeGrid from '../../components/ui/WardrobeGrid';

export default function WardrobeScreen() {
  const { items } = useContext(WardrobeContext);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView
      contentContainerStyle={tw`bg-white min-h-full`}
      showsVerticalScrollIndicator={false}
    >
      {/* Карусель, занимающая половину экрана по высоте */}
      <View style={{ height: windowHeight / 2 }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
           {items.map((item, index) => (
      
            <View key={index} style={{ width: windowWidth, padding: 16 }}>
              <Image
                source={{ uri: item.imageUri }}
                style={{ width: '100%', height: '100%', borderRadius: 16 }}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Сетка карточек одежды под каруселью */}
      <View style={tw`p-4`}>
        <WardrobeGrid items={items} />
      </View>
    </ScrollView>
  );
}
