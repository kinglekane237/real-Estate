import { View,TextInput } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import styles from './f_styles';

type Pvaleur = {
  val_state:'string' ,
  val_set_state: 'string',
  val_placehorder : 'string' ,
  val_icon:'string'
}

export default function F_text_input(props:Pvaleur){
  return(
    
<View style ={styles.viewInput} >
   <Icon name={props.val_icon} size={35} color="#0000ff" />
   <TextInput
        editable
        maxLength={25}
        onChangeText={props.val_set_state}
        value={props.val_state}
        placeholder={props.val_placehorder}
        style={{padding: 12}}
      />
   </View>
)
   }