import { Ionicons, FontAwesome5, AntDesign, FontAwesome , MaterialIcons, MaterialCommunityIcons   } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import styles from '../assets/Account'
import {  auth  } from "../components/Firebase.js"
export default function Account({ navigation }) {
    const logout = () => {
    
        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to logout?',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              { text: 'OK', onPress: () =>
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
    return (
        <View style={styles.container}>
            <View style={styles.user_dp_name}>
                <Image source={require("../assets/png.png")} style={styles.dp}></Image>
                <Text style={styles.name}> John Doe </Text>
            </View>
            <View style={styles.settings}>
                <Text style={styles.profileText}>Profile</Text>
                <TouchableOpacity style={styles.Links}>
                    <View style={styles.LinksItem}>
                        <FontAwesome name="user-circle" style={styles.icon} size={24} color="black" />
                        <Text style={styles.linkText}>Edit Profile</Text>
                    </View>
                    <Text>  <AntDesign name="right"  style={styles.icon} size={15} color="black" /></Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Links}>
                    <View style={styles.LinksItem}>
                        <MaterialCommunityIcons  style={styles.icon} name="onepassword" size={26} color="black" />
                        <Text style={styles.linkText}>Change Password</Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                            <Text>  <AntDesign name="right"  style={styles.icon} size={15} color="black" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.settings}>
                <Text style={styles.notifText}>Notifications</Text>
                <TouchableOpacity style={styles.Links}>
                    <View style={styles.LinksItem}>
                        <MaterialIcons name="circle-notifications" style={styles.icon} size={28} color="black" />   
                        <Text style={styles.linkText}>Notifications </Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                    <Text><AntDesign name="right"  style={styles.icon} size={15} color="black" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.settings}>
                <TouchableOpacity style={styles.Links} onPress={() => logout()}>
                    <View style={styles.LinksItem}>
                        <AntDesign name="logout" style={[styles.icon, { marginLeft: 3 }]} size={22} color="black" />
                        <Text style={styles.linkText}>Logout</Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                       <Text><AntDesign name="right"  style={styles.icon} size={15} color="black" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}