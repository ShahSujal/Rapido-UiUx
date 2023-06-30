import { Dimensions, StyleSheet,TextInput, Text, View,StatusBar, TouchableOpacity ,FlatList} from 'react-native'
import React,{useState,useContext} from 'react'
import {AntDesign,Ionicons} from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { Locations } from '../context/api'
import { LocationContext } from '../context/Context'

const ScreenHeight = Dimensions.get('window').height
const StartingPoint = () => {
  const palce = 'Enter Starting Point'
  const [text, onChangeNumber] = useState()
  const context = useContext(LocationContext)
  const {setDestination} = context
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
       <View style={{...styles.independent,left:"5%"}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Home')}
        >
       <AntDesign name="arrowleft" size={19} color="black" />
        </TouchableOpacity>
       </View>
       <View style={{...styles.independent,left:"90%"}}>
       <TouchableOpacity>
       <AntDesign name="closecircle" size={19} color="rgba(20,20,20,0.3)" />
       </TouchableOpacity>
       </View>
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={text}
        placeholder={palce}
      />
      </View>
      <FlatList 
      data={Locations}
      //  horizontal={true}
        keyExtractor={(item) => item.key}
      renderItem={({item})=>{return<View style={styles.locations}>

    <View>
    <View style={{padding:12,borderRadius:28,backgroundColor:"rgba(20,20,20,0.1)",alignItems:"center",justifyContent:"center"}}>
    <Ionicons name="location-sharp" size={18} color="white" />
    </View>
    <Text style={{fontSize:11,fontWeight:"300"}}>{item.time}</Text>
    </View>
    <TouchableOpacity
     style={{marginLeft:22,marginBottom:9,paddingTop:7}}
    onPress={()=>{setDestination(item.latitude,item.longitude)}}
    >
      <Text style={{fontSize:16,fontWeight:"600"}}>{item.title}</Text>
      <Text style={{fontSize:12,fontWeight:"400"}}>, India</Text>
    </TouchableOpacity>
    </View>
     }}/>
    
    </View>
  )
}

export default StartingPoint

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:ScreenHeight,
    marginTop:StatusBar.currentHeight,
    flexDirection:"column"
  },
  searchBar:{
    width:"100%",
    height:60,
    backgroundColor:"#eee",
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
  },
  independent:{
    position:"absolute",
    top:"30%",
  },
  input:{
    position:"relative",
    width:"70%",
    height:"100%",
    paddingLeft:2,
    marginBottom:4,
    fontSize:16
  },
  locations:{
    width:"100%",
    height:70,
    flexDirection:"row",
    padding:5,
    paddingLeft:12,
    marginVertical:12
  }
})