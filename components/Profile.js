import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import styles from '../assets/Account';
export default function EditProfile({ navigation }) {
    const [selectedValue, setSelectedValue] = useState('');
    return (
        <View style={styles.container}>
            <View style={[styles.divider, {marginTop: 10}]}>
                <TouchableOpacity style={styles.Links}>
                    <View style={styles.LinksItem}>
                        <AntDesign name="profile"  style={styles.icon} size={30} color="#19A7CE" />
                        <Text style={styles.linkText}>Personal Information</Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                        <Text><AntDesign name="right" style={styles.icon} size={15} color="black" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.divider}>
                <TouchableOpacity style={styles.Links}>
                    <View style={styles.LinksItem}>
                        <MaterialIcons name="contact-mail"  style={styles.icon} size={30} color="#205E61" />
                        <Text style={styles.linkText}>Contact Information</Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                        <Text><AntDesign name="right" style={styles.icon} size={15} color="black" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.divider}>
                <TouchableOpacity style={styles.Links}>
                    <View style={styles.LinksItem}>
                        <FontAwesome5 name="lock" style={styles.icon} size={30} color="#EB455F" />
                        <Text style={styles.linkText}>Password</Text>
                    </View>
                    <View style={styles.LinksItemArrow}>
                        <Text><AntDesign name="right" style={styles.icon} size={15} color="black" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}