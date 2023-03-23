import { TextInput, View, TouchableOpacity, Text, ImageBackground, Pressable, Modal, Image } from 'react-native';
import React, { useState } from "react";
import styles from '../assets/Style.js';
import {  auth  } from "../components/Firebase.js"
import { signInWithEmailAndPassword } from 'firebase/auth';
export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const login = () => {
    if (email === "") {
      setMessage("Username is required!")
      setModalVisible(true)
    } else if (password === "") {
      setMessage("Password is required!")
      setModalVisible(true)
    } else {
  
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        navigation.replace('MainPage')
      }).catch((error) => {
        // console.log(error.message)
        alert(error.message)
      });
    }

  }


  return (
    <View style={styles.form}>

      {/* <ImageBackground source={require("../assets/bg.jpg")} resizeMode="stretch" style={styles.image}> */}
      <Text style={styles.logo}>ChatMe.</Text>
      {/* <Image style={styles.logo} source={require("../assets/syntalks..png")} /> */}
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
        <TextInput onChangeText={(email) => setEmail(email)} style={styles.input} placeholder="Username" placeholderTextColor="rgba(0, 0, 0, 0.4)" />
        <TextInput onChangeText={(password) => setPassword(password)} secureTextEntry={true} style={styles.input} placeholder="Password" placeholderTextColor="rgba(0, 0, 0, 0.4)" />
      </View>
      <View style={styles.right}>
        <Text style={styles.forgot_pass}  >Forgot password?</Text>
      </View>
      <TouchableOpacity onPress={() => login()} style={styles.button_login} >
        <Text style={styles.center}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.signup_text}>Don't have an account? <Text style={styles.signup} onPress={() => navigation.replace('Register')}>Sign up</Text> </Text>
      {/* </ImageBackground> */}

    </View>
  );
}
