import React, { Component } from 'react'
import { View , Text, StatusBar,StyleSheet, TouchableOpacity,FlatList,SectionList, ScrollView, Alert } from 'react-native';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import ImageCarousel from '../unitComponent/carousel'
import {Card} from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {ProductCard} from '../unitComponent/productCard'

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
  
];
  const DATA = [
    {
      title: "Your Daily Picks",
      data: ["Pizza", "Burger"]
    },
    {
      title: "Sides",
      data: ["French Fries",]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake"]
    }
  ];

  
export class Home extends Component {
     constructor(props){
       super(props)
       this.fetchProduct = this.fetchProduct.bind(this)
       this.mount = true
        this.state = {DATA:[]}
      }

      componentDidMount(){
         if(this.mount)
         this.fetchProduct()
     }

     componentWillUnmount(){
       this.mounted = false
     }

    async fetchProduct(){
      fetch('http://18.221.177.41:8080/api/getListings')
      .then((response) => response.json())
      .then((json) => {

        let tempData = []
        let condition=true
        json.data.forEach((element, index)=>{

          condition=true
          for(var i=0;i<tempData.length; i++){
                if(tempData[i]?.title === element?.category)
                  {
                    tempData[i]?.data?.push(element)
                    condition=false
                    break;
                  }
                }
              if(condition)     
                  { tempData.push({title :element.category,
                          data :[element,] })
                        
                        }
        })

        this.setState({DATA:tempData})
      })
        .catch((error) => {
          console.log(error);
        });

    }



    render() {
        return (
               <View style={{paddingStart:15, flex:1, backgroundColor:'white'}}>
                 <StatusBar barStyle='dark-content' backgroundColor='white'/>
                 <View style={{flexDirection:'row',marginTop:8,alignItems:'center',paddingEnd:5 ,height:75}}>
                   
                   <Card style={[styles.boxWithShadow,{flexDirection:'row',justifyContent:'space-around',elevation:8,
                                paddingVertical:12, flex:3, }]}>
                      <AntDesign name="search1" size={24} color="#808080" />
                      <Text style={{color:'#a1a1a1', fontFamily:'PublicSans-SemiBold', fontSize:17,}}>Search Carousell</Text>
                      <Feather name="camera" size={24} color="black" />
                   </Card>
                
                 <View style={{flexDirection:'row', flex:1, justifyContent:'space-around'}}>
                    <FontAwesome5 name="heart" size={24} color="#6e6e6e" />
                    <View style={{width:24, height:24,borderWidth:2, borderRadius:9, borderColor:'#6e6e6e'}}/>
                 </View>
                 
                 </View>
                    <SectionList
                    ItemSeparatorComponent={() => <View style={{ height: 12, }}/>}
                        ListHeaderComponent={
                              <ImageCarousel styleImage={{height:145,width:'92%', borderRadius:6}} isText={true}
                                  styleText = {{marginBottom:18, color:'white',backgroundColor:'black'}}/> 
                            }
                            sections={this.state.DATA}
                            keyExtractor={(item, index) => item+index}
                            showsVerticalScrollIndicator={false}
                            renderItem = {({ item, section }) => {
                              if(section.data.length<2)
                                return (<TouchableOpacity activeOpacity={0.8} onPress={()=>{this.props.navigation.navigate('Detail',{item:item})}}>
                                       <ProductCard item={item}/>
                                    </TouchableOpacity>)
                                else
                                    return null }}

                            renderSectionHeader={({ section  }) => {
                              return(
                              <View>
                                <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:15,marginTop:30}}>
                                    <Text style={{  fontSize:22, textAlign:'center',fontFamily:'PublicSans-Bold'}}>{section.title}</Text>
                                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Category",{category:section.title})}}>
                                    <View style={{ flexDirection:'row', justifyContent:'center',marginHorizontal:12,alignItems:'center',marginVertical:5}}>
                                        <Text style={{color:'#808080',  fontFamily:'PublicSans-SemiBold'}}>See All{' '}</Text>
                                        <AntDesign name="right" size={12}  color="#808080"/>
                                    </View>
                                    </TouchableOpacity>
                                    </View>
                                    {section.data.length>1 &&
                                     <FlatList
                                     data={section.data}
                                     showsHorizontalScrollIndicator={false}
                                     ItemSeparatorComponent = {
                                       () => <View style={{ width: 16, }}/>
                                   }
                                     horizontal={true}
                                     renderItem={({item, index})=>{
                                     return (<TouchableOpacity activeOpacity={0.8} onPress={()=>{this.props.navigation.navigate('Detail', {item:item})}}>
                                        <ProductCard item={item}/>
                                     </TouchableOpacity>)}}
                                     keyExtractor={item => item.listing_id}
                                 />}
                                </View>)}}/>
               </View>
               
        )
    }
}

const styles = StyleSheet.create({
 
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
}

})

