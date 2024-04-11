import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importer la vue de ma premiere page das mon composant afficher
import H_main from './composant/home';
import I_mainB from './composant/inscriptionBailleur';
import I_mainL from './composant/inscriptionLocataire';
import C_main from './composant/connexion';
import B_main from './composant/bailleur';
import L_main from './composant/Locataires';


//  fonction qui me permet de navigue vers une autre page
export default function App() {
  const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
      <Stack.Navigator
        // retirer le nom de la page sur lequel je suis
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={H_main} />
        <Stack.Screen name="connexion" component={C_main} />
        <Stack.Screen name="inscriptionBailleur" component={I_mainB} />
        <Stack.Screen name="inscriptionLocataire" component={I_mainL} />
        <Stack.Screen name="bailleur" component={B_main} />
        <Stack.Screen name="Locataires" component={L_main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


