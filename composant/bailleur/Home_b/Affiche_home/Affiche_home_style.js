import {StyleSheet} from 'react-native'
  const styles = StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 8,
    alignItems: 'center' ,
  
  },

container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center' ,
  
  },

 paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',  
  },

    HeightImg: {
      justifyContent:'center' ,
      width : 200,
      height : 200,
      borderRadius : 200/2,   
  },

  HeightImg3: {
     
      width : 50,
      height : 50,
      
  },

  HeightImg2: {
 alignItems : 'center',
      
  }, 
  
   viewInput: {
  flexDirection: 'row',
  backgroundColor: '#ffffff',
  margin: 5,
  borderRadius: 10
 
  },

 viewItemB: {
  marginVertical:5,
  flexDirection: 'row',
  alignItems: 'center' ,
   justifyContent:'center' ,
  backgroundColor: '#ffffff',
  
  },

   viewItem_add: {
  backgroundColor: '#ffffff',
  borderRadius: 10,
  margin: 5,
  },

    c_scrol: {
 flexDirection: 'center',
  },

  viewInput1: {
  flexDirection: 'row',
  justifyContent: 'center'
  },

 iconstyle: {
  marginHorizontal : 5   
  },
  
 touchstyle: {
  marginVertical : 5   
  },

containerStyle:{
                marginHorizontal: 120,
                marginVertical: 10,
              }

});
export default styles