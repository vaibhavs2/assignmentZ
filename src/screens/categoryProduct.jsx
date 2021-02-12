import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import {ProductCard} from '../components/unitComponent/productCard'


const LISTDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image:'https://picsum.photos/id/237/200/'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'https://picsum.photos/id/137/200/',
    image:'https://picsum.photos/id/27/200/'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:'https://picsum.photos/id/257/200/'
  },

  {
      id: 'bd7acbda-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image:'https://picsum.photos/id/243/200/'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'https://picsum.photos/id/137/200/',
      image:'https://picsum.photos/id/27/200/'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image:'https://picsum.photos/id/257/200/'
    },
  
    {
        id: 'bd7acbda-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image:'https://picsum.photos/id/243/200/'
      },
  
];


export function CategoryProduct(props) {
        return (
            <View style={{paddingHorizontal:8, paddingTop:8,backgroundColor:'white', flex:1}}>
              <FontAwesome5 name="arrow-left" size={24} color="black" style={{ marginBottom:20 }} onPress={()=>{props.navigation.goBack()}}/>
              <FlatList
                ListHeaderComponent={<View>{props.headerComponent}
                                      <Text style={{fontWeight:'bold', fontSize:22, marginVertical:18}}>
                                        {props.category?props.category:props.route.params.category}</Text>
                                      </View>}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{justifyContent: 'space-around'}}
                data={LISTDATA}
                numColumns={2}
                renderItem={({item, index})=>(<TouchableOpacity activeOpacity={0.9} onPress={()=>{
                  props.route.name==="Detail"?props.navigation.push('Detail'):props.navigation.navigate('Detail')}}>
                              <ProductCard item={item}/>
                            </TouchableOpacity> )}
                keyExtractor={item => item.id}
              />
            </View>
        )
        // <Text style={{fontWeight:'bold', fontSize:22, marginBottom:12}}>{props.category}</Text>
}

const styles = StyleSheet.create({})
