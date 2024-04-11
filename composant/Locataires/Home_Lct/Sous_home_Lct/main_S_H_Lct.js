import { Text, View,TouchableOpacity,Alert,Image,FlatList,Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState,useEffect  } from 'react';

import styles from './main_S_Styles'


export default function Main_S_H_Lct ({navigation}) {
    
    const url="http://192.168.8.100/";
  
   const [data, set_data] = useState();

  
  
  

const OpenD = async (val) =>{
 
  
  if(val!=null){
    try {
      await AsyncStorage.setItem('idHouse',val);
      console.log('Données enregistrées avec succès !');
      console.log(val);
    } catch (error) {
      console.log('Erreur lors de l\'enregistrement des données : ', error);
    }
          navigation.navigate('Detail_house_Lct'); 
  }
}


const CustomButton = (valor) => {
  
  return (
    <TouchableOpacity  style={{backgroundColor: '#0000ff',borderRadius: 10,padding: 10,alignItems: 'center'}}
    onPress={()=>{OpenD(valor)} }>
    <Text style={{color: 'white',fontSize: 10, fontWeight: 'bold',}}>voir plus</Text>
  </TouchableOpacity>
  );
};

  fetchData= async () =>
   {
    fetch(url+'afficheAllHouse.php',
    {
        method:'post',
        header:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
       
    })
      
      .then((response) => response.json())
      .then((responseJson)=>{
        console.log(responseJson);
        set_data(responseJson);
        console.log(responseJson);
      })
      .catch((error)=>
      {
        console.error(error); 
      });
  }
    
      
      useEffect(() => {
        fetchData();

      }, []); 
   const renderItem = ({ item } ) => (
    
    <View style={styles.viewItemB} >
<View  >
    <View   style={styles.viewInput1}>
    
    <Image source={{uri : url+item.image1}} style={{ width : 110, height : 150,borderRadius : 10,margin:1 }}   />
    <Image source={{uri :url+item.image2}} style={{ width : 110, height : 150,borderRadius : 10,margin:1 }}   />
    <Image source={{uri : url+item.image3}} style={{ width : 110, height : 150,borderRadius : 10,margin:1 }}   />
    </View>

 
<View   style={styles.viewInput1}>
        <Text style={styles. paragraph1}>
        
          {item.quartier} :
      
         {item.type_house}
        </Text>
        <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'flex-end',}} >
           {CustomButton(item.id_house)} 
          
        </View>
    </View>

    </View>

     </View>
  );
 
   return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_house}
      />
      </View>
     
  );
}
 
