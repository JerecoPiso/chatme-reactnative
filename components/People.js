import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { usersRef, onValue, orderByChild, query, equalTo } from "../components/Firebase.js"
import { getAuth } from "firebase/auth";
import styles from '../assets/People'
export default function People({ navigation }) {
   
    const navigate = (id, username, email) => {
       
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
   
    const [users, setUsers] = useState([])
    useEffect(() => {
        // 0 online
        // 1 offline
        const active = query(usersRef, orderByChild('active'), equalTo(0));
        onValue(active, (snapshot) => {
        
            let tempUsers = [];
            let json = {};
            snapshot.forEach(el => {
                if(el.val().email != getAuth().currentUser.email){
                    json = {
                        "id": el.key,
                        "email": el.val().email,
                        "username": el.val().username
                    }
                    tempUsers.push(json)
                }
            });

            setUsers(tempUsers)
        }, {
            onlyOnce: false,
        });
      
        
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.search_container}>
                <FontAwesome name="search" style={styles.searchLogo} size={18} color="black" />
                <TextInput style={styles.search} placeholder={'Search'}></TextInput>
            </View>
            <View style={styles.activePeople}>
                <Text style={styles.activeText}>Active ({users.length})</Text>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    {
                        users.map((val, index) => (
                            <TouchableOpacity style={styles.people} key={index} onPress={() => navigate(val.id, val.username, val.email)}>
                                <View style={styles.peopleNameLogo}>
                                    <Image style={styles.peopleDp} source={require("../assets/png.png")} />
                                    <Text style={styles.name}>{val.username}</Text>
                                </View>
                                <Octicons name="dot-fill" size={20} color="#00cc00" style={styles.dot} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}