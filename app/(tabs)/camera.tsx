// CameraScreen.tsx
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
          <View style={tw`border border-gray-300 rounded-lg overflow-hidden mb-4`}>
            <Picker
              selectedValue={brand}
              onValueChange={(itemValue) => setBrand(itemValue)}
              style={tw`h-14 w-full bg-white`}
            >
              <Picker.Item label="Выберите бренд" value="" />
              <Picker.Item label="The North Face" value="the_north_face" />
              <Picker.Item label="Columbia Sportswear" value="columbia" />
              <Picker.Item label="Patagonia" value="patagonia" />
              <Picker.Item label="Arc'teryx" value="arcteryx" />
              <Picker.Item label="Marmot" value="marmot" />
              <Picker.Item label="REI Co-op" value="rei" />
              <Picker.Item label="Mountain Hardwear" value="mountain_hardwear" />
              <Picker.Item label="Eddie Bauer" value="eddie_bauer" />
              <Picker.Item label="Helly Hansen" value="helly_hansen" />
              <Picker.Item label="Timberland" value="timberland" />
              <Picker.Item label="Carhartt" value="carhartt" />
              <Picker.Item label="Mountain Warehouse" value="mountain_warehouse" />
              <Picker.Item label="Jack Wolfskin" value="jack_wolfskin" />
              <Picker.Item label="Outdoor Research" value="outdoor_research" />
              <Picker.Item label="Burton" value="burton" />
              <Picker.Item label="Under Armour" value="under_armour" />
              <Picker.Item label="Salomon" value="salomon" />
              <Picker.Item label="Nike ACG" value="nike_acg" />
            </Picker>
          </View>
          <Text style={tw`text-lg font-medium text-gray-800 mb-2`}>Выберите категорию:</Text>
          <View style={tw`border border-gray-300 rounded-lg overflow-hidden mb-4`}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={tw`h-14 w-full bg-white`}
            >
              <Picker.Item label="Выберите категорию" value="" />
              <Picker.Item label="Tops" value="tops" />
              <Picker.Item label="Bottoms" value="bottoms" />
              <Picker.Item label="Outerwear" value="outerwear" />
              <Picker.Item label="Dresses" value="dresses" />
              <Picker.Item label="Footwear" value="footwear" />
              <Picker.Item label="Accessories" value="accessories" />
              <Picker.Item label="Activewear" value="activewear" />
              <Picker.Item label="Swimwear" value="swimwear" />
              <Picker.Item label="Underwear" value="underwear" />
              <Picker.Item label="Loungewear" value="loungewear" />
              <Picker.Item label="Jeans" value="jeans" />
              <Picker.Item label="Sweaters" value="sweaters" />
              <Picker.Item label="Jackets" value="jackets" />
              <Picker.Item label="Skirts" value="skirts" />
              <Picker.Item label="Shorts" value="shorts" />
              <Picker.Item label="Blazers" value="blazers" />
              <Picker.Item label="Suits" value="suits" />
              <Picker.Item label="Scarves" value="scarves" />
              <Picker.Item label="Gloves" value="gloves" />
              <Picker.Item label="Hats" value="hats" />
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
