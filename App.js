import React from 'react';
import Lab3 from './src/screens/lab3'
import Splash from './src/screens/auth/Splash';
import Login from './src/screens/auth/Login';
import SigUp from './src/screens/auth/SingUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab4 from './src/screens/auth/lab4';

const Stack = createNativeStackNavigator()
const App = () => {
  return (
  // <NavigationContainer>
  //   <Stack.Navigator>
  //   <Stack.Screen name='Home' component={Splash}/>
  //     <Stack.Screen name='Signup' component={SigUp}/>
  //     <Stack.Screen name='Login' component={Login}/>
  //   </Stack.Navigator>
  //   </NavigationContainer>
  // <Lab3></Lab3>
  <Lab4></Lab4>
  );
  
};

export default App;
