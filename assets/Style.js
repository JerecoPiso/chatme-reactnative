import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

export default StyleSheet.create({
  form: {
    paddingHorizontal: 18,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F6F1F1"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    paddingHorizontal: 18
  },
  button_login: {
    paddingVertical: 15,
    backgroundColor: "#19A7CE",
    borderRadius: 3
  },
  google_login:{
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: "rgb(255,255,255)",
      borderRadius: 3,
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderColor: "rgba(50, 50, 93, 0.25)",
      borderWidth: 0.2
  },
  googleTextBtn:{
    verticalAlign: "middle",
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginLeft: 13,
  
  },
  center: {
    textAlign: "center",
    fontWeight: 500,
    color: "#ffff",
    fontFamily: 'Poppins-Regular',
  },
  container: {
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    textAlign: "center",
    marginTop: StatusBar.currentHeight,
    // backgroundColor: "rgb(209, 220, 224)",
   
   
  },
  logo:{
    fontSize: 40,
    color: "#19A7CE",
    fontWeight: 600,
    textAlign: "center",
    marginTop: -40,
    marginBottom: 10,
    // backgroundColor: '#FFB84C',
    fontFamily: 'Poppins-Regular',
    borderRadius: 3
  },
  input: {
    height: 48,
    marginTop: 3,
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    borderColor: "rgba(25, 167, 206, 0.4)",
    backgroundColor: "#ffff",
    // color: "#ffff",
    fontFamily: 'Poppins-Regular',
    borderRadius: 3,
  },
  right: {
    // flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
   
  },
  forgot_pass: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 2,
    marginBottom: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    marginHorizontal: 20
  },
  modalView: {
    marginHorizontal: 20,
    width: (Dimensions.get('window').width - 40),
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  signup_text :{
    // color: "#ffff",
    fontFamily: 'Poppins-Regular',
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    
  },
  signup: {
    color: "#19A7CE",
    fontWeight: 500,
    
  }
});
