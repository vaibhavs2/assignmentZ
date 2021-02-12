import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,Modal } from 'react-native'
import ImageCarousel from '../components/unitComponent/carousel'
import Entypo  from 'react-native-vector-icons/Entypo';
import Feather  from 'react-native-vector-icons/Feather';
import {CategoryProduct} from './categoryProduct'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class ProductDetail extends Component {

    constructor(props){
        super(props)
        this.headerDetail = this.headerDetail.bind(this)
        this.showImage = this.showImage.bind(this)
        this.state = {modalUrl:'https://picsum.photos/id/243/200/',modalVisible:false}
    }
    
    headerDetail(){
        let tempData = this.props.route.params.item
        return (<View>
            <ImageCarousel styleImage={{height:240}} showImage = {(itemUrl)=>this.showImage(itemUrl)} data={tempData}/>
            <Text style={[styles.textStyle,styles.badgeStyle]}>Protection</Text>
            <Text style={styles.textStyle}>{tempData.item_name}</Text>
            <Text style={[styles.textStyle, {fontWeight:'bold', marginVertical:8, fontSize:18}]}>&#8377;{tempData.price}</Text>
            <View style={styles.viewRow}>
            <Feather name="watch" size={24} color="black" />
            <Text  style={styles.textStyle}>{tempData.description}{' '}<Text style={{color:'blue'}}>{tempData.username}</Text></Text>
            </View>
            <View style={styles.viewRow}>
                <Feather name="heart" size={24} color="black" />
                <Text  style={styles.textStyle}>182 Likes</Text>
            </View> 
            <View style={styles.viewRow}>
                <Feather name="align-left" size={24} color="black" />
                <Text style={styles.textStyle}>InSTOCK = NO waithing time, Nike off white Airpods Case Airpods case for gen 1/2 {'&'} pro selling</Text>
            </View> 
            <View style={{marginHorizontal:28, marginVertical:12}}>
                <Text style={{marginHorizontal:12, fontSize:12}}>Brand</Text>
                <Text style={styles.textStyle}>Apple</Text>
            </View> 
            
        </View>)
    }

    showImage(itemUri){
        this.setState({modalUrl:itemUri, modalVisible:true})
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
               <CategoryProduct navigation = {this.props.navigation} route={this.props.route} headerComponent = {this.headerDetail()} category="You may also Like"/>
               
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible:!this.state.modalVisible});
                    }}>
                        <View>
                            
                            <Entypo name="cross" size={42} color="black" onPress={()=>{this.setState({modalVisible:false})}}/>
                        <Image source={{uri:this.state.modalUrl}} resizeMode='contain' resizeMethod='resize' style={{height:'90%' }} />
                        </View>
                        </Modal>

                <View style={{borderTopWidth:1, width:'100%', height:'10%',alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
                  <View style={{flexDirection:'row', alignItems:'center'}}> 
                  <Feather name="heart" size={24} color="black" />
                  <Text style={{fontWeight:'bold'}}>{' '}67</Text>
                  </View> 
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity>
                <Text style={{fontWeight:'bold', fontSize:18,borderRadius:5, borderWidth:1,borderColor:'#808080',  paddingHorizontal:24,paddingVertical:10,marginEnd:10 }}>Chat</Text>
                    </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{fontWeight:'bold',
                backgroundColor:'red',color:'white',
                paddingHorizontal:28,paddingVertical:10, 
                fontSize:18, borderRadius:5}}>Buy Now</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewRow:{flexDirection:'row', padding:4},
    textStyle:{
        marginHorizontal:12,
        paddingHorizontal:5,
        fontSize:16
    },
    badgeStyle:{
        backgroundColor:'#706c61',
        alignSelf:'baseline',
        borderRadius:3,
        color:'white',
         fontWeight:'bold',
         padding:5,
         marginVertical:3
    }

})
