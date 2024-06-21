import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { categories } from '../constants'
import { Image } from 'react-native'
import { useState } from 'react'

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    return (
    <View className="mt-4">
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{
        paddingHorizontal: 15
      }}
      >
        {
            categories.map((category, index)=>{
                let isActive = category.id == activeCategory;
                let btnClass = isActive? ' bg-white' : 'bg-beige-400';
                let textClass = isActive? 'font-semibold text-gray-800' : 'text-gray-500';
                return (
                    <View key={index} className="flex justify-center items-center mr-6">
                        <TouchableOpacity
                        onPress={()=>setActiveCategory(category.id)}
                            className={"p-1 rounded-full shadow bg-white"+btnClass}>
                            <Image style={{width:45, height:45}} 
                            source = {category.image}/>
                            
                        </TouchableOpacity>
                        <Text className = {"text-sm"+textClass}>{category.name}</Text>
                    </View>
                )

            })
        }
        
      </ScrollView>
    </View>
  )
}