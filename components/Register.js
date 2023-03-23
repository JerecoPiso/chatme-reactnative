import { TextInput, View, TouchableOpacity, Text, ImageBackground, Pressable, Modal } from 'react-native';
import React, { useState } from "react";
import styles from '../assets/Style.js';
import {  auth, usersRef  } from "../components/Firebase.js"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { push } from 'firebase/database';
export default function Register({ navigation }) {
  const emailRegex = /\S+@\S+\.\S+/;
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValidEmail(emailRegex.test(text));
  };
  const register = () => {
    //     if (!isValidEmail) {
    //   setMessage("Please enter a valid email address!")
    //   setModalVisible(true)
    // } else if 
    if(username === "") {
      setMessage("Username is required!")
      setModalVisible(true)
    } else if (password === "") {
      setMessage("Password is required!")
      setModalVisible(true)
    } else {
      createUserWithEmailAndPassword(auth, email, password).then((response) => {
   
        push(usersRef, {
          username: username,
          email: email,
          active: 1,
        })
      }).catch((error) => {
        console.log(error)
      })
       
    }
  }
  return (
    <View style={styles.form}>
      <Text style={styles.logo}>ChatMe.</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{message}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View>
        <TextInput value={email} onChangeText={handleEmailChange} style={styles.input} inputMode={'email'} placeholder="Email" placeholderTextColor="rgba(0, 0, 0, 0.4)" />
        <TextInput value={username} onChangeText={(username) => setUsername(username)} style={styles.input} placeholder="Username" placeholderTextColor="rgba(0, 0, 0, 0.4)" />
        <TextInput value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} style={styles.input} placeholder="Password" placeholderTextColor="rgba(0, 0, 0, 0.4)" />
      </View>
      <View style={styles.right}>
        <Text style={styles.forgot_pass}>Forgot password?</Text>
      </View>
      <TouchableOpacity onPress={() => register()} style={styles.button_login} >
        <Text style={styles.center}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={styles.signup_text}>Already have an account? <Text style={styles.signup} onPress={() => navigation.replace('Login')} >Login</Text> </Text>
    </View>
  );
}
