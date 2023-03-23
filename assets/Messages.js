import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    container: {
        height: Dimensions.get('window').height-55,
    },
    conversation: {
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 15,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 0.3,
        height: 70,
        flexDirection: 'row',
        width: (Dimensions.get('window').width)
    },

    messages: {
        flex: 12,
        marginBottom: 45,
    },
    message: {
        fontSize: 15,
        flexShrink: 1,
        paddingLeft: 10,
        maxWidth: (Dimensions.get('window').width - 70),
        color: "rgba(0,0,0,0.6)",
        fontFamily: 'Poppins-Regular',
    },
    name: {
        borderColor: "#FFB84C",
        fontSize: 16,
        flexShrink: 1,
        paddingLeft: 10,
        fontWeight: 500,
        fontFamily: 'Poppins-Regular',
    },
    message_dp: {
        width: 40,
        height: 40,
        // resizeMode: 'contain'
    },
    message_body: {

    },
    top_nav: {
        width: '100%',
        flex: 0.1,
        paddingLeft: 13,
        backgroundColor: '#FFB84C',
        flexDirection: "row",
        color: "#ffff",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    links: {
        color: "#ffff",
    },
    screen_title: {
        color: "#ffff",
        fontSize: 25
    }
});

