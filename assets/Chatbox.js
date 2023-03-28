import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  back: {
    verticalAlign: 'middle',
    marginRight: 10

  },
  received_message: {
    height: 'auto',
    width: 'auto',
    padding: 10,
    maxWidth: Dimensions.get("window").width - 40
  },
  message_body: {
    flex: 8,
    width: '100%',
  },
  sent_message: {
    height: 'auto',
    width: 'auto',
    padding: 10,
    maxWidth: Dimensions.get("window").width
  },
  message_content_received: {
    flexDirection: 'row',
  },
  message_content_sent: {
    flexDirection: 'row-reverse',
    borderColor: "red"
  },
  message_text_received: {
    backgroundColor: "#ffff",
    verticalAlign: 'middle',
    padding: 10,
    borderRadius: 10,
    height: 'auto',
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  message_text_sent: {
    backgroundColor: "#19A7CE",
    verticalAlign: 'middle',
    padding: 10,
    borderRadius: 10,
    height: 'auto',
    color: "#ffff",
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  messages: {
    flex: 11.8,
  },
  message: {
    fontSize: 16,
    flexShrink: 1,
    paddingLeft: 10,
    maxWidth: (Dimensions.get('window').width - 60),
    color: "rgba(0,0,0,0.6)"
  },
  name: {
    borderColor: "#19A7CE",
    fontSize: 16,
    flexShrink: 1,
    paddingLeft: 10,
    fontWeight: 500,
    marginTop: 8,
    color: "#ffff",
    fontFamily: 'Poppins-Regular',
  },
  message_dp: {
    width: 40,
    height: 40,
    // resizeMode: 'contain'
  },
  send_div: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    // paddingVertical: 10,
    paddingTop: 2,
    borderColor: "red",
    paddingHorizontal: 12,
    // flex: 1,
  },
  input_send: {
    flex: 1,
    marginRight: 16,
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    borderRadius: 8,
    // paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    marginTop: 6,
    borderWidth: 1,
    marginLeft: 15,
    padding: 5,
    marginRight: 10,
    color: "black",
    borderRadius: 3,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  head: {
    flex: 0.8,
    width: '100%',
    backgroundColor: '#19A7CE',
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 6,
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 0.3,
    height: 70,
    flexDirection: 'row',
    width: (Dimensions.get('window').width)
  },
  body: {
    flex: 11.2,
    width: '100%',
    minHeight: 11.2,
  },

  send: {
    flex: 1,
    width: '100%',
    backgroundColor: '#19A7CE'
  },
})