import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather"
import * as NavigationBar from "expo-navigation-bar";
import { setStatusBarHidden } from "expo-status-bar";

NavigationBar.setPositionAsync("relative");
NavigationBar.setVisibilityAsync("hidden");
NavigationBar.setBehaviorAsync("inset-touch");
setStatusBarHidden(true, "none");

export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    const  navigation = useNavigation();
  return (
    <View className="flex-1">
      <MapView 
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        className = "flex-1"
        mapType='standard'>

            <Marker
                coordinate={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng
                    
                }}
                title={restaurant.name}
                description={restaurant.description}
                pinColor={themeColors.bgColor(1)}
                />
        </MapView>
        <View className="rounded-t-3xl -mt-12 bg-stone-50 relative">
                <View className="flex-row justify-between px-5 pt-10">
                  <View>
                    <Text className="text-lg text-stone-700 font-semibold">
                      Estimated Arrival
                    </Text>
                    <Text className="text-3xl font-extrabold text-stone-700">
                      20-30 minutes
                    </Text>
                    <Text className="mt-2 text-stone-700 font-semibold">
                      Your order is on its way!
                    </Text>
                    
                  </View>
                  <Image className="w-24 h-24" source={require('../assets/images/bike.png')} />
                </View>
                <View 
                    style={{backgroundColor: themeColors.bgColor(0.8)}}
                    className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
                    >
                        <View className="p-1 rounded-full"
                              style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}
                        >
                          <Image className="h-16 w-16 rounded-full"
                                source={require('../assets/images/deliveryGuy.png')}/>
                        </View>
                        <View className="flex-1 ml-3">
                            <Text className="text-lg font-bold text-stone-50">
                              Roary Graham
                            </Text>
                            <Text className="font-semibold text-stone-50">
                              Your Rider
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-3 mr-3">
                            <TouchableOpacity className="bg-stone-50 p-2 rounded-full">
                                <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-stone-50 p-2 rounded-full">
                                <Icon.X stroke={'red'} strokeWidth={4}/>
                            </TouchableOpacity>
                        </View>

                    </View>

        </View>
    </View>
  )
}