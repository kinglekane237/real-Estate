import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importer la vue de ma premiere page das mon composant afficher


import Sous_add_main  from './Sous_add';
import afficher from '../Home_b';


//  fonction qui me permet de navigue vers une autre page
 export default function App () {

  const Stack = createNativeStackNavigator();

  return (
    
   
      <Stack.Navigator>
        <Stack.Screen name="Sous_add_main" component={Sous_add_main} options={{headerShown: false}}/>
        
      </Stack.Navigator>

  );
}

