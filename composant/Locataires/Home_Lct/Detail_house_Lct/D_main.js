import React, { useState, useEffect } from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { Text, View,TouchableOpacity,Alert,ScrollView,Image,Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/Ionicons";


import styles from './D_Style_Lct'
export default function Home_Lct({navigation}){


  const url="http://192.168.8.100/";
   const [image1, set_image1] = useState(true);
   const [image2, set_image2] = useState('');
   const [image3, set_image3] = useState(true);
   const [type_house, set_type_house] = useState('');
   const [ville_house, set_ville_house] = useState(true);
   const [quartier, set_quartier] = useState('');
   const [description, set_description] = useState(true);
   const [latitudes, set_latitude] = useState('');
   const [longitudes, set_longitude] = useState(true);
   const [nom_user, set_nom_user] = useState('');
   const [email, set_email] = useState(true);
   const [numero, set_numero] = useState('');
   const [desactive_add, set_desactive_add] = useState(true);
   const [desactive_color, set_desactive_color] = useState('');

   const initiatePhoneCall = () => {
    Linking.openURL(`tel:${numero}`)
      .catch(() => {
        console.log('Impossible d\'initier l\'appel');
      });
  };

   fetchData= async () => {

    //*************************** recuperation de l'id du user envoyer *************/ 
   
    const valeur = await AsyncStorage.getItem('idHouse');
    
        if (valeur !==null) {

    fetch(url+'api_DetailleMaison.php',{
    method:'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      // we will pass our input data to server
      id_maison : valeur,
    })
    
  })
  .then((response) => response.json())
   .then((responseJson)=>{
    set_image1(responseJson.image1);
    set_image2(responseJson.image2);
    set_image3(responseJson.image3);
    set_type_house(responseJson.type_house);
    set_ville_house(responseJson.ville_house)
    set_quartier(responseJson.quartier);
    set_description(responseJson.descriptions)
    set_latitude(responseJson.latitude);
    set_longitude(responseJson.longitude);
    set_nom_user(responseJson.nom_user);
    set_email(responseJson.e_mail);
    set_numero(responseJson.numero);
  
   })
   .catch((error)=>{
   console.error(error);
   });
  }
}
  
  useEffect(() => {
    fetchData();

  }, []);



  return (
        
    <ScrollView style={styles.t_scrol}>

    <View  style ={styles.container}>
     <View style={styles.viewItemB}  >
<View   >
    <View   style={styles.viewInput1}>
    <Image source={{uri : url+image1}} style={{ width : 118, height : 150,borderRadius : 10,margin:3 }}   />
    <Image source={{uri :url+image2}} style={{ width : 118, height : 150,borderRadius : 10,margin:3 }}   />
    <Image source={{uri : url+image3}} style={{ width : 118, height : 150,borderRadius : 10,margin:3 }}   />
    </View>



<View   style={styles.viewInput1}>
        <Text style={styles.paragraph}>
           Type de maison : 
        </Text>
       
         <Text style={styles.paragraph1}>
          { type_house}
        </Text>
    </View>

    <View   >
        <Text style={styles.paragraph4}>
           Descriprtion de la maioson :
        </Text>
       
         <Text style={styles.paragraph3}>
          {description}
        </Text>
    </View>


 
<View   style={styles.viewInput1}>
        <Text style={styles.paragraph}>
           Situe a :
        </Text>
       
         <Text style={styles.paragraph1}>
          {quartier}
        </Text>
    </View>

    <View   style={styles.viewInput1}>
        <Text style={styles.paragraph}>
           Dans la ville de :
        </Text>
       
         <Text style={styles.paragraph1}>
         {ville_house}
        </Text>
    </View>

    <View   style={styles.viewInput1}>
        <Text style={styles.paragraph}>
           Nom du bailleur :
        </Text>
       
         <Text style={styles.paragraph1}>
         {nom_user}
        </Text>
    </View>

    <View   style={styles.viewInput1}>
        <Text style={styles.paragraph}>
          Telephone du bailleur :
        </Text >
       
         <Text style={styles.paragraph1}>
         {numero}
        </Text>
    </View>
    
    <View style={styles.mapContainer}>
    <MapView
            //   ref={data}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            initialRegion={{latitude: latitudes,
              longitude: longitudes,
              latitudeDelta: 26.299535,
              longitudeDelta: 26.701556,}}
            >
          
            <Marker
              coordinate={{ latitude : latitudes, longitude :longitudes}}
            />
          </MapView>
        </View>
 <TouchableOpacity style={styles.viewItemB1} onPress={initiatePhoneCall}>
    <Icon name="call-sharp" size={35} color="#FDFFFC" style={styles.iconstyle} />
    </TouchableOpacity >
    </View>
     </View>
    </View>
    </ScrollView >

  );
}