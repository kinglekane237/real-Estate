import * as React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importer la vue de ma premiere page das mon composant afficher

import Sous_home_Lct from './Sous_home_Lct';
import Detail_house_Lct from './Detail_house_Lct';


//  fonction qui me permet de navigue vers une autre page
 export default function App () {

  const Stack = createNativeStackNavigator();

  return (
    
   
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Sous_home_Lct" component={Sous_home_Lct} />
         <Stack.Screen name="Detail_house_Lct" component={Detail_house_Lct}  />
       
      </Stack.Navigator>

  );
}

