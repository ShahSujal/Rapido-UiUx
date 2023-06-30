import { StyleSheet, Text, View,StatusBar} from 'react-native';
import HomeScreen from './pages/HomeScreen';
import Context from './context/Context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartingPoint from './pages/StartingPoint';
import Payment from './pages/Payment';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
    {/* <HomeScreen/> */} 
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='StartingPoint' component={StartingPoint}/>
        <Stack.Screen name='Page1' component={Page1}/>
        <Stack.Screen name='Page2' component={Page2}/>
        <Stack.Screen name='Page3' component={Page3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default ()=>{
return(
  <Context>
    <App/>
  </Context>
)
}
