import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Screenheight = Dimensions.get('window').height
const HalfHeight = Math.round(Screenheight / 2)
const Page1 = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={{ color: "#444", fontSize: 16, fontWeight: "600", paddingLeft: 10, paddingTop: 2 ,alignSelf:"flex-start"}}>Your Pick Up</Text>


            <View style={styles.start}>
                
                <Entypo name="controller-record" size={18} color="lightgreen" />
                <Text style={{ color: "#444", fontSize: 15, fontWeight: "700" }}>12 ,Laxmi Nagar, Badkuwa Madhya </Text>
            </View>
            <Image 
            source={require('../assets/page1.jpg')}
            style={styles.image}
            />
            <Text style={{ fontWeight: "800" }}>
                We're not available in your area yet
            </Text>
            <TouchableOpacity
             style={{ width: "90%", height: 50, justifyContent: "space-evenly", alignItems: "center", flexDirection: "row", backgroundColor: "yellow", borderRadius: 12,marginTop:7 }}
            // onPress={()=>navigation.navigate('StartingPoint')}
            onPress={()=>navigation.navigate('StartingPoint')}
            // onPress={()=>navigation.navigate('Page2')}
            >
                <Text style={{ color: "#000", fontSize: 15, fontWeight: "600" }}> Change Location</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Page1

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
        backgroundColor:"#fff"
    },
    image:{
        width:150,
        height:170,
        resizeMode:"cover"
    }
})