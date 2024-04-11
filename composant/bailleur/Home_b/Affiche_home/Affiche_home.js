import { Text, View,TouchableOpacity,Alert,Image,FlatList } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState,useEffect  } from 'react';
import styles from './Affiche_home_style';



export default function F_maison_bayeur ({navigation}) {
    
    const url="http://192.168.8.100/";
  const [desactive_add, set_desactive_add] = useState(true)
   const [desactive_color, set_desactive_color] = useState('')
   const [valeur, set_valeur] = useState();
   const [data, set_data] = useState();
   const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [val_type,set_val_type]=useState("");
  const [val_Quartier,set_val_Quartier]=useState("");
  const [val_Ville,set_val_Ville]=useState("");
  const [val_Description,set_val_Description]=useState("");
  const [val_latitude,set_val_latitude]=useState("");
  const [val_longitude,set_val_longitude]=useState("");
  
  
 
//    const TextPreede = (val1,val2,val3,val4,val5,val6,val7,val8,val9)=>{
//     setImage(val1);
//     setImage2(val2);
//     setImage3(val3);
//     set_val_type(val4);
//     set_val_Quartier(val5);
//     set_val_Ville(val6);
//     set_val_Description(val7);
//     set_val_latitude(val8);
//     set_val_longitude(val9);

// if(image!=""){
//     const donnée = [
//       ['key1', image],
//       ['key2', image2],
//       ['key3', image3],
//       ['key4', val_type],
//       ['key5', val_Quartier],
//       ['key6', val_Ville],
//       ['key7', val_Description],
//       ['key8', val_latitude],
//       ['key9', val_longitude]
//     ];
//     AsyncStorage.multiSet(donnée);
//     console.log(donnée);
//   }
    
//    }


  fetchData= async () => {

    //*************************** recuperation de l'id du user envoyer *************/ 
   
    const value = await AsyncStorage.getItem('key');
        if (value !== null) {
    fetch(url+'api_afficheMaison.php',{
        method:'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body:JSON.stringify({
          // we will pass our input data to server
          id_user: value,
          
        })
        
      })
      
      .then((response) => response.json())
      .then((responseJson)=>{
        
       set_data(responseJson);

       console.log(responseJson);
    })
    .catch((error)=>{
    console.error(error);
    });
}
    
      }
      useEffect(() => {
        fetchData();

      }, []); 
   const renderItem = ({ item }) => (
  
    <TouchableOpacity style={styles.viewItemB} onPress={()=>navigation.navigate("Detail")  } >
<View   >
    <View   style={styles.viewInput1}>
    <Image source={{uri : url+item.image1}} style={{ width : 100, height : 150,borderRadius : 10,margin:3 }}   />
    <Image source={{uri :url+item.image2}} style={{ width : 100, height : 150,borderRadius : 10,margin:3 }}   />
    <Image source={{uri : url+item.image3}} style={{ width : 100, height : 150,borderRadius : 10,margin:3 }}   />
    </View>

 
<View   style={styles.viewInput1}>
        <Text >
          {item.quartier} :
      
         {item.type_house}
        </Text>
    </View>

    </View>

      <View style={styles.iconstyle} >
       <TouchableOpacity disabled={desactive_add} onPress={()=>set_desactive_add(!
       desactive_add)} style={styles.touchstyle} >
      <Icon name="add-circle" size={30} />
       </TouchableOpacity>

        

       <TouchableOpacity onPress={()=>{set_desactive_add(!desactive_add), set_desactive_color("#008000")} } disabled={desactive_add? false : true}    style={styles.touchstyle}>
      <Icon name="close-circle" size={30}  />
      </TouchableOpacity>

     </View>

     </TouchableOpacity>
  );
  
   return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_house.toString()}
      />
   
    

      </View>
     
  );
}
 
