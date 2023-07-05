import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from "./src/screen/Index"

import * as React from 'react'


const Stack = createStackNavigator();

const Mystack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name ="Home" component={Index}
      options={{ /*Add here the egylire logo 
      and notification bell 
      and three stripes menu */}}/>

    </Stack.Navigator>
  )
}

function App() {

  return (
    <NavigationContainer>
      {Mystack()}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <App/>
  )
}

