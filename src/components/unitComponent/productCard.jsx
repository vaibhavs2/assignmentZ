import React  from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import {  Card } from 'native-base';
import Ionicons  from 'react-native-vector-icons/Ionicons';


export  function ProductCard({ item}){

        return (
                <View style={{width:150}}>
                    <Image source={{uri: item.image}} style={{height:150, width: 150, flex: 1, borderRadius:4}}/>
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:2}}>
                            <View style={{flex:1}}> 
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:'bold'}}>Product Descriptionsdf sdfsd f</Text> 
                            </View>
                            <Ionicons name="ios-heart" size={20} color="black" /> 
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:2}}>
                            <View style={{flex:1}}> 
                            <Text numberOfLines={1} ellipsizeMode='tail'>Username</Text>
                            </View>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:'bold'}}>$60</Text> 
        
                    </View>
                </View> )
}

const styles = StyleSheet.create({})
