import React,{useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { StyleSheet, View,Alert } from 'react-native';
import styles from './D_Style_Lct'

export default function App() {


  const [marker, setMarker] = useState(null)
  return (
    <View style={styles.mapcontainer}>

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
        onPress={(e) => setMarker(e.nativeEvent.coordinate)}
      >
{marker!=null?
        <Marker
          draggable
          coordinate={marker}
          onPress={()=>Alert.alert("test")}

        />:null}
</MapView>
</View>
  );
}