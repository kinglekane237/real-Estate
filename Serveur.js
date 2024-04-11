import React, { useState } from 'react';
import { Text, ScrollView , SafeAreaView, View,  Alert} from 'react-native';
import { Button, CheckBox, } from '@rneui/themed';



// importer le style de ma parge home
import styles from './H_styles'

// importation de mes fonctions qui permet d'afficher mon logo de l'application
import LogoApp from '../fonction/log_Img'

// fonction qui affiche le 
const H_main = ({navigation}) => {
  
//  declaration de l'etat de ma checkbox 
const [Valeu_checkbox, set_Valeur_checkbox] = useState(false);

  return(
  
    <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>
        Bienvenue!
        </Text>

        <LogoApp chemin ={require('../../assets/logo.webp') } />
        
        <ScrollView style={styles.t_scrol}>
          <Text style={styles.paragraph1}>
           Don't bother typing “lorem ipsum” into Google translate. If you already tried, you may have gotten anything from "NATO" to "China", depending on how you capitalized the letters. The bizarre translation was fodder for conspiracy theories, but Google has since updated its “lorem ipsum” translation to, boringly enough, “lorem ipsum”.

One brave soul did take a stab at translating the almost-not-quite-Latin. According to The Guardian, Jaspreet Singh Boparai undertook the challenge with the goal of making the text “precisely as incoherent in English as it is in Latin - and to make it incoherent in the same way”. As a result, “the Greek 'eu' in Latin became the French 'bien' [...] and the '-ing' ending in 'lorem ipsum' seemed best rendered by an '-iendum' in English.”

Here is the classic lorem ipsum passage followed by Boparai's odd, yet mesmerizing version:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”
Boparai's version:

“Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life. May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank; a proverb, yeast; or else they tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an enclosed valley’s always a laugh. In acquisitiendum the Furies are Earth; in (he takes up) a lump vehicles bien.”
Nick Richardson described the translation “like extreme Mallarmé, or a Burroughsian cut-up, or a paragraph of Finnegans Wake. Bits of it have surprising power: the desperate insistence on loving and pursuing sorrow, for instance, that is cheated out of its justification – an incomplete object that has been either fished for, or wished for.”

          </Text>

                <CheckBox
           checked={Valeu_checkbox}
           onPress={()=>set_Valeur_checkbox(!Valeu_checkbox)}
           title="j'accepte les conditions"    
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
         />
            <Button style={styles.containerStyle}
        title="commencer"
        size='sm'
        color="#0000ff"
        disabled ={Valeu_checkbox ? false : true}
        onPress={() => navigation.navigate('connexion')}
      />
        </ScrollView>  
    </SafeAreaView>
    );
}
export default H_main
