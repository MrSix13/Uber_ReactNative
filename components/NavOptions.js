import React from 'react';
import {View, Text,StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
]

const Navoptions = () => {
    return (
        <FlatList
         data={data}
         horizontal
         keyExtractor={(item)=>item.id}
         renderItem={({item})=>(
             <TouchableOpacity
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
             
             >
                 <View>
                 <Image
                      style={{width:120, height:120,resizeMode:"contain"}}
                      source={{uri: item.image}}
                     />
                     <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                     <Icon name="arrowright" color="red" type="antdesign"/>
                 </View>
             </TouchableOpacity>
         )}
        
        />
    );
}

const styles = StyleSheet.create({})

export default Navoptions;