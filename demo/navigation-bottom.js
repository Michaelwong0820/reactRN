import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
class TopScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'page1'
    }
    render() {
        return (
            <View>
                <Text>Page1Screen</Text>
            </View>
        )
    }
}

const topBar = createMaterialTopTabNavigator({
    page1: {
        screen: TopScreen,
        navigationOptions: {
            tabBarLabel: 'all'
        }
    },
    page2: {
        screen: TopScreen,
        navigationOptions: {
            tabBarLabel: 'vue'
        }
    },
    page3: {
        screen: TopScreen,
        navigationOptions: {
            tabBarLabel: 'react'
        }
    },
    page4: {
        screen: TopScreen,
        navigationOptions: {
            tabBarLabel: 'angular'
        }
    }
}, {
    tabBarOptions: {
        style: {
            backgroundColor: '#443200'
        },
        labelStyle: {
            fontSize: 12
        },
        // tabStyle: {
        //     width:120
        // },
        // upperCaseLabel:false,
        // scrollEnabled:true
    }
})

class Page1Screen extends React.Component {
    render() {
        return (
            <View>
                <Text>Page1Screen</Text>
            </View>
        )
    }
}
class Page2Screen extends React.Component {
    render() {
        return (
            <View>
                <Text>Page2Screen</Text>
            </View>
        )
    }
}
class Page3Screen extends React.Component {
    render() {
        return (
            <View>
                <Text>Page3Screen</Text>
            </View>
        )
    }
}
class Page4Screen extends React.Component {
    render() {
        return (
            <View>
                <Text>Page4Screen</Text>
            </View>
        )
    }
}

const bottomBar = createBottomTabNavigator({
    Tab1: {
        screen: Page1Screen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (<Icon name="home" size={30} color={tintColor} />)
        }
    },
    Tab2: {
        screen: Page2Screen,
        navigationOptions: {
            tabBarLabel: 'Line',
            tabBarIcon: ({ tintColor, focused }) => (<Icon name="logout" size={30} color={tintColor} />)
        }
    },
    Tab3: {
        screen: Page3Screen,
        navigationOptions: {
            tabBarLabel: 'Comstour',
            tabBarIcon: ({ tintColor, focused }) => (<Icon name="form" size={30} color={tintColor} />)
        }
    },
    Tab4: {
        screen: Page4Screen,
        navigationOptions: {
            tabBarLabel: 'User',
            tabBarIcon: ({ tintColor, focused }) => (<Icon name="wechat" size={30} color={tintColor} />)
        }
    },
}, {
    tabBarOptions: {
        style: {
            backgroundColor: 'green',
            height:30,
            paddingTop:6,
            paddingBottom:6
        },
        labelStyle: {
            fontSize: 12,
            // color:'#fff'
        },
        activeTintColor: 'red',
        inactiveTintColor: '#fff'
        // tabStyle: {
        //     width:120
        // },
        // upperCaseLabel:false,
        // scrollEnabled:true
    }
})

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle:'Home'
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>HomeScreen</Text>
                <Icon name="home" size={30} color="#900" />
                <Button
                    title="top"
                    color="#f00"
                    onPress={() => { navigation.navigate('topBar') }}
                />
                <Button
                    title="bottom"
                    color="#f0f"
                    onPress={() => { navigation.navigate('bottomBar') }}
                />
            </View>
        )
    }
}

const stack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    topBar: {
        screen: topBar
    },
    bottomBar: {
        screen: bottomBar
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

export default createAppContainer(stack)