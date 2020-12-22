import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title="goToPage"
                    onPress={() => {
                        this.props.navigation.navigate('Bottom')
                    }}
                />
            </View>
        )
    }
}

class Page1Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page1</Text>
            </View>
        )
    }
}
class Page2Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page2</Text>
            </View>
        )
    }
}
class Page3Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page3</Text>
            </View>
        )
    }
}
class Page4Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page4</Text>
            </View>
        )
    }
}
class Page5Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page5</Text>
            </View>
        )
    }
} class Page6Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page6</Text>
            </View>
        )
    }
}
const Bottom = createMaterialBottomTabNavigator()
const TopScreen = () => {
    return (
        <Bottom.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad',height:80,padding:10}}>
            <Bottom.Screen name="Page1" component={Page1Screen} options={{
                tabBarLabel: '首页',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Bottom.Screen name="Page2" component={Page2Screen} options={{
                tabBarLabel: '信息',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }} />
            <Bottom.Screen name="Page3" component={Page3Screen} options={{
                tabBarLabel: '导航',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="car" color={color} size={26} />
                ),
            }} />
            <Bottom.Screen name="Page4" component={Page4Screen} options={{
                tabBarLabel: '用户',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }} />
        </Bottom.Navigator>
    )
}
const Stack = createStackNavigator()
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Bottom" component={TopScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default App