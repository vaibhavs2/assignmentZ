import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')

const ENTRIES1 = [      
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      click:'Learn more',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      click:'Click here',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      click:'Click here',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
   
  ];


export default class ImageCarousel extends Component {

    constructor(props){
        super(props)
        this._renderItem = this._renderItem.bind(this)
    }

    _renderItem ({item, index}) {
        return (
            <TouchableOpacity 
            activeOpacity={0.9}
            onPress={()=>{ 
                this.props.showImage? this.props.showImage(item.illustration):''}}>
            <View style={this.props.viewStyle} >
              <Image
                style={this.props.styleImage}
                source={{uri: item.illustration}}
                
                />
                { this.props.isText &&
                        <Text style={[{position:'absolute', 
                            alignSelf:'center', bottom:0, 
                            borderWidth:1, padding:5, borderRadius:5},this.props.styleText]}>{item.click}</Text>
                   }
            </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
                <Carousel
                loop={true}
                enableMomentum = {false}
                autoplay = {true}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth}
                data={ENTRIES1}
                renderItem={this._renderItem}
                
            />
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 8,
    },
  })
