import React, {  useState } from 'react';
import { Text, View,TouchableOpacity,Alert,Keyboard } from 'react-native';
import F_text_input from '../fonction/f_text_input' ;
import { Button, } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './C_styles'



export default function C_m ({navigation}) {
  const url="http://192.168.8.100/";
  const [val_password, set_val_password]= useState ('')
   const [val_userName, set_val_userName]= useState ('')
   const [erreur, set_erreur]= useState ('')

 const createThreeButtonAlert = () =>
    Alert.alert("Type d'utilisateur", 'Inscrivez vous en tant que', [
      {
        text: 'Bailleur',
        onPress: ()=>navigation.navigate('inscriptionBailleur'),
      },
      {
        text: 'Client',
        onPress: ()=>navigation.navigate('inscriptionLocataire'),
      },
    ]);


    login = () =>{
      
      
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(val_userName==""){
        //alert("Please enter Email address");
        set_erreur(' veillez entrez un Email  ');
        
      }
      
      else if(reg.test(val_userName) === false)
      {
      //alert("Email is Not Correct");
      set_erreur('Email est incorrect');
      // return false;
        }
  
      else if(val_password==""){
        set_erreur('Veillez entrez un mots de passe ');
      }
      else{
      
        fetch(url+'test1.php',{
          method:'post',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
            // we will pass our input data to server
            email_Connexion: val_userName,
            password_Connexion: val_password
          })
          
        })
        .then((response) => response.json())
         .then((responseJson)=>{
          AsyncStorage.setItem('key', responseJson[1])
          .then(() => {
            console.log('Valeur stockée avec succès !');
          })
          .catch(error => {
            console.log('Erreur lors du stockage de la valeur :', error);
          });
          
         
           if(responseJson[0] == "bailleur"){
             // redicrection vers la page du bailleur
             navigation.navigate('bailleur')
           }else if(responseJson[0] == "locataire"){
            // redicrection vers la page du locataire
            navigation.navigate('Locataires')
           }
           else{
            set_erreur(responseJson);
           }
         })
         .catch((error)=>{
         console.error(error);
         });
        }
        
      Keyboard.dismiss();
    }
    

   return (
        

    <View  style ={styles.container}>

      <Text style={styles.paragraph1}>
          Connexion
      </Text>
      <View style={{justifyContent: "center",alignItems: "center"}}>
        <Text style={{marginHorizontal: 10,marginVertical: 10,color:'red'}}>{erreur}</Text>
      </View>
      
      <F_text_input
        val_state={val_userName} 
        val_set_state={set_val_userName}
        val_placehorder ={"Nom utilisateur"}
        val_icon={'person-sharp'} />

      <F_text_input
        val_state={val_password} 
        val_set_state={set_val_password}
        val_placehorder ={"Mots de passe"}
        val_icon={'lock-closed'} />
      
      
       <Button style={styles.containerStyle}
        title="ok"
        size='sm'
        color="#0000ff"
        onPress={login}
      />
      
<View  style ={styles.viewtouch}>
      <Text style ={{fontSize:15}}>
          allez faire une 
      </Text>
      <TouchableOpacity style ={styles.touch}  onPress={createThreeButtonAlert} >
      <Text style ={{color:'#0000ff',fontSize:15}}>
           inscription!
      </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
  
}
 

 