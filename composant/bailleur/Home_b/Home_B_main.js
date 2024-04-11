import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importer la vue de ma premiere page das mon composant afficher


import Affiche from './Affiche_home';
import Detail from './Detail_home';


//  fonction qui me permet de navigue vers une autre page
 export default function App () {

  const Stack = createNativeStackNavigator();

  return (
    
   
      <Stack.Navigator >
        <Stack.Screen name="Affiche" component={Affiche} options={{headerShown: false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
      </Stack.Navigator>

  );
}

