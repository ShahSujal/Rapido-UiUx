import { StyleSheet, Text, View ,StatusBar, Dimensions, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {AntDesign,SimpleLineIcons,Ionicons,Fontisto,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ScreenHeight = Dimensions.get('window').height
const Payment = () => {
  const navigation = useNavigation()
    // <SimpleLineIcons name="wallet" size={24} color="black" />
  return (
    <View style={styles.container}>

      <View style={styles.TabBar}>
       <Text>Payment Method</Text>
       <TouchableOpacity
       style={{...styles.independent,left:"10%"}}
       onPress={()=>navigation.navigate('Home')}
       >
       <View>
       <AntDesign name="close" size={24} color="black" />
       </View>
       </TouchableOpacity>
      </View>

       <View style={{...styles.seperator}}>
       <Text style={{...styles.medium,alignSelf:"center"}}>Total Amount</Text>
       <Text style={{...styles.large,alignSelf:"center"}}>₹ 87</Text>
       </View>
       <Text style={{...styles.small,fontSize:14}}>Personal Wallet</Text>
       <View style={{marginVertical:10}}>
        <TouchableOpacity style={{...styles.start}}>
        <View style={{flexDirection:"row",alignItems:"center",width:"50%"}}>
                <View style={{backgroundColor:"rgba(20,20,20,1)",padding:8,borderRadius:16}}>
                <Fontisto name="wallet" size={14} color="yellow" />
                </View>

               <Text style={{paddingLeft:19,fontWeight:"600"}}>Rapido Wallet</Text>
               
               </View>

                <View style={{width:"40%",alignItems:"flex-end"}}>
                <Text style={{marginRight:4,fontWeight:"600",fontSize:16}}>₹ 0.0</Text>
                </View>     
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.start}}>
        <View style={{flexDirection:"row",alignItems:"center",width:"50%"}}>
                <View style={{padding:8,borderRadius:16}}>
                <Image
                source={require('../assets/paytm.png')}
                style={{width:40,height:30,resizeMode:"contain"}}
                />
                </View>
               <Text style={{paddingLeft:19,fontWeight:"600"}}>Paytm</Text>     
               </View>
                <View style={{width:"40%",alignItems:"flex-end"}}>
                <Text style={{marginRight:4,fontWeight:"600",fontSize:16}}><Ionicons name="ios-chevron-forward" size={20} color="#444" /></Text>
                </View>     
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.start}}>
        <View style={{flexDirection:"row",alignItems:"center",width:"50%"}}>
                 <View style={{backgroundColor:"rgba(20,20,20,1)",padding:8,borderRadius:22}}>
                 <MaterialCommunityIcons name="qrcode-scan" size={18} color="orange" />
                </View>
               <Text style={{paddingLeft:19,fontWeight:"600"}}>Pay at Drop</Text>     
               </View>
                <View style={{width:"40%",alignItems:"flex-end"}}>
                <Text style={{marginRight:4,fontWeight:"600",fontSize:16}}><Ionicons name="ios-chevron-forward" size={20} color="#444" /></Text>
                </View>     
        </TouchableOpacity>



        <Text style={{...styles.small,fontSize:14}}>Other Payment Method</Text>
        <TouchableOpacity style={{...styles.start}}>
        <View style={{flexDirection:"row",alignItems:"center",width:"50%"}}>
        <View style={{backgroundColor:"green",padding:7,paddingHorizontal:10,marginLeft:7,borderRadius:18}}>
            <FontAwesome name="rupee" size={14} color="white" />
            </View>

               <Text style={{paddingLeft:19,fontWeight:"600"}}>Cash</Text>
               
               </View>

                <View style={{width:"40%",alignItems:"flex-end"}}>
                <Text style={{marginRight:4,fontWeight:"600",fontSize:16}}><Ionicons name="ios-chevron-forward" size={20} color="#444" /></Text>
                </View>     
                
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:ScreenHeight,
        marginTop:StatusBar.currentHeight,
        flexDirection:"column"
      },
      TabBar:{
        width:"100%",
        height:60,
        backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
      },
      independent:{
        position:"absolute",
        top:"30%",
      },
      seperator:{
        width:"100%",
        height:60,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        padding:10,
      },
      large:{
      fontSize:22,
      fontWeight:'700'
      },
      medium:{
        fontSize:15,
        fontWeight:'500'
      },
      small:{
        fontSize:11,
        fontWeight:'300',
        paddingLeft:7
      },
      start: {
        width: "100%",
        height: 70,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        borderRadius:12,
        // backgroundColor:"lightyellow",
        marginVertical:3,
        position:'relative'
    },
})