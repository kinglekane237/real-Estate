
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importer la vue de ma premiere page das mon composant afficher

import D_main from './D_main';
import D_localisation from './D_localisation';


//  fonction qui me permet de navigue vers une autre page
 export default function App () {

  const Stack = createNativeStackNavigator();

  return (
    
   
      <Stack.Navigator >
        <Stack.Screen name="D_main" component={D_main} options={{headerShown: false}}/>
         <Stack.Screen name="D_localisation" component={D_localisation}  />
       
      </Stack.Navigator>

  );
}

