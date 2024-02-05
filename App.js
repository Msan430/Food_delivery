import React, { useState, useEffect, useRef } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { Restaurant, OrderDelivery, SearchScreen } from './screens'
import Tabs from './navigation/tabs'
import themeContext from './constants/config/themeContext';
import theme from './constants/config/theme';
import { EventRegister } from 'react-native-event-listeners';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const App = () => {
    const [mode, setMode] = useState(false);

    useEffect(() => {
        let eventListener = EventRegister.addEventListener(
            "changeTheme",
            (data) =>{
              setMode(data);
             
            }
        );
        return () => {
            EventRegister.removeEventListener(eventListener);
        };
    });
   
    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    
      return (
        <themeContext.Provider value = {mode === true ? theme.dark : theme.light}>
        <><NavigationContainer>
                  <Stack.Navigator
                      screenOptions={{
                          headerShown: false
                      }}
                      initialRouteName={'Home'}
                  >
                      <Stack.Screen name="Home" component={Tabs} />
                      <Stack.Screen name="Search" component={Tabs} />
                      <Stack.Screen name="Restaurant" component={Restaurant} />
                      <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                      <Stack.Screen name="Another" component={Restaurant} />
                  </Stack.Navigator>
              </NavigationContainer></>
         </themeContext.Provider>
      );

};

export default App;