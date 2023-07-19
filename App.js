import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from "./src/screen/Index"
import IndexHeader from './src/comp/Index/Header/IndexHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import Booking from './src/screen/Booking';
import BookingHeader from './src/comp/Booking/Header/BookingHeader';
import FilterBooking from './src/screen/FilterBooking';
import Gallery from './src/screen/Gallery';
import Map from "./src/screen/Map"

const Stack = createStackNavigator();

const HomeStack = () => {

  return (

    <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen name ="Home" component={Index}
      options={{header:IndexHeader}}/>

      <Stack.Screen name ="Booking" component={Booking}
      options={{
        title:null,
        headerLeft:() => null,
        header:()=>{return null}
        }}/>
      <Stack.Screen name ="Filter" component={FilterBooking}
          options={{
            title:null,
            headerLeft:() => null,
            header:()=>{return null}
            }}/>
      <Stack.Screen name ="gallery" component={Gallery}
          options={{
            title:null,
            headerLeft:() => null,
            header:()=>{return null}
            }}/>

      <Stack.Screen name ="Map" component={Map}
          options={{
            title:null,
            headerLeft:() => null,
            header:()=>{return null}
            }}/>

    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "Home"
      screenOptions={({ route }) => ({
          tabBarIcon: ({color}) => {

            if (route.name === 'Home') {
            
              return <Ionicons name='home' size={24} color={color} />;
            } 
            else if (route.name === 'Book') {
              return <Ionicons name="book" size={24} color={color} />;
            } 
            else if (route.name === 'Services') {
              return <Ionicons name="apps-sharp" size={24} color={color} />
            }
            else if (route.name === 'Profile') {
              return <Ionicons name="md-person-circle-outline" size={24} color={color} />;
            }

          },
          tabBarActiveTintColor: '#d09082',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor:"#0a293b",
          tabBarInactiveBackgroundColor:"#0a293b",
          tabBarBackground:()=>{return (
            <View style={{width:"100%",height:"100%",backgroundColor:"#0a293b"}}></View>
          )},
          headerShown:false
    
        })}>

        <Tab.Screen name="Home" component={HomeStack}/>

        <Tab.Screen name="Book" component={() =>{
          return <View><Text>Dummy Page</Text></View>
        }} />

        <Tab.Screen name="Services" component={() =>{
          return <View><Text>Dummy Page</Text></View>}} />

        <Tab.Screen name="Profile" component={() =>{
          return <View><Text>Dummy Page</Text></View>}} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <App/>
  )
}

