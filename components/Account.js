import { Ionicons, Fontisto , AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Alert, Switch } from 'react-native'
import React, { useState, useEffect } from "react";
import styles from '../assets/Account'
import { auth, query, usersRef, equalTo, onValue } from "../components/Firebase.js"
import { orderByChild } from 'firebase/database';
import { getAuth } from "firebase/auth";
export default function Account({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => setIsActive(previousState => !previousState);
    const [username, setUsername] = useState('')
    const logout = () => {

        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {   
                
                    text: 'OK', onPress: () =>
                        auth.signOut()
                            .then(() => {

                                navigation.navigate("Login")
                            })
                            .catch((error) => {
                                alert(error.message)
                            })
                },
            ],
            { cancelable: false }
        );
    }
    useEffect(() => {
        const currentUser = query(usersRef, orderByChild('email'), equalTo(getAuth().currentUser.email));
        onValue(currentUser, (snapshot) => {
            snapshot.forEach(el => {
                console.log(el)
                setUsername(el.val().username)
            });
        }, {
            onlyOnce: true,
        });
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require("../assets/png.png")} style={styles.dp}></Image>
                <Text style={styles.name}>{username}</Text>
            </View>
            <View style={styles.divider}>
                <View style={styles.settings}>

                    <TouchableOpacity style={styles.Links} onPress={() => navigation.navigate("Profile")}>
                        <View style={styles.LinksItem}>
                            <FontAwesome name="user-circle" style={[styles.icon, { paddingLeft: 3 }]} size={31} color="#153462" />
                            <Text style={styles.linkText}>Profile</Text>
                        </View>
                        <Text>  <AntDesign name="right" style={styles.icon} size={15} color="black" /></Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity  style={[styles.Links, { marginTop: 10 }]}>
                        <View style={styles.LinksItem}>
                            <MaterialIcons name="circle-notifications" style={[styles.icon, { marginLeft: 1 }]} size={38} color="#219F94" />
                            <Text style={styles.linkText}>Notifications</Text>
                        </View>
                        <View style={styles.LinksItemArrow}>
                            <Text><AntDesign name="right" style={styles.icon} size={15} color="black" /></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.divider}>
                <TouchableOpacity style={[styles.Links]}>
                    <View style={styles.LinksItem}>

                        <Ionicons name="moon-sharp" style={[styles.icon, { marginLeft: 1 }]} size={35} color="black" />
                        <Text style={styles.linkText}>Dark Mode</Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                    
                        <Switch
                            trackColor={{ false: '#767577', true: '#ffff' }}
                            thumbColor={isEnabled ? '#FFB84C' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.Links, { marginTop: 5 }]}>
                    <View style={styles.LinksItem}>
                      
                        <Fontisto name="radio-btn-active" style={[styles.icon, { marginLeft: 1 }]} size={32} color="#219F94" />
                        <Text style={styles.linkText}>Active Status</Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                      
                        <Switch
                            trackColor={{ false: '#767577', true: '#ffff' }}
                            thumbColor={isActive ? '#FFB84C' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleActive}
                            value={isActive}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.divider}>
                <TouchableOpacity style={styles.Links} onPress={() => logout()}>
                    <View style={styles.LinksItem}>
                        <FontAwesome name="power-off" style={[styles.icon, { paddingLeft: 3 }]} size={34} color="#F05454" />
                        <Text style={styles.linkText}>Logout</Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                        <Text><AntDesign name="right" style={styles.icon} size={15} color="black" /></Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}