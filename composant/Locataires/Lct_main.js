import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";

import search_L from './search_Lct'
import Setting_L from './Setting_Lct'
import Home_L from './Home_Lct'





export default function Lct_m () {
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
       
        return  <Icon name={ iconName} size={25} color ={color} />

        }

      })}
      >

        <Stack.Screen name="home" component={Home_L}    />
        <Stack.Screen name="search" component={search_L}   />
        <Stack.Screen name="settings" component={Setting_L}  />
       
       

      </Stack.Navigator>
   
   
  );
}
 

 