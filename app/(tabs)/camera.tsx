// app/camera/index.tsx
import React, { useState, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { WardrobeContext } from '../context/WardrobeContext';
import tw from 'twrnc';

export default function CameraScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [brand, setBrand] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const { addItem } = useContext(WardrobeContext);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Ошибка', 'Разрешения на доступ к камере не предоставлены!');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      setImageUri(asset.uri);
    }
  };

  const handleSave = () => {
    if (imageUri && brand && category) {
      addItem({ imageUri, brand, category });
      setImageUri(null);
      setBrand('');
      setCategory('');
      Alert.alert('Успех', 'Сохранено!');
    } else {
      Alert.alert('Ошибка', 'Заполните все поля');
    }
  };

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      {!imageUri ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <TouchableOpacity
            onPress={openCamera}
            style={tw`bg-black px-8 py-3 rounded-full shadow-xl`}
          >
            <Text style={tw`text-white text-lg font-semibold`}>Сделать снимок</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={tw`w-full`}>
          <Image
            source={{ uri: imageUri }}
            style={tw`w-72 h-72 self-center my-4 rounded-lg shadow-md`}
            resizeMode="cover"
          />
          <Text style={tw`text-lg font-medium text-gray-800 mb-2`}>Выберите бренд:</Text>
          <View style={tw`border border-gray-300 rounded mb-4`}>
            <Picker
              selectedValue={brand}
              onValueChange={(itemValue) => setBrand(itemValue)}
              style={tw`h-12 w-full`}
            >
              <Picker.Item label="Выберите бренд" value="" />
              <Picker.Item label="Brand 1" value="brand1" />
              <Picker.Item label="Brand 2" value="brand2" />
              <Picker.Item label="Brand 3" value="brand3" />
            </Picker>
          </View>
          <Text style={tw`text-lg font-medium text-gray-800 mb-2`}>Выберите категорию:</Text>
          <View style={tw`border border-gray-300 rounded mb-4`}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={tw`h-12 w-full`}
            >
              <Picker.Item label="Выберите категорию" value="" />
              <Picker.Item label="Category 1" value="cat1" />
              <Picker.Item label="Category 2" value="cat2" />
              <Picker.Item label="Category 3" value="cat3" />
            </Picker>
          </View>
          <TouchableOpacity
            onPress={handleSave}
            style={tw`bg-black px-8 py-3 rounded-full self-center shadow-xl`}
          >
            <Text style={tw`text-white text-lg font-semibold`}>Сохранить</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
