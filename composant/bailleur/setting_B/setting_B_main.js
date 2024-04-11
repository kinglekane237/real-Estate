import { Text, View,TouchableOpacity,Alert } from 'react-native';
import F_maison_bayeur from '../../fonction/f_maison_bayeur'

import styles from './sitting_B_styles'
export default function Setting_B(){
  return (
        

    <View  style ={styles.container}>
      <F_maison_bayeur/>
    </View>
  );
}