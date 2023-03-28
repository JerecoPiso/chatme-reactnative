import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1,
        flexDirection: "column"
    },
    divider:{
        backgroundColor: "#D1DCE0",
        marginTop: 5,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10
       // flex: 1
    },
    dp:{
        width: 90,
        height: 90,
        marginTop: 10
    },
    image:{
      
        alignItems: "center",
     
    },
    name:{
        fontSize: 23,
        fontWeight: 600,
        fontFamily: 'Poppins-Regular',
        marginTop: 5
    },
    linkText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        // paddingTop: 10,
        verticalAlign: 'middle'
    },
    Links:{
        // paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
 
    },
    LinksItem:{
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: "center",
        alignItems: "center"
        
    },
    LinksItemArrow:{
        flexDirection: 'row-reverse',

    },
    icon:{
        width: 50,
        verticalAlign: 'middle',
        // borderColor: "red", borderWidth: 2
    },

})