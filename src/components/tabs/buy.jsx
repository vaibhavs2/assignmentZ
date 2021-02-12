import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TouchableOpacity } from 'react-native'
import { Container,  Content, Card } from 'native-base';
import Ionicons  from 'react-native-vector-icons/Ionicons';

export class Buy extends Component {
    render() {
        return (
            <Container>
            <Content>
              <Card style={{flex: 0, color:'red', }}>
                <View>
                    <Image source={{uri: 'https://picsum.photos/200'}} style={{height: 200, width: 200, flex: 1,}}/>
                    <View style={{flexDirection:'row', justifyContent:"space-between",  width:200}}>
                        <Text>Short Description</Text>
                        <TouchableOpacity>
                        <Ionicons name="ios-heart" size={24} color="black" />
                        </TouchableOpacity>
                        
                    </View>
                </View>
              </Card>
            </Content>
          </Container>
        )
    }
}

const styles = StyleSheet.create({})
