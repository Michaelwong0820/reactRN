import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../Welcome'
import LoginScreen from '../Login/Login'
import ResitScreen from '../Login/Resit'
import HomeScreen from '../Navigation/BottomNavigation'
import FetchScreen from '../main/FetchMemo'
import ModeScreen from '../main/Mode'
import Touchable from '../main/Touchable'
import AsyncStorageScreen from '../main/AsyncStorage'
import ReduxScreen from '../main/ReduxDemo'
import ReactRedux from '../main/React-redux'
import NewsDetail from '../main/newsScreen/newsDetail'
import BookList from '../main/bookScreen/BookList'

const Stack = createStackNavigator()
const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

const MainStackScreen = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    headerShown: true
                }}
            />
            <MainStack.Screen
                name="fetch"
                component={FetchScreen}
                options={{
                    headerShown: true
                }}
            />
            <MainStack.Screen
                name="asyncStorage"
                component={AsyncStorageScreen}
                options={{
                    headerShown: true
                }}
            />
            <MainStack.Screen
                name="redux"
                component={ReduxScreen}
                options={{
                    headerShown: true
                }}
            />
            <MainStack.Screen
                name="reactRedux"
                component={ReactRedux}
                options={{
                    headerShown: true
                }}
            />
            <MainStack.Screen
                name="newsDetail"
                component={NewsDetail}
                options={{
                    headerShown: true
                }}
            />
            <MainStack.Screen
                name="touchable"
                component={Touchable}
                options={{
                    headerShown: true
                }}
            />
            <MainStack.Screen
                name="bookList"
                component={BookList}
                options={{
                    headerShown: true
                }}
            />
        </MainStack.Navigator>
    )
}

const RootStackScreen = () => {
    return (
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="main"
                component={MainStackScreen}
                options={{
                    headerShown: false
                }}
            />
            <RootStack.Screen
                name="mode"
                component={ModeScreen}
            />
        </RootStack.Navigator>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true,
            userToken: 'ss'
        }
    }
    render() {
        return (
            <Stack.Navigator >
                {this.state.isLogin ? (
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                ) : (
                        this.state.userToken == null ? (
                            <>
                                <Stack.Screen name="Login" component={LoginScreen} />
                                <Stack.Screen name="Resit" component={ResitScreen} />
                            </>
                        ) : (
                                <Stack.Screen name="Root" component={RootStackScreen} options={{
                                    headerShown: false
                                }}/>
                            )
                    )}
            </Stack.Navigator>
        )
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLogin:false
            })
        },3000)
    }
}

export default App
