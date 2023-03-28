import React, { useState, useEffect, useRef } from 'react';
import { View, Keyboard, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth'
import { push } from 'firebase/database';
import { query, orderByChild, onValue, getDatabase, ref, firebase } from "../components/Firebase.js"
import styles from '../assets/Chatbox';
export default function Chatbox({ navigation }) {
  var scrollViewRef = useRef();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const [id, setId] = useState(route.params.uid);
  const [receiverid, setReceiverid] = useState(route.params.id);

  const handleSend = () => {
    if (message !== "") {
      let chatroomid = "";

      if (id > receiverid) {
        chatroomid = id + "&-&" + receiverid
      } else {
        chatroomid = receiverid + "&-&" + id
      }

      const msgRef = ref(getDatabase(firebase), 'messages/' + chatroomid)
      push(msgRef, {
        sender_email: getAuth().currentUser.email,
        receiver_email: route.params.email,
        message: message,
        date: Date.now()
      })
      scrollViewRef.current.scrollToEnd({ animated: true });
      setMessage('');

    } else {
      alert("No message")
    }
  };

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
    // var uid =  route.params.uid;
    let chatroomid = "";
    if (id > receiverid) {
      chatroomid = id + "&-&" + receiverid
    } else {
      chatroomid = receiverid + "&-&" + id
    }
    //  console.log(uid)
    const msgRef = ref(getDatabase(firebase), 'messages/' + chatroomid)
    const msg = query(msgRef, orderByChild('date'));
    onValue(msg, (snapshot) => {
      let tempMsgs = [];
      let json = {};
      snapshot.forEach(el => {

        json = {
          "date": el.val().date,
          "receiver_email": el.val().receiver_email,
          "sender_email": el.val().sender_email,
          "message": el.val().message
        }

        tempMsgs.push(json)
      });

      setMessages(tempMsgs)

    }, {
      onlyOnce: false,

    })

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };

  }, []);
  const containerStyle = {
    paddingBottom: keyboardHeight,
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back-outline" size={35} color="white" style={styles.back} />
        </TouchableOpacity>
        <Image style={styles.message_dp} source={require("../assets/png.png")} />
        <View style={styles.message_body}>
          <Text style={styles.name} numberOfLines={1}>{route.params.username}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.message_body} ref={scrollViewRef}>
          {
            messages.map((val, index) => (
              val.sender_email != getAuth().currentUser.email ?

                <TouchableOpacity style={styles.received_message} key={index}>
                  <View style={styles.message_content_received}>
                    <Image style={styles.message_dp} source={require("../assets/png.png")} />
                    <Text style={styles.message_text_received}>
                      {val.message}
                    </Text>
                  </View>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.sent_message} key={index}>
                  <View style={styles.message_content_sent}>

                    <Text style={styles.message_text_sent}>
                      {val.message}
                    </Text>
                  </View>
                </TouchableOpacity>
            ))
          }
        </ScrollView>
        <View style={[styles.send_div, containerStyle]}>
          <TextInput
            style={styles.input_send}
            placeholder="Type a message"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text><Ionicons name="send" size={24} color="#19A7CE" /></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}