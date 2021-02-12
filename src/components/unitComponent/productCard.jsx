import React  from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import {  Card } from 'native-base';
import Ionicons  from 'react-native-vector-icons/Ionicons';


export  function ProductCard({ item}){

        return (
                <View style={{width:150}}>
                    <Image source={{uri: `http://18.221.177.41:8080${item.path_dir}`}} style={{height:150, width: 150, flex: 1, borderRadius:4}}/>
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:2}}>
                            <View style={{flex:1}}> 
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:'bold'}}>{item.description}</Text> 
                            </View>
                            <Ionicons name="ios-heart" size={20} color="black" /> 
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:2}}>
                            <View style={{flex:1}}> 
                            <Text numberOfLines={1} ellipsizeMode='tail'>{item.username}</Text>
                            </View>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:'bold'}}>&#8377;{item.price}</Text> 
        
                    </View>
                </View> )
}

const styles = StyleSheet.create({})
