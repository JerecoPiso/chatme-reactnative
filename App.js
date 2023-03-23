import { SafeAreaView, TouchableOpacity } from 'react-native';
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Login from './components/Login'
import Register from './components/Register'
import Chatbox from './components/Chatbox'
import Sample from './components/Sample'
import Account from './components/Account'
import Main from './components/Main'
import People from './components/People'
import styles from './assets/Style.js';
const Stack = createNativeStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    'Poppins-Regular': require('./assets/Poppins-Regular.ttf'),

  });
  if (!loaded) {
    return null; // Render a loading screen or fallback fonts here
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login"  screenOptions={{
                 animationTypeForReplace: 'push'
                    
                    // tabBarActiveBackgroundColor: '#FFB84C'
        }}>
          <Stack.Screen name="Login" component={Login} options={{
            headerRight: () => (
              <TouchableOpacity>
                <FontAwesome5 name="ellipsis-v" size={16} color="#FFB84C" />
              </TouchableOpacity>
            )
          }} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Chatbox" component={Chatbox} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="People" component={People} />
          <Stack.Screen name="MainPage" component={Main}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}