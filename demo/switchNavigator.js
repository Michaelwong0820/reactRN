import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';


class Page1Screen extends React.Component {
    static navigationOptions = { 
        headerTitle:'Page1'
    }
    render() {
        return (
            <View>
                <Text>Page1Screen</Text>
                <Button
                    title="go back"
                    color="#f00"
                    onPress={() => { this.props.navigation.goBack() }}
                />
            </View>
        )
    }
}
class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle:'Home'
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>HomeScreen</Text>
                <Button
                    title="Login"
                    color="#f00"
                    onPress={() => { navigation.navigate('Auth') }}
                />
                <Button
                    title="Page"
                    color="#f0f"
                    onPress={() => { navigation.navigate('Page') }}
                />
                <Button
                    title="go back"
                    color="#f00"
                    onPress={() => { this.props.navigation.goBack() }}
                />
            </View>
        )
    }
}

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>LoginScreen</Text>
                <Button
                    title="Login"
                    color="#0f0"
                    onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }}
                /> 
                <Button
                    title="go back"
                    color="#f00"
                    onPress={() => { this.props.navigation.goBack() }}
                />
            </View>
        )
    }
}

const App = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Page: {
        screen:Page1Screen
    },
    Login: {
        screen:LoginScreen
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTitle: null,
        headerStyle: {
            backgroundColor: "#2A60E4"
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold'
        }
    }
})

const Auth = createStackNavigator({
    Login:{
        screen:LoginScreen
    }
},{
    initialRouteName:'Login'
})

const switchNavigator = createSwitchNavigator({
    App:{
        screen:App
    },
    Auth:{
        screen:Auth
    }
},{
    initialRouteName:'Auth'
})

export default createAppContainer(switchNavigator)