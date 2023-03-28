import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import People from '../components/People'
import Messages from '../components/Messages'
import Account from '../components/Account'
const Tab = createBottomTabNavigator();

export default function App() {
    
    return (

        <Tab.Navigator 
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#19A7CE',
                    
                    // tabBarActiveBackgroundColor: '#FFB84C'
        }} 
        >
            <Tab.Screen name="Chats" component={Messages}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbox" size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="People" component={People}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-people" size={30} color={color} />
                    ),
                    
                }} />
            <Tab.Screen name="Account" component={Account}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-cog" size={30} color={color} />
                    ),
                }} />
        </Tab.Navigator>
    );
}