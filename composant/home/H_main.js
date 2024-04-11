import React, { useEffect, useState } from 'react';
import { Text, ScrollView , SafeAreaView, View,  Alert} from 'react-native';
import { Button, CheckBox, } from '@rneui/themed';



// importer le style de ma parge home
import styles from './H_styles'

// importation de mes fonctions qui permet d'afficher mon logo de l'application
import LogoApp from '../fonction/log_Img'

//********* initialisation du serveur *********/
const url="http://192.168.8.100/"

// fonction qui affiche le 
const H_main = ({navigation}) => {
  const [count, setCount] = useState();
  const [images,setImages]=useState();
  

  fetchData= ()=>{
fetch(url+'test.php')
.then((response) => response.json())
.then((responseJson) =>{
 
  
responseJson.map((maison,index)=>{
    setCount(maison.infos_app);
    setImages(maison.image_app);
    
  });
})
.catch((error)=>{
console.error(error);
});
  }
  useEffect(() => {
    fetchData();
  }, []); // <- add empty brackets here

//  declaration de l'etat de ma checkbox 
const [Valeu_checkbox, set_Valeur_checkbox] = useState(false);



  return(
  
    <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>
        Bienvenue!
        </Text>

        <LogoApp chemin ={url+images } />
        
        <ScrollView style={styles.t_scrol}>
          <Text style={styles.paragraph1}>{count}
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
