import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import { messagesRef, usersRef, query, onValue, equalTo } from "../components/Firebase.js"
import styles from '../assets/Messages.js'
import { orderByValue, orderByChild, orderByKey } from 'firebase/database';
import { getAuth } from "firebase/auth";
export default function Messages({ navigation }) {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = (id, username, email) => {
        const currentUser = query(usersRef, orderByChild('email'), equalTo(getAuth().currentUser.email));
        onValue(currentUser, (snapshot) => {
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
        const currentUser = query(usersRef, orderByChild('email'), equalTo(getAuth().currentUser.email));
        onValue(currentUser, (snapshot) => {

            snapshot.forEach(el => {
                const msg = query(messagesRef, orderByValue());
                onValue(msg, (snapshot2) => {
                    let tempMsgs = [];
                    let json = {};
                   
                    if(snapshot2.size < 1){
                        setLoading(false);
                    }
                    snapshot2.forEach(el2 => {
             
                        if (el2.key.includes(el.key)) {
                        
                            const values = el2.val()
                            const messagesArray = Object.values(values);
                            const lastMessage = messagesArray.slice(-1)[0];
                            const keys = el2.key;
                            const ids = keys.split("&-&");
                            var id = 0;
                            var uid = 0;
                            if (el.key == ids[0]) {
                                uid = el.key;
                                id = ids[1]
                            } else {
                                uid = ids[1];
                                id = ids[0]
                            }

                            const currentReceiver = query(usersRef, orderByKey(), equalTo(id));
                            onValue(currentReceiver, (snapshot3) => {
                                snapshot3.forEach(el3 => {  
                                   // console.log("logg")
                                    json = {
                                        "date": lastMessage.date,
                                        "message": lastMessage.message,
                                        "id": id,
                                        "email": el3.val().email,
                                        "username": el3.val().username,
                                        "uid": uid
                                    }
                                    tempMsgs.push(json)

                                });

                            }, {
                                onlyOnce: false,

                            });
                            setLoading(false);
                        }

                    }, {
                        onlyOnce: false,

                    });
                    setMessages(tempMsgs)
                      
                })
            });
        
        }, {
            onlyOnce: true,
        });

    }, [loading])
    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color={"#19A7CE"}/>
            </View>
        )
    }
    return (
      
        <View style={styles.container}>

            <ScrollView style={styles.messages}>

                {
                    messages.map((val, index) => (
                        <TouchableOpacity style={styles.conversation} key={index} onPress={() => navigate(val.id, val.username, val.email)}>
                            {/* <Image style={styles.message_dp} source={require("../assets/png.png")} /> */}
                            <View style={styles.active}>
                                <Image source={require("../assets/png.png")} style={styles.activeImage} />
                                <View style={styles.activeCircle} />
                            </View>
                            <View style={styles.message_body}>
                                <Text style={styles.name} numberOfLines={1}>{val.username}</Text>
                                <Text style={styles.message} ellipsizeMode={'tail'} numberOfLines={1}>{val.message} </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView >
        </View>
    )
}
