/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'; 
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Ionicons  from 'react-native-vector-icons/Ionicons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather'
import {Home} from './src/components/tabs/home'
import {Buy} from './src/components/tabs/buy'
import {Sell} from './src/components/tabs/sell'
import {Profile} from './src/components/drawer/profile'
import {Rewards} from './src/components/drawer/rewards'
import {Settings} from './src/components/drawer/settings'
import {Wishlists} from './src/components/drawer/wishlists'
import {ProductDetail} from './src/screens/productDetail'
import {CategoryProduct} from './src/screens/categoryProduct'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




function HomeTabScreen(){
  return(
    <Tab.Navigator  
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style:{height:55},
      labelStyle:{fontSize:13, fontFamily:'PublicSans-SemiBold'}
    }} >
      <Tab.Screen name="Home" component={Home} 
      options={{
          title: 'Explore',
          tabBarColor:'green',tabBarLabel: 'Explore',
          tabBarIcon: ({  focused, color, size }) => (
            focused?
            <FontAwesome5 name="search" size={28} color={color} />:
            <Ionicons name="ios-search" size={28} color={color} />
            
          ), }} />
      <Tab.Screen name="Sell" component={Sell} options={{ 
        title: 'Groups',
        tabBarColor:'#FF6600',
        tabBarLabel: 'Groups',
          tabBarIcon: ({ focused, color, size}) => (
            focused?
            <FontAwesome5 name="user-friends" size={28} color={color} />:
            <Feather name="users" size={28} color={color} />
            
          ),  }} />
      <Tab.Screen name="Buy" component={Buy} options={{ 
        title: 'Sell',
        tabBarColor:'#007FFF',
        tabBarLabel: 'Sell',
        tabBarIcon: ({ color }) => (
          <AntDesign name="plussquare" size={28} color="red" />
          ),
      }}/>
       <Tab.Screen name="Activity" component={Sell} options={{ 
        title: 'Activity',
        tabBarColor:'#FF6600',
        tabBarLabel: 'Activity',
          tabBarIcon: ({ focused, color, size }) => (
            focused?
            <MaterialCommunityIcons name="bell" size={28} color="black" />:
            <Feather name="bell" size={28} color="#6e6e6e" />
          ),  }} />
      <Tab.Screen name="Me" component={Buy} options={{ 
        title: 'Me',
        tabBarColor:'#007FFF',
        tabBarLabel: 'Me',
        tabBarIcon: ({ focused, color, size }) => (
          focused?
          <FontAwesome5 name="user-alt" size={24} color="black" />:
          <FontAwesome5 name="user" size={28} color="#6e6e6e" />
          ),
      }}/>
    </Tab.Navigator> )
}


function deepScreenNavigation(){

  return (<Stack.Navigator headerMode='none' initialRouteName="HomeNav">
            <Stack.Screen name="HomeNav" component={HomeTabScreen} />
            <Stack.Screen name="Detail" component={ProductDetail} />
            <Stack.Screen name="Category" component={CategoryProduct} />
          </Stack.Navigator>)
}


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen" drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 3 },
      }}>
        <Drawer.Screen name="HomeTabScreen" component={deepScreenNavigation} options={{title:'Home',
       drawerIcon: ({ color }) => (
        <MaterialCommunityIcons name="home-flood" size={24} color="black" />
      ),  }}  />
        <Drawer.Screen name="Profile" component={Profile} options={{
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="face-profile" size={24} color="black" />)}} />
        <Drawer.Screen name="Rewards" component={Rewards}  options={{
          drawerIcon:({color})=>(<MaterialCommunityIcons name="podium-gold" size={24} color="black" />)}}/>
        <Drawer.Screen name="Wishlists" component={Wishlists} options={{
            drawerIcon:()=>(<MaterialCommunityIcons name="heart-flash" size={24} color="black" />)
        }}/>
        <Drawer.Screen name="Settings" component={Settings} options={{
            drawerIcon:()=>(<Ionicons name="ios-settings" size={24} color="black" />)
        }}/>
      </Drawer.Navigator>
  </NavigationContainer>
  );
};

 

export default App;
