import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        // backgroundColor: "red",
       
        flex: 1
    },
    dp: {
        width: 50,
        height: 50,
    },
    linkText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        // paddingTop: 10,
        verticalAlign: 'middle'
    },
    Links:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    LinksItem:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    LinksItemArrow:{
        flexDirection: 'row-reverse',

    },
    icon:{
        width: 40,
        verticalAlign: 'middle',
    },
    name:{
        verticalAlign: 'middle',
        fontSize: 23,
        marginLeft: 10,
        fontFamily: 'Poppins-Regular',
        fontWeight: 700
    },
    profileText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontWeight: 700,
    },
    notifText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontWeight: 700,
    },
    settings:{
        marginTop: 10
    },
    user_dp_name:{
        paddingHorizontal: 10,
      
        marginTop: 10,
        flexDirection: 'row',
    },
})