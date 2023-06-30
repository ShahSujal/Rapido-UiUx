import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,Dimensions,Platform} from 'react-native'
import * as Location from 'expo-location';
import MapView,{Marker} from 'react-native-maps'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';



const height = Dimensions.get('window').height;
const halfHeight = Math.round(height/1.7)
const width = Dimensions.get('window').width;
const HomeScreen = () => {
   
    // const [location, setLocation] = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);
  
    // useEffect(() => {
    //   (async () => {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== 'granted') {
    //       setErrorMsg('Permission to access location was denied');
    //       return;
    //     }
  
    //     let location = await Location.getCurrentPositionAsync({});
    //     setLocation(location);
    //   })();
    // }, []);
  
    // let text = 'Waiting..';
    // if (errorMsg) {
    //   text = errorMsg;
    // } else if (location) {
    //   text = JSON.stringify(location);
    // }

  return (
    <View>
  <MapView 
  style={styles.map} 
  initialRegion={{
    latitude: 22.7731327,
    longitude: 74.5872639,
    // latitude: 22.7731327,
    // longitude: 74.5872639,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }}
  >
    <Marker
      key={1}
      coordinate={{
        latitude: 22.7731327,
        longitude: 74.5872639,
        }}
        title={'Origin'}
        description={'Your PickUp'}
        />
    <Marker
      key={2}
      coordinate={{
        latitude: 22.8345,
        longitude: 74.2606,
        }}
        title={'Destine'}
        description={'Your Destination'}
        />
   </MapView>
   {/* <Page1/> */}
   <Page2/>
   {/* <Page3/> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    map: {
        width: width,
        height: halfHeight,
      },
      
})