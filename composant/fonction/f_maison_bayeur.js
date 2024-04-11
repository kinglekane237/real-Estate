import { Text, View,TouchableOpacity,Alert,Image } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import React, { useState } from 'react';

import styles from './f_styles';
type allprops={
  uri:'string'
}

export default function F_maison_bayeur (props:allprops) {

  const [desactive_add, set_desactive_add] = useState(true)
   const [desactive_color, set_desactive_color] = useState('')
   

   return (
    
<View style={styles.viewItemB}  >
<View   >
    <View   style={styles.viewInput1}>
       <Icon name="image" size={100} color="#0000ff" style={styles.iconstyle} />
      <Icon name="image" size={100} color="#0000ff"  style={styles.iconstyle}/>
    <Icon name="image" size={100} color="#0000ff"  style={styles.iconstyle}/>
    </View>

 
<View   style={styles.viewInput1}>
        <Text >
           Bienvenue!
        </Text>
       
         <Text>
          Bienvenue!
        </Text>
    </View>

    </View>

      <View style={styles.iconstyle} >
       <TouchableOpacity disabled={desactive_add} onPress={()=>set_desactive_add(!
       desactive_add)} style={styles.touchstyle} >
      <Icon name="add-circle" size={30} />
       </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}style={styles.touchstyle}>
      <Icon name="pencil" size={30}  />
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{set_desactive_add(!desactive_add), set_desactive_color("#008000")} } disabled={desactive_add? false : true}    style={styles.touchstyle}>
      <Icon name="close-circle" size={30}  />
      </TouchableOpacity>

     </View>

     </View>
  );
}
 
