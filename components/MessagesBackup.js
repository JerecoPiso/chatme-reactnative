import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react'
import { messagesRef, usersRef, query, onValue, equalTo } from "../components/Firebase.js"
import styles from '../assets/Messages.js'
import { startAt, orderByValue, orderByChild } from 'firebase/database';
import { getAuth } from "firebase/auth";
export default function Messages({ navigation }) {
    const [messages, setMessages] = useState([])
    const navigate = (id, email, username) => {
       
       
        const currentUser = query(usersRef, orderByChild('email'), equalTo(getAuth().currentUser.email));
         onValue(  currentUser, (snapshot) => {
            snapshot.forEach(el => {
            
                navigation.navigate("Chatbox", {
                    id: id,
                    email: email,
                    username: username,
                    uid: el.key.toString()
                })
            });
        }, {
            onlyOnce: true,
        });
     

    }
    useEffect(() => {
        // const msgRef = ref(getDatabase(firebase), 'messages')

        var ctr= 0;
        var setMessageCtr = 0;
        const currentUser = query(usersRef, orderByChild('email'), equalTo(getAuth().currentUser.email));
        onValue(currentUser, (snapshot) => {

            snapshot.forEach(el => {
              
                const msg = query(messagesRef, orderByValue());
                onValue(msg, (snapshot2) => {
                    let tempMsgs = [];
                    let json = {};
                    snapshot2.forEach(el2 => {
                        setMessageCtr = snapshot2.size;
                      
                        ctr++;
                        console.log(ctr)
                        const values = el2.val()
                        const messagesArray = Object.values(values);
                        const lastMessage = messagesArray.slice(-1)[0];
                        const keys = el2.key;
                        const ids = keys.split("&-&");
                        let email = "";
                        if (el.val().email === lastMessage.sender_email) {
                            email = lastMessage.receiver_email
                        } else {
                            email = lastMessage.sender_email
                        }
                        const currentReceiver = query(usersRef, orderByChild('email'), equalTo(email));
                        onValue(currentReceiver, (snapshot3) => {
                            snapshot3.forEach(el3 => {
                                if (el3.val().email === lastMessage.receiver_email) {
                                    json = {
                                        "date": lastMessage.date,
                                        "message": lastMessage.message,
                                        "sender_id": el.key,
                                        "receiver_id": el3.key,
                                        "sender_email": el.val().email,
                                        "receiver_email": el3.val().email,
                                        "receiver_name": el3.val().username
                                    }
                                } else {
                                    json = {
                                        "date": lastMessage.date,
                                        "message": lastMessage.message,
                                        "sender_id": el3.key,
                                        "receiver_id": el.key,
                                        "sender_email": el3.val().email,
                                        "receiver_email": el.val().email,
                                        "receiver_name": el3.val().username
                                    }
                                }
                                // console.log(json)
                                tempMsgs.push(json)

                            });
                            if(ctr == setMessageCtr){
                              
                                setMessages(tempMsgs)
                             }
                        }, {
                            onlyOnce: false,
                        });
                    
                    });
                    
                }, {
                    onlyOnce: false,
                })
            });
           
        }, {
            onlyOnce: false,
        });
        
    }, [])
    return (
        <View style={styles.container}>

            <ScrollView style={styles.messages}>
             
                {
                    messages.map((val, index) => (
                        <TouchableOpacity style={styles.conversation} key={index}  onPress={() => navigate(val.receiver_id, val.receiver_email, val.receiver_name)}>
                            <Image style={styles.message_dp} source={require("../assets/png.png")} />
                            <View style={styles.message_body}>
                                <Text style={styles.name} numberOfLines={1}>{val.receiver_name}</Text>
                                <Text style={styles.message} ellipsizeMode={'tail'} numberOfLines={1}>{val.message} </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView >
        </View>
    )
}
