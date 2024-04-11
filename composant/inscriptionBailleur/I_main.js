import { Text, View,TouchableOpacity,Keyboard ,KeyboardAvoidingView} from 'react-native';
import React, { useState } from 'react';
import F_text_input from '../fonction/f_text_input' ;
import { Button, } from '@rneui/themed';

import styles from './I_styles'



export default function I_m ({navigation}) {
  
  const url="http://192.168.1.122/"

   const [val_userName, set_val_userName]= useState ('')
    const [val_password, set_val_password]= useState ('')
    const [val_confirpassword, set_val_confirpassword]= useState ('')
     const [val_numero, set_val_numero]= useState ('')
     const [val_mail, set_val_mail]= useState ('')
     const [erreur, set_erreur]= useState ('')

    // le probleme que je rencontre est sur mon login
    login = () =>{
      
      //******** initialisation de notre expression regulier *************/
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      let regNumero= /^6(2|[5-9])[0-9]{7}$/;
      if(val_mail=="" || val_password=="" || val_numero==""|| val_password==""|| val_confirpassword=="" ){
        //alert("Please enter Email address");
        set_erreur(' Veillez remplir tous les champs s\'il vous plait! ');
        
      }
      else if(val_userName.length<3){
        set_erreur('Votre nom doit avoir 3 characteres minimum!');

      }
      else if(regNumero.test(val_numero) === false){
        set_erreur('Votre numero est incorrect !');

      }
      else if(reg.test(val_mail) === false)
      {
        //alert("Email is Not Correct");
        set_erreur('Email est incorrect!');
        // return false;
        }
  
      else if(val_password.length<8){
        set_erreur('mots de passe : minimum 8 characteres requis!');
      }
      
      
      else if(val_confirpassword!=val_password){
        set_erreur('Les deux mots de passe doivent etre identique!');

      }
      else{
      
        fetch(url+'api_connexion.php',{
          method:'post',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
            // nous envoyons notre formulaire a notre api php
            email_inscription: val_mail,
            password_inscription: val_password,
            numero_inscription: val_numero,
            userName_inscription: val_userName,
            id_inscription: '2'
          })
          
        })
        .then((response) => response.json())
         .then((responseJson)=>{
         alert(responseJson)
            // redicrection vers la page du locataire
            navigation.navigate('connexion')
          
           
         })
         .catch((error)=>{
         console.error(error);
         });
        }
      
      Keyboard.dismiss();
    }
    


   return (
        
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View  style ={styles.container}>

      <Text style={styles.paragraph1}>
          Inscription
      </Text>
      <View style={{justifyContent: "center",alignItems: "center"}}>
        <Text style={{marginHorizontal: 10,marginVertical: 10,color:'red'}}>{erreur}</Text>
      </View>

      <F_text_input
        val_state={val_userName} 
        val_set_state={set_val_userName}
        val_placehorder ={"Nom"}
        val_icon={'person-sharp'} />

         <F_text_input
        val_state={val_numero} 
        val_set_state={set_val_numero}
        val_placehorder ={"Numero"}
        val_icon={'call'} />
        <F_text_input
        val_state={val_mail} 
        val_set_state={set_val_mail}
        val_placehorder ={"E-mail"}
        val_icon={'mail'} />

      <F_text_input
        val_state={val_password} 
        val_set_state={set_val_password}
        val_placehorder ={"Mots de passe"}
        val_icon={'lock-closed'} />

         <F_text_input
        val_state={val_confirpassword} 
        val_set_state={set_val_confirpassword}
        val_placehorder ={"confimer le mots de passe"}
        val_icon={"checkbox"} />
 
       <Button style={styles.containerStyle}
        title="ok"
        size='sm'
        color="#0000ff"
        disabled ={val_userName && val_password ? false : true }
       onPress = {login}
       
      />

    </View>
    </KeyboardAvoidingView>
  );
}
 

 