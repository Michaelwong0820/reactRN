import React from 'react'
import { View, Text, Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

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

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Page1">
                <Drawer.Screen 
                    name="Page1"
                    component={Page1Screen}
                    options={{
                        drawerLabel:'Page1',
                        drawerIcon:({tiniColor,focused})=> (
                            <MaterialIcon 
                                style={tiniColor}
                                size={24}
                                name={'360'}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name="Page2"
                    component={Page2Screen}
                    options={{
                        drawerLabel:'Page2',
                        drawerIcon:({tiniColor,focused})=> (
                            <MaterialIcon 
                                style={tiniColor}
                                size={24}
                                name={'5g'}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name="Page3"
                    component={Page3Screen}
                    options={{
                        drawerLabel:'Page3',
                        drawerIcon:({tiniColor,focused})=> (
                            <MaterialIcon 
                                style={tiniColor}
                                size={24}
                                name={'account-circle'}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name="Page4"
                    component={Page4Screen}
                    options={{
                        drawerLabel:'Page4',
                        drawerIcon:({tiniColor,focused})=> (
                            <MaterialIcon 
                                style={tiniColor}
                                size={24}
                                name={'add-shopping-cart'}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MyDrawer