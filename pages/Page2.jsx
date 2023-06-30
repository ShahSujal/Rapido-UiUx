import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native'
import { MaterialCommunityIcons,Fontisto,FontAwesome,MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const Screenheight = Dimensions.get('window').height
const HalfHeight = Math.round(Screenheight / 2)
const Page2 = () => {
    const navigation = useNavigation()
  const [option, setOption] = useState(true)
    return (
        <View style={styles.container}>
           
        <TouchableOpacity
        style={option==true?{width:"100%",backgroundColor:"lightyellow"}:{width:"100%",backgroundColor:"white"}}
        onPress={()=>setOption(!option)}>
        <View style={{...styles.start}}>

               <View style={{flexDirection:"row",alignItems:"center",width:"50%"}}>
                <View style={{backgroundColor:"yellow",padding:8,borderRadius:16}}>
                <MaterialCommunityIcons name="motorbike" size={24} color="black" />
                </View>

               <Text style={{paddingLeft:19,fontWeight:"600"}}>Bike</Text>
               <Text style={{paddingLeft:9,fontWeight:"300",paddingTop:5}}>4 mins</Text>
               </View>
                <View style={{width:"40%",alignItems:"flex-end"}}>
                <Text style={{marginRight:4,fontWeight:"600",fontSize:16}}>₹114</Text>
                </View>
                
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        style={option==false?{width:"100%",backgroundColor:"lightyellow"}:{width:"100%",backgroundColor:"white"}}
        onPress={()=>setOption(!option)}>
            <View style={styles.start}>
               <View style={{flexDirection:"row",alignItems:"center",width:"50%"}}>
                <View style={{backgroundColor:"yellow",padding:8,borderRadius:16}}>
                <Fontisto name="taxi" size={18} color="black" />
                </View>

               <Text style={{paddingLeft:19,fontWeight:"600"}}>Taxi</Text>
               <Text style={{paddingLeft:9,fontWeight:"300",paddingTop:5}}>4 mins</Text>
               </View>
                <View style={{width:"40%",alignItems:"flex-end"}}>
                <Text style={{marginRight:4,fontWeight:"600",fontSize:16}}>₹178</Text>
                </View>
            </View>
           </TouchableOpacity>
            
            <TouchableOpacity style={{ width: "90%", height: 50, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", borderRadius: 12,marginTop:7 }}>
            <View style={{backgroundColor:"black",padding:6,borderRadius:14}}>
            <MaterialCommunityIcons name="gift" size={14} color="white" />
                </View>
                <Text style={{ color: "#000", fontSize: 15, fontWeight: "600",marginLeft:7 }}> Apply Coupon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: "90%", height: 40, justifyContent: "flex-start", alignItems: "center", flexDirection: "row", borderRadius: 12,marginTop:7 ,position:"relative"}}
            onPress={()=>navigation.navigate('Payment')}
            >
            <View style={{backgroundColor:"green",padding:7,paddingHorizontal:10,borderRadius:18}}>
            <FontAwesome name="rupee" size={14} color="white" />
            </View>
            <Text style={{ color: "#000", fontSize: 15, fontWeight: "600",marginLeft:7 }}> Cash</Text>
            <View style={{justifyContent:"flex-end",position:"absolute",left:"90%"}}><MaterialIcons name="keyboard-arrow-right" size={28} color="black" /></View>
            </TouchableOpacity>


            <TouchableOpacity style={{ width: "90%", height: 50, justifyContent: "space-evenly", alignItems: "center", flexDirection: "row", backgroundColor: "yellow", borderRadius: 12,marginTop:7 }}>
                <Text style={{ color: "#000", fontSize: 15, fontWeight: "600" }}> Book Bike</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Page2

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: HalfHeight,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-evenly"
    },
    start: {
        width: "100%",
        height: 70,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        borderRadius:12,
        // backgroundColor:"lightyellow",
        marginVertical:3
    },
    image:{
        width:150,
        height:170,
        resizeMode:"cover"
    }
})