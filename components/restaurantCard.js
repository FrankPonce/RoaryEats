import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={()=> navigation.navigate('Restaurant', {...item})}
      >
      
        <View 
        style={{
          shadowColor: themeColors.bgColor(1),
          shadowOffset: { width: 0, height: 30 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
          elevation: 5, // For Android shadow
          marginBottom: 7, // Add some margin to avoid cropping
        
          
        }}
        className="mr-6 bg-stone-50 rounded-3xl shadow-lg">
            <Image className="h-36 w-64 rounded-t-3xl" source={item.image}/>
            <View className="px-3 pb-4 space-y-2">
              <Text className="text-gray-800 text-lg font-bold pt-2">{item.name}</Text>
              <View className="flex-row items-center space-x-1">
                  <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                  <Text className="text-xs ">
                    <Text className="text-green-700">{item.stars}</Text>
                    <Text className="text-gray-700">
                       ({item.reviews} reviews) · <Text className="font-semibold">{item.category}</Text>
                    </Text>
                  </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                  <Icon.MapPin color="gray" width="15" height="15" />
                  <Text className="text-gray-700 text-xs">Nearby · {item.address}</Text>
              </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}