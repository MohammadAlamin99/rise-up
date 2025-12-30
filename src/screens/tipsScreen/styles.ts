import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:146,
    },
    image: {
        width: '100%',
        height: '100%',
  justifyContent: 'center',
    },
    title:{
        fontSize: 38,
        fontWeight:700,
        color:'white',
        maxWidth:253,
        marginBottom:9,
    },
    description:{
        color:'white',
        fontSize:17,
    },
    button:{
        paddingVertical:18,
        alignItems:'center',
        marginTop:44,
        borderRadius:100,
        backgroundColor:'#CCFA4C',
    },
    buttonText:{
        color:'#161515',
        fontSize:18,
        fontWeight:700,
    },

    pagination: {
        marginTop:48,
  alignSelf: 'center',
  flexDirection: 'row',
  gap:10
},

dot: {
  width: 16,
  height: 16,
  backgroundColor: 'transparent',
  borderWidth:2,
  borderColor:'#CCFA4C',
  marginHorizontal: 4,
  borderRadius:100, 
},

activeDot: {
  backgroundColor: '#CCFA4C',
},

})

export default styles;