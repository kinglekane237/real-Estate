import {Image, View} from 'react-native'

import styles from './f_styles' 
type Kchemin = {
  chemin:'string',
}
export default function LogoApp (props:Kchemin){
  return(
    <View style = {styles.HeightImg2}>
      <Image source={{uri:props.chemin} }style = {styles.HeightImg}/>
    </View>

  )
}