import {ScrollView, View,TouchableOpacity,KeyboardAvoidingView,Image  } from 'react-native';
import { TextInput } from "react-native-paper";
import { Button } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import React, { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Sous_add_style'

//************************** fonction principal de la page ****************/ 
export default function Home_B({navigation})
{

  //***************** initialisation du serveur ********************/ 
  const url="http://192.168.8.100/";

  //***************************** initiation des etats *********************/ 
  const [marker, setMarker] = useState(null)
  const [image, setImage] = useState("https://i.pinimg.com/736x/6b/bf/84/6bbf84605c40f64fb2c20eacfff2e068.jpg");
  const [image2, setImage2] = useState("https://i.pinimg.com/736x/6b/bf/84/6bbf84605c40f64fb2c20eacfff2e068.jpg");
  const [image3, setImage3] = useState("https://i.pinimg.com/736x/6b/bf/84/6bbf84605c40f64fb2c20eacfff2e068.jpg");
  const [val_type,set_val_type]=useState("");
  const [val_Quartier,set_val_Quartier]=useState("");
  const [val_Ville,set_val_Ville]=useState("");
  const [val_Description,set_val_Description]=useState("");
  const [val_latitude,set_val_latitude]=useState("");
  const [val_longitude,set_val_longitude]=useState("");
  const [val_id_user,set_val_id_user]=useState();
  const [nameImage1,set_nameImage1]=useState("");
  const [typeImage1,set_typeImage1]=useState("");
  const [nameImage2,set_nameImage2]=useState("");
  const [typeImage2,set_typeImage2]=useState("");
  const [nameImage3,set_nameImage3]=useState("");
  const [typeImage3,set_typeImage3]=useState("");
 

  //*************************** recuperation de l'id du user envoyer *************/ 
  AsyncStorage.getItem('key')
  .then(value => {
    set_val_id_user(value);
    console.log('Valeur récupérée avec succès :', value);
  })
  .catch(error => {
    console.log('Erreur lors de la récupération de la valeur :', error);
  });

  //******************** fonction pour recuperer la llatitude et la longitude la position de la maison  *************/ 
  const handleMapClick = event => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    set_val_latitude(latitude);
    set_val_longitude(longitude);

    console.log('Latitude :', latitude);
    console.log('Longitude :', longitude);
    setMarker(event.nativeEvent.coordinate)
    
  };

  

  const pickImage = async () =>
  {
    // Aucune demande d'autorisation n'est nécessaire pour lancer la bibliothèque d'images
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    
    if (!result.canceled) 
    { 
      
      if(image=="https://i.pinimg.com/736x/6b/bf/84/6bbf84605c40f64fb2c20eacfff2e068.jpg"){
        setImage(result.assets[0].uri);
        set_nameImage1(result.assets[0].fileName);
        set_typeImage1(result.assets[0].type);
      }
      else if(image!="https://i.pinimg.com/736x/6b/bf/84/6bbf84605c40f64fb2c20eacfff2e068.jpg"  && image2=="https://i.pinimg.com/736x/6b/bf/84/6bbf84605c40f64fb2c20eacfff2e068.jpg" ){
        setImage2(result.assets[0].uri);
        set_nameImage2(result.assets[0].fileName);
        set_typeImage2(result.assets[0].type);

      }else if(image2!="https://i.pinimg.com/736x/6b/bf/84/6bbf84605c40f64fb2c20eacfff2e068.jpg" &&  image3=="https://i.pinimg.com/736x/6b/bf/84/6bbf84605c40f64fb2c20eacfff2e068.jpg"){
        setImage3(result.assets[0].uri);
        set_nameImage3(result.assets[0].fileName);
        set_typeImage3(result.assets[0].type);
      }
     
      console.log(result.assets[0]);
      console.log(result.assets[0].fileName);
 
    } 
  };


 

  const Envoie = async () => {

  const formData = new FormData();
  formData.append('image1', {
    uri: image, // Chemin de l'image sélectionnée
    type: typeImage1, // Type d'image, à adapter si nécessaire
    name: nameImage1, // Nom de l'image, à adapter si nécessaire
  });
  formData.append('image2', {
    uri: image2, // Chemin de l'image sélectionnée
    type: typeImage2, // Type d'image, à adapter si nécessaire
    name: nameImage2, // Nom de l'image, à adapter si nécessaire
  });
  formData.append('image3', {
    uri: image3, // Chemin de l'image sélectionnée
    type: typeImage3, // Type d'image, à adapter si nécessaire
    name: nameImage3, // Nom de l'image, à adapter si nécessaire
  });
  formData.append('type_maison',val_type ); 
  formData.append('Quartier', val_Quartier );
  formData.append('Ville', val_Ville); 
  formData.append('Description',  val_Description);
  formData.append('latitude', val_latitude); 
  formData.append('longitude', val_longitude); 
  formData.append('id_user', val_id_user);

  axios.post(url+'upload.php', formData)
    .then(response => {
      // Traitement de la réponse du serveur
      alert(response.data);
      console.log(response.data);
      navigation.replace('bailleur');
    })
  .catch(error => {
    // Gestion des erreurs
   alert('erreur'+ error);
   console.error(error);
  });
 
  }
  
 
  
  return (
    
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    
      <ScrollView style={styles.t_scrol}>
        
        <View   style={styles.viewItem_add}>
      
          <View style={styles.viewItemB} >

            <TouchableOpacity   onPress={pickImage} >
              <Image source={{uri : image}} style={{ width : 120, height : 150,borderRadius : 10,margin:3 }}   />
            </TouchableOpacity>

            <TouchableOpacity   onPress={pickImage} >
              <Image source={{uri : image2}} style={{ width : 120, height : 150,borderRadius : 10, }}   />
            </TouchableOpacity>

            <TouchableOpacity   onPress={pickImage} >
              <Image source={{uri : image3}} style={{ width : 120, height : 150,borderRadius : 10,margin:3 }}   />
            </TouchableOpacity>
          
          </View>
          <TextInput
            label="Type de maison"
            editable
            maxLength={25}
            onChangeText={set_val_type}
            value={val_type}
            style={{padding: 12, backgroundColor: '#ffffff'}}
          />

          <TextInput
            label="Quartier de la maison"
            editable
            maxLength={25}
            onChangeText={set_val_Quartier}
            value={val_Quartier}
            style={{padding: 12, backgroundColor: '#ffffff'}}
          
          />

          <TextInput
            label="Ville de la maison"
            editable
            maxLength={25}
            onChangeText={set_val_Ville}
            value={val_Ville}
            style={{padding: 12, backgroundColor: '#ffffff'}}
          />

          <TextInput
            label="Description"
            multiline
            numberOfLines={8}
            editable
            maxLength={400}
            onChangeText={set_val_Description}
            value={val_Description}
            style={{padding: 12, backgroundColor: '#ffffff'}}
            
          />
            
        </View>
        <View style={styles.mapContainer}>

          <MapView
            //   ref={data}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            zoomEnabled={true}
            minZoomLevel={2}
            scrollEnabled={true}
            showsScale={true}
            zoomControlEnabled={true}
            zoomTapEnabled={true}
            // mapType={'satellite'}
            rotateEnabled={false}
            showsUserLocation={true}
            userLocationUpdateInterval={5000}
            showsMyLocationButton={true}
            loadingEnabled={true}
            showsCompass={true}
            onPress={handleMapClick}>
            {marker!=null?
            <Marker
              draggable
              coordinate={marker}
              onPress={()=>Alert.alert("vous avez clique sur votre position")}

            />:null}
          </MapView>
        </View>
        <View >
          <Button onPress={Envoie}  style={styles.containerStyle} size={"sm"} type="solid" title='enregistrez' color='#0000ff'/>
        </View>
        
      </ScrollView >
    </KeyboardAvoidingView>
      
  );
} 