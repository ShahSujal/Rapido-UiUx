import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LocationContext } from '../context/Context'

const Screenheight = Dimensions.get('window').height
const HalfHeight = Math.round(Screenheight / 2)
const Page3 = () => {
   const context  = useContext(LocationContext)
   const {origin,destination} = context;
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={{ color: "#444", fontSize: 16, fontWeight: "600", paddingLeft: 10, paddingTop: 2 ,marginTop:10,textAlign:"center",alignSelf:"center"}}>Your Pick Up</Text>


            <View style={styles.start}>  
                <Entypo name="controller-record" size={18} color="lightgreen" />
                <Text style={{ color: "#444", fontSize: 15, fontWeight: "700" }}>12 ,Laxmi Nagar, Badkuwa Madhya </Text>
            </View>


            <Text style={{ color: "#444", fontSize: 16, fontWeight: "600", paddingLeft: 10, paddingTop: 2 ,marginTop:10,textAlign:"center",alignSelf:"center"}}>Your Destination</Text>


           {destination==null?
            <TouchableOpacity
             style={styles.start}
             onPress={()=>{'StartingPoint'}}>
               <Entypo name="controller-record" size={18} color="red" />
                <Text style={{ color: "#444", fontSize: 15, fontWeight: "700" }}>Select your destine </Text>
            </TouchableOpacity>
            : 
            <View style={styles.start}>
               <Entypo name="controller-record" size={18} color="red" />
                <Text style={{ color: "#444", fontSize: 15, fontWeight: "700" }}>12 ,Laxmi Nagar, Badkuwa Madhya </Text>
            </View>}
           
           {destination==null? <TouchableOpacity
             style={{ width: "90%", height: 50, justifyContent: "space-evenly", alignItems: "center", flexDirection: "row", backgroundColor: "lightyellow", borderRadius: 12,marginTop:7 }}
             disabled={true}
            >
                <Text style={{ color: "#000", fontSize: 15, fontWeight: "600" }}> Let's go..</Text>
            </TouchableOpacity>: <TouchableOpacity
             style={{ width: "90%", height: 50, justifyContent: "space-evenly", alignItems: "center", flexDirection: "row", backgroundColor: "yellow", borderRadius: 12,marginTop:7 }}
            >
                <Text style={{ color: "#000", fontSize: 15, fontWeight: "600" }}> Let's go..</Text>
            </TouchableOpacity>}
        </View>
    )
}

export default Page3

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
        width: "80%",
        height: 40,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        borderRadius:12,
        backgroundColor:"#eee",
        marginVertical:14
    },
    image:{
        width:150,
        height:170,
        resizeMode:"cover"
    }
})