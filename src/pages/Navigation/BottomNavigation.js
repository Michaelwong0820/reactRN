import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bottom1 from '../main/Bottom1'
import Bottom2 from '../main/Bottom2'
import Bottom3 from '../main/Bottom3'
import Bottom4 from '../main/Bottom4'
import Book from '../main/bookScreen/Main1'
const Bottom = createMaterialBottomTabNavigator()
const HomeScreen = () => {
    return (
        <Bottom.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad', height: 80, padding: 10 }}>
            <Bottom.Screen name="Page1" component={Bottom1} options={{
                tabBarLabel: '新闻',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Bottom.Screen name="Page2" component={Bottom2} options={{
                tabBarLabel: '天气',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }} />
            <Bottom.Screen name="Page3" component={Book} options={{
                tabBarLabel: '图书',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="car" color={color} size={26} />
                ),
            }} />
            <Bottom.Screen name="Page4" component={Bottom4} options={{
                tabBarLabel: '用户',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),

            }} />
        </Bottom.Navigator>
    )
}

export default HomeScreen