import  { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    activePeople:{
        // marginHorizontal: 10,
        paddingHorizontal: 10,
        flex: 11.5
        // borderColor: "red",
        // borderWidth: 2
    },
    
    activeText:{
        marginTop: 8,
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 2,
        fontFamily: 'Poppins-Regular',
    },
    container:{
        flex: 12
    },
    dot:{
        verticalAlign: 'middle'
    },
    people:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20
    },
    peopleNameLogo:{
        flex: 1,
        flexDirection: 'row',
    },
    peopleDp:{
        height: 35,
        width: 35
    },
    name:{
        verticalAlign: 'middle',
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Poppins-Regular',
    },
    scroll:{
        // backgroundColor: "red",
        // paddingHorizontal: 15
    },
    search:{
        flex: 1,
        fontSize: 15,

    },
    search_container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: 10,
        // marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 0.5
    },
    searchLogo: {

        marginRight: 10,
    }
})