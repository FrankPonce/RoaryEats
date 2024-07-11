import { StatusBar, View, Text, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/dishRow';


export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  console.log('restaurant: ',item);
  return (
    
    <View>
      <StatusBar barStyle = "dark-content " backgroundColor={'#1c1917'}/>
      <ScrollView>
        <View className="relative">
            <Image style={{ width: '100%', height: 270 }} source={item.image}/>
            <TouchableOpacity
              onPress={()=> navigation.goBack()}
              className="absolute top-10 left-4 bg-stone-50 p-2 rounded-full shadow"
            >
              <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
            </TouchableOpacity>
        </View>
        <View
            style={{ borderTopLeftRadius:30, borderTopRightRadius: 30}}
            className = "bg-stone-50 -mt-12 pt-4"
        >
          <View className="px-5" >
          <Text className="text-3xl font-bold">{item.name}</Text>
          <View className="flex-row space-x-5 my-1 " >
              <View className="flex-row items-center space-x-1" style={{flex: 1}}>
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
                      <Text className="text-gray-700 text-xs" >Nearby · {item.address}</Text>
                  </View>
          </View>
          <Text className="text-gray-500 mt-2">{item.description}</Text>
        </View>
        </View>
        <View className="pb-36 bg-stone-50">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/*Dishes*/}
          {
            item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index}/>)
          }
        </View>
      </ScrollView>
    </View>
  )
}