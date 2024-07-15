import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
    const navigation = useNavigation();
    const restaurant = featured.restaurants[0];
  return (
    
    <View className="bg-stone-50 flex-1 pt-4">
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'}></StatusBar>
      <View className = "relative py-4 shadow-sm">
        <TouchableOpacity 
        onPress={()=>navigation.goBack()}
        style = {{backgroundColor: 'transparent'}}
        className="absolute z-10 rounded-full p-1 top-7 left-4"
        >
            <Icon.ArrowLeft scaleX={1.2} scaleY={1.2} strokeWidth={3} stroke={themeColors.bgColor(1)}/>
        </TouchableOpacity>
        <View>
            <Text className="text-center font-bold text-xl">Your Cart</Text>
            <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

    <View style={{backgroundColor: themeColors.bgColor(0.2)}}
      className="flex-row px-5 items-center">
        <Image source={require('../assets/images/bikeGuy.png')} 
        className= "w-20 h-20 rounded-full"/>
        <Text className="flex-1 pl-4">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-extrabold" style={{color: themeColors.text}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom:50
        }}
        className="bg-stone-100 pt-5">
          {
          restaurant.dishes.map((dish, index)=> {
            return (
              <View key={index}
                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                  <Text className="font-bold" style={{color: themeColors.text}}>
                    2 x
                  </Text>
                  <Image className="h-14 w-14 rounded-full"
                  source={dish.image}/>
                  <Text className="flex-1 font-bold text-stone-700">{dish.name}</Text>
                  <Text className="font-semibold text-base">${dish.price}</Text>
                  <TouchableOpacity className="p-1 rounded-full" style={{backgroundColor: themeColors.bgColor(1)}}>
                      <Icon.Trash2 strokeWidth={2} height={20} width={20} stroke={'white'}/>
                  </TouchableOpacity>
                </View>
            )
          })
          }

        </ScrollView>

        <View style={{ borderColor: themeColors.bgColor(1), borderBottomWidth:0}} className="p-6 px-8 rounded-t-3xl space-y-4 shadow shadow-md bg-white">
          <View className="flex-row justify-between">
            <Text className="text-stone-700">Subtotal</Text>
            <Text className="text-stone-700">$20</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-stone-700">Delivery Fee</Text>
            <Text className="text-stone-700">$2</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-stone-700 font-extrabold text-lg">Order Total</Text>
            <Text className="text-stone-700 font-extrabold text-lg">$22</Text>
          </View>
          <View className="pt-5">
              <TouchableOpacity
                onPress={()=> navigation.navigate('OrderPreparing')}
                style={{backgroundColor: themeColors.bgColor(1)}}
                className="p-3 rounded-full"
              >
                <Text className="text-white text-center font-bold text-lg">
                  Place Order
                </Text>

                
              </TouchableOpacity>
          </View>

        </View>

    </View>
  )
}