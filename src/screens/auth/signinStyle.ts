import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#161515',
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    alignItems: 'center',
  },
  skipText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
  },
  titleText: {
    color: 'white',
    fontSize: 38,
    fontFamily: 'LufgaBold',
    fontWeight: 700,
  },
  signContainer: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    gap: 22,
    justifyContent: 'center',
  },
  signText: {
    color: '#CCFA4C',
    fontSize: 22,
    fontFamily: 'LufgaRegular',
    fontWeight: 400,
  },
  signup: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'LufgaRegular',
    fontWeight: 400,
  },
  line: {
    width: 1,
    height: 37,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    paddingHorizontal: 34,
    paddingVertical: 27,
    backgroundColor: '#222121',
    marginTop: 24,
    fontFamily: 'LufgaRegular',
    fontWeight: 400,
    fontSize: 16,
    borderColor: '#CCFA4C',
    borderWidth: 1,
    borderRadius: 50,
  },
  buttonContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:24,
  },
  rememberWrapper:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:7,
  },
  rememberText:{
    color:'white',
    fontSize:16,
    fontFamily:'LufgaRegular',
    fontWeight:400,
    marginRight:7,
  },
  forgetText:{
    color:'white',
    fontSize:16,
    fontFamily:'LufgaRegular',
    fontWeight:400,
  },
  circle:{
    width:16,
    height:16,
    borderRadius:100,
    backgroundColor:'#CCFA4C',
    borderWidth:1,
    borderColor:'#CCFA4C',
  }
});

export default styles;
