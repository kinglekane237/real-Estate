import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";




import add from './add_b'
import search from './search_b'
import setting from './setting_B'
import Home from './Home_b'


import styles from './B_styles'



export default function B_m () {
   const Stack = createBottomTabNavigator();
   
   

   return (

 
      <Stack.Navigator 
      // retirer le nom de la page sur lequel je suis
      // screenOptions={{headerShown: false}}
         screenOptions={ ({route})=>({
        tabBarIcon: ({focused,color, size})=>{
          
        let iconName;
        if (route.name =='home'){
          iconName=focused ? 'home' : 'home-outline'
        } 
        else if (route.name =='settings'){
          iconName =focused ? 'settings' : 'settings-outline'
        }
        else if(route.name =='search'){
          iconName =focused ? 'search' : 'search-outline'
        }
        else if(route.name =='add_house'){
          iconName =focused ? 'add-circle' : 'add-circle-outline'
        }
        return  <Icon name={ iconName} size={25} color ={color} />

        }

      })}
      >

        <Stack.Screen name="home" component={Home}    />
        <Stack.Screen name="add_house" component={add}   />
        <Stack.Screen name="search" component={search}   />
        <Stack.Screen name="settings" component={setting}  />
       
       

      </Stack.Navigator>
   
   
  );
}
 

 