import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title="goToPage"
                    onPress={() => {
                        this.props.navigation.navigate('Top')
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
}class Page6Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Page6</Text>
            </View>
        )
    }
}
const Top = createMaterialTopTabNavigator()
const TopScreen = () => {
    return (
        <Top.Navigator tabBarOptions={{
            labelStyle: { fontSize: 12  },
            tabStyle: { width: 100 },
            style: { backgroundColor: 'blue' },
            activeTintColor:'#fff',
            inactiveTintColor:'#ccc',
            indicatorStyle:{
                backgroundColor:"#fff",
                height:4
            },
            scrollEnabled:true,
            tabStyle: {
                width:80
            }
        }}>
            <Top.Screen name="Page1" component={Page1Screen} />
            <Top.Screen name="Page2" component={Page2Screen} />
            <Top.Screen name="Page3" component={Page3Screen} />
            <Top.Screen name="Page4" component={Page4Screen} />
            <Top.Screen name="Page5" component={Page5Screen} />
            <Top.Screen name="Page6" component={Page6Screen} />
        </Top.Navigator>
    )
}
const Stack = createStackNavigator()
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Top" component={TopScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default App