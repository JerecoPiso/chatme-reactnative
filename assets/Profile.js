import { StyleSheet } from 'react-native'
const poppins = 'Poppins-Regular';
export default StyleSheet.create({
   
    container:{
        marginHorizontal: 10
    },
    divider:{
       
        padding: 2,
        
    },
    dividerTitle:{
        fontFamily: poppins,
        color: "#19a7ce",
        fontSize: 20,

    },
    gender:{
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderWidth: 0.5,
        position: "relative",
        borderRadius: 3
    },
    input:{
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderWidth: 0.5,
        paddingLeft: 4,
        height: 40,
        borderRadius: 3
    },
    label:{
        fontFamily: poppins,
        fontSize: 14,
        marginTop: 1
    },
    textCenter:{
        textAlign: "center",
        fontFamily: poppins,
        color: "white",
        fontSize: 16
    },
    updateBtn:{
        backgroundColor: "#19a7ce",
        marginTop: 10,
        padding: 10,
       
    }
});