import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import AppNavigation from './AppNavigation'
import {NavigationContainer} from '@react-navigation/native'
function App() {
    return (
        <Provider store={store} >
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </Provider >
    )
}

export default App