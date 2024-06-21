import { View, Text, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';


export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  console.log('restaurant: ',item);
  return (
    <View>
      <ScrollView>
        <View className="relative">
            <Image style={{ width: '100%', height: 270 }} source={item.image}/>
            <TouchableOpacity
              onPress={()=> navigation.goBack()}
              className="absolute top-14 left-4 bg-stone-50 p-2 rounded-full shadow"
            >
              <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}