import {StyleSheet} from 'react-native'
  const styles = StyleSheet.create({
     
   container: {
    justifyContent: 'center',
    padding: 8,
  },
 

  viewItemB: {
  flexDirection: 'row',
  alignItems: 'center' ,
   justifyContent:'center' ,
  backgroundColor: '#ffffff',
  
  },

  viewItemB1: {
  flexDirection: 'row',
  alignItems: 'center' ,
   justifyContent:'center' ,
    borderRadius : 200/2, 
     marginHorizontal :120, 
  backgroundColor: '#41CA0A',
  padding: 25,
  marginVertical: 8,
  
  },

  viewInput1: {
  flexDirection: 'row',
    marginVertical : 15,
  },

   iconstyle: {
  marginHorizontal : 5   
  },
   paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',  
  },
  paragraph3: {
    fontSize: 20,
    
  },

  paragraph4: {
    fontSize: 20,
    fontWeight: 'bold', 
  },
     paragraph1: {
 fontSize: 20,
    textAlign: 'center',  
  },

  
    mapcontainer: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mapContainer: {
  
    height: 200,
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },

            
});
export default styles
